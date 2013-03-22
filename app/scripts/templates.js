this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["hullstache/loggedIn"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <h1 class='post-title'><a href=\"#\" class='btn' data-hull-action=\"sendByMail\">Send me the mail again</a></h1>\n  ";
  }

function program3(depth0,data) {
  
  
  return "\n    <h3>Sad panda, you have no picture in your profile</h3>\n  ";
  }

  buffer += "<div>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.picture, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["Hull"]["templates"]["hullstache/notLogged"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n";
  });

this["Hull"]["templates"]["identity/identity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"hull-media hull-identity\">\n     <h1 class='post-title'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", you've been hullstached.</h1>\n     <div data-hull-widget=\"hullstache\"></div>\n     <div class='center'><p><a data-hull-action=\"logout\" class=\"\">Now logout</a></p></div>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.authServices) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.authServices; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.authServices) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.noop,data:data};
  if (stack1 = helpers.authServices) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.authServices; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.authServices) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <div class=\"center\">\n      <h1 class='post-title'>DUDE, Y U NOO CLICK THIS BUTTON ? </h1>\n      <h1 class=\"post-title\"><a data-hull-action=\"login\" data-hull-provider=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" class=\"btn\"> hullstache me with ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.classify),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "classify", depth0, options)))
    + " </a> </h1>\n      <p>you gonna get hullstached, and you're gonna receive a mail with it !</p>\n    </div>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0.debug, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n    No Auth Services configured, please add at least one in the admin.\n  ";
  }

  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });