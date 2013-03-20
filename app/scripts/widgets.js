/*global Hull:true */
Hull.widget("hullo", {
  templates: ['hullo']
});





//--------


Hull.widget('hullstache', {
  templates: ['loggedIn', 'notLogged'],
  refreshEvents: ['model.hull.me.change'],
  beforeRender: function () {
    this.template = this.loggedIn() ? 'loggedIn' : 'notLogged';
  },
  actions: {
    mustache: function () {
      var me = this.data.me;
      var picture = me.get('identities')[0].picture;
      this.api.put('me/profile', {moustache_updated: Date.now()});
    }
  }
});





//--------


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
