const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * Create a simple proxy that automatically removes the prefix endpoint
 * @param {*} app app to configure proxy on
 * @param {*} endpoint endpoint you want to use for the proxy
 * @param {*} target proxy target
 */
const createSimpleProxy = (app, endpoint, target) => {
  app.use(
    endpoint,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^${endpoint}`]: "",
      },
    }),
  );
};

/**
 * Actual proxy configuration
 * @param {*} app app to configure proxy on
 */
module.exports = function (app) {
  createSimpleProxy(app, "/tendersguru", "https://tenders.guru");
};
