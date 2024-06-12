const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.offer.store',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/wm',
      },
    })
  );
};
