Hull.widget('images',{
  templates: ['main'],
  datasources: {
    images: function () {
      return this.api('hull/me/images', {
        where: {
          app_id: this.sandbox.config.appId
        }
      });
    }
  },
  initialize: function () {
    this.toggleInterval();
  },
  actions: {
    delete: function (elt, evt, options) {
      evt.stopPropagation();
      this.toggleInterval();
      this.api.del(options.id).then(_.bind(function () {
        this.refresh();
        this.toggleInterval();
      }, this));
    }
  },
  toggleInterval: function () {
    if (!this._interval) {
      var refresh = _.bind(function () {
        if (!this.loggedIn()) {
          return clearInterval(this._interval);
        }
        this.refresh();
      }, this);
      this._interval = setInterval(refresh, 2000);
    } else {
      clearInterval(this._interval);
    }
  }
});
