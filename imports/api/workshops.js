import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('workshops');

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
