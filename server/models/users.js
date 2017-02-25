/*
 * Copyright 2017 (C) <Centennial College> COMP308-Midterm_test
 * 
 * Created on : 25-02-2017
 * Author     : Hao Jiang (300858525)
 * Web app Name: My Book Lists
 * File Name: users.js
 *
 *-----------------------------------------------------------------------------
 * Revision History (Release 1.0.0.0)
 *-----------------------------------------------------------------------------
 */


// require modules for our User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
let passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new Schema({
  username: {
    type: String,
    default: '',
    trim: true,
    required: 'username is required'
  },
 password: {
    type: String,
    default: '',
    trim: true,
    required: 'password is required'
  },
  email: {
    type: String,
    default: '',
    trim: true,
    required: 'email is required'
  },
  displayName: {
    type: String,
    default: '',
    trim: true,
    required: 'Display Name is required'
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
},{
  //here define the collections in db, is case sensitive
  collection: "users"
});

let options = ({missingPasswordError: "Wrong Password"});

UserSchema.plugin(passportLocalMongoose, options);

exports.User = mongoose.model('User', UserSchema);