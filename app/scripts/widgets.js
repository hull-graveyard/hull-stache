/*jshint browser: true*/
/*global Hull:true */
Hull.widget('hullstache', {
  templates: ['loggedIn', 'notLogged'],
  refreshEvents: ['model.hull.me.change'],
  initialize: function () {
    "use strict";
    this.sendImage();
  },
  beforeRender: function (data) {
    "use strict";
    this.template = this.loggedIn('facebook') ? 'loggedIn' : 'notLogged';
    data.picture = this.getPicture();
  },
  actions: {
    sendByMail: function (elt, evt, data) {
      "use strict";
      evt.preventDefault();
      this.sendImage();
    }
  },
  getPicture: function () {
    "use strict";
    if (!this.loggedIn('facebook')) {
      return null;
    }
    return this.loggedIn('facebook').facebook.picture;
  },
  sendImage: function () {
    "use strict";
    // this.api.post('me/images', {name: "hull-stache", source_url: "http://mustachify.me/?src=" + encodeURIComponent(this.getPicture().replace('type=square', 'type=large'))}).then(function (obj) {
    //   window.alert('Check your inbox!');
    // });
  }
});

