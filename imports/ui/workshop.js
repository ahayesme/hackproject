import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { ReactiveDict } from 'meteor/reactive-dict';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
    Meteor.subscribe('workshop');
});

Template.body.helpers({
  bio() {
    const instance = Template.instance();
  }
})
