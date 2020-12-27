import express from 'express';

import environment from './environments/environment';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/hello', (req, resp) => {
  resp.send('world');
});

app.listen(environment.port, () => {
  console.log(`Skeleton listening at http://localhost:${environment.port}`);
});
