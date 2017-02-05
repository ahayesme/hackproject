import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Workshops = new Mongo.Collection('workshops');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('workshops', function workshopsPublication() {
    return Workshops.find();
  });
}

Meteor.methods({
  'workshops.insert'(name) {
    Workshops.insert({
      name,
      createdAt: new Date(),
    })
  }
});
