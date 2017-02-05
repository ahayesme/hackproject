import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Workshops = new Mongo.Collection('workshops');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('workshops', function workshopsPublication() {
    return Workshops.find({
  $or: [
    { private: { $ne: true } },
    { owner: this.userId },
  ],
  });
  });
}

Meteor.methods({
  'workshops.insert'(name) {

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Workshops.insert({
      name,
      createdAt: new Date(),
      owner: this.userId,
    })
  }
});
