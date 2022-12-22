import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './utils/jsxRender';
import { pathMiddleware } from './middlewares/mid';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';
import apiRouter from './routes/apiRouter';
import addInitRouter from './routes/addInitRouter';
import pageRouter from './routes/pageRouter';
import userRouter from './routes/pageRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3002;
const app = express();
const FileStore = store(session);

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(pathMiddleware);

app.use('/', indexRouter);
app.use('/auth/', authRouter);
app.use('/api/', apiRouter);
app.use('/add', addInitRouter);
app.use('/page', pageRouter);
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
