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

