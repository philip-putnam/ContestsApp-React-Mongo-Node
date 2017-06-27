const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStarts = function(message) {
  console.info('************');
  console.info(message);
  console.info('************');
};

export default {
  mongodbUri: 'mongodb://localhost:27017/test',
  port: env.PORT || 8080,
  host: env.HOST || '127.0.0.1',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
