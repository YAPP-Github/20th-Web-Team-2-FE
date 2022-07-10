const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/', {
      target: 'http://49.50.175.112:8080',
      changeOrigin: true,
    }),
  );
};
