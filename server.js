import config from './config';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send('Hello express');
});

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port)
});
