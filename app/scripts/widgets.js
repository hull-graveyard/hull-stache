/*global Hull:true */
Hull.widget("hullo", {
  templates: ['hullo']
});





//--------


Hull.widget('hullstache', {
  templates: ['loggedIn', 'notLogged'],
  refreshEvents: ['model.hull.me.change'],
  beforeRender: function (data) {
    this.template = this.loggedIn() ? 'loggedIn' : 'notLogged';
    data.picture = encodeURIComponent(data.me.identities[0].picture.replace('type=square', 'type=large'));
  },
  actions: {
    sendByMail: function (elt, evt, data) {
      var imgSrc = this.$el.find('#hull_stache').attr('src');
      evt.preventDefault();
      this.api.post('me/images', {name: "hull-stache", source_url: imgSrc}).then(function (obj) {
        alert('Check your inbox!');
      });
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
