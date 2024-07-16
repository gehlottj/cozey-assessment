/* jshint node: true */
'use strict';
var express = require('express');
var config = require('./../../config/config');
var _ = require('lodash');
var glob = require('glob');
var fs = require('fs');
var async = require('async');
const bodyParser = require('body-parser');
const cors = require('cors');

var catchError = {
	success: false,
	msg: 'Something went wrong'
};

function customCatchError(errorObj) {
	var error = _.cloneDeep(catchError);

	if (!errorObj || typeof errorObj !== "object") {
		errorObj = {};
	}

	_.forEach(errorObj, function(value, key) {
		//ignore '!=' warning
		if (value !== undefined) {
			error[key] = value;
		}
	});

	//Assigning msg to message if a message is not explicitly set
	if (!errorObj.message)
		error.message = errorObj.msg;

	return error;
}

exports.express = express;
exports.cors = cors;
exports.config = config;
exports._ = _;
exports.glob = glob;
exports.fs = fs;
exports.async = async;
exports.bodyParser = bodyParser;
exports.customCatchError = customCatchError;