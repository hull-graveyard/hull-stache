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

