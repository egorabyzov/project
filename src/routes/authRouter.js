import express from 'express';
import { hash, compare } from 'bcrypt';
import { User } from '../../db/models';

const auth = express.Router();

auth.get('/reg', (req, res) => {
  res.render('Layout');
});

auth.get('/login', (req, res) => {
  res.render('Layout');
});

auth.post('/reg', async (req, res) => {
  const { name, email, password } = req.body; // забираем все нужные свойства;
  // console.log(req.body);
  // если user ввел только пароль или только логин возвращаем сообщение которое покажем над формой
  if (!name || !email || !password) return res.status(400).json({ message: 'Все поля обязательны для заполнения!' });

  // пароль был введен? тогда хэшируем его
  const hashPass = await hash(password, 10);
  try {
    const [user, isCreated] = await User.findOrCreate({ // метод ищет в базе и если не нахит зап-ет
      // возвращает при этом найденный обьект и false либо созданный объект и true
      where: { email },
      defaults: {
        name, email, password: hashPass,
      },
    });
    if (!isCreated) return res.status(401).json({ message: 'Вы уже зарегистрированы, пожалуйста, пройдите авторизацию!' });
    req.session.user = { id: user.id, name: user.name, email: user.email };
    res.sendStatus(200);
  } catch (err) {
    // console.log(err);
  }
});

auth.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  if (!email || !password) return res.status(400).json({ message: 'Все поля обязательны для заполнения!' });
  try {
    // ищем user в БД по email
    const userFromDB = await User.findOne({ where: { email } });
    // если не находим сообщаем что введенные им данные неверны
    if (!userFromDB) return res.status(400).json({ message: 'Неверно введена почта или пароль пользователя!' });
    // console.log(userFromDB);
    // сравниваем введеный пароль и захэшированый пароль из БД
    const isValidPassword = await compare(password, userFromDB.password);
    // если не сходится сообщаем что введенные им данные неверны
    if (!isValidPassword) return res.status(400).json({ message: 'Неверно введён логин или пароль пользователя!' });

    // создаем сессию с нашим userFromDB и отправляем его на фронт
    req.session.user = userFromDB;
    res.json(userFromDB);
  } catch (err) {
    res.status(400).json({ message: 'Неверно введён логин или пароль пользователя!' });
  }
});

auth.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // удалить куку
  req.session.destroy(); // Завершить сессию
  res.redirect('/');
});
export default auth;
