module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/chatroom" : "/",
  devServer: {
    disableHostCheck: true,
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false
  }
};
