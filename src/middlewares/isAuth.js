// export default function authCheck(req, res, next) {
//   // Вопрос нужен чтобы убедиться, что это свойство не undefined
//   if (!req.session?.user) return res.status(401).json({ message: 'Пользователь не авторизирован' });
//   // res.redirect('/');
//   next();
// }

export default function checkAuth(req, res, next) {
  if (req.session?.user) return next();
  return res.sendStatus(400);
}
