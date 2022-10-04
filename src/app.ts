import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import usersRouter from './routes/users';
import db from './config/db.config';
import bankAccountRouter from './routes/bankAccountRoute';
import transferRoutes  from '././routes/transferRoutes'
db.sync()
  // db.sync({ force: true })
  .then(() => {
    console.log('Successfully connected to the Database');
  })
  .catch((Error) => {
    console.log('Unable to connect to the database');
    // throw new Error('Unable to connect to the database');
  });

const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api-v1/users', usersRouter);
app.use('/api-v1/accounts', bankAccountRouter);
app.use('/airtime', transferRoutes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});
export default app;
