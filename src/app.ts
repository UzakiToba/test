import * as createError from 'http-errors';
import * as fs from 'fs';
import { app } from './common';
import routes from './routes/routes';

// app.use('/', routes.index);

// 404の時
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err: any, req: any, res: any, next: any) => {
  res.locals = {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
    title: err.status || 500
  };
  res.status(err.status || 500);
  res.render('error');
});

export default app;
