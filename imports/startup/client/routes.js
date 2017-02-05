import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  action: function() {
    console.log("homepage");
    BlazeLayout.render("mainLayout", {content: "Homepage"});
  }
});

FlowRouter.route('/workshop', {
  action: function() {
    console.log("workshop");
    BlazeLayout.render("mainLayout", {content: "Workshop"});
  }
});

FlowRouter.route('/about', {
  action: function() {
    console.log("about");
    BlazeLayout.render("mainLayout", {content: "About"});
  }
});
