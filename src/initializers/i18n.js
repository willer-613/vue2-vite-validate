export default {
  install: (app, options) => {
    // inject a globally available $translate() method
    app.prototype.$translate = (key) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };
  },
};
