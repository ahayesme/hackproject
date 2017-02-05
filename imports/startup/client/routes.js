import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "Homepage"});
  }
});

FlowRouter.route('/workshop', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "Workshop"});
  }
});
