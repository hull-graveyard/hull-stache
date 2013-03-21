this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["hullstache/loggedIn"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<img src=\"http://mustachify.me?src=";
  if (stack1 = helpers.picture) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picture; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"hull_stache\"/><br>\n<a href=\"#\" data-hull-action=\"sendByMail\">Send By Mail</a>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\nNo picture in the profile\n";
  }

  buffer += "<div>\n";
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

this["Hull"]["templates"]["images/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <div style=\"float:left\">\n    <img src=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.imageUrl),stack1 ? stack1.call(depth0, depth0.id, options) : helperMissing.call(depth0, "imageUrl", depth0.id, options)))
    + "/><br>\n    <a href=\"#\" data-hull-action=\"delete\" data-hull-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Delete</a>\n  </div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.images) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.images; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.images) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });