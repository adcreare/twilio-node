'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var RecordList = require('./usage/record').RecordList;
var TriggerList = require('./usage/trigger').TriggerList;

var UsagePage;
var UsageList;
var UsageInstance;
var UsageContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.UsagePage
 * @augments Page
 * @description Initialize the UsagePage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns UsagePage
 */
function UsagePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(UsagePage.prototype, Page.prototype);
UsagePage.prototype.constructor = UsagePage;

/**
 * Build an instance of UsageInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns UsageInstance
 */
UsagePage.prototype.getInstance = function getInstance(payload) {
  return new UsageInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageList
 * @description Initialize the UsageList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns {function} - UsageListInstance
 */
function UsageList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.UsageList
   *
   * @param {string} sid - sid of instance
   *
   * @returns UsageContext
   */
  function UsageListInstance(sid) {
    return UsageListInstance.get(sid);
  }

  UsageListInstance._version = version;
  // Path Solution
  UsageListInstance._solution = {
    accountSid: accountSid
  };

  // Components
  UsageListInstance._records = undefined;
  UsageListInstance._triggers = undefined;

  Object.defineProperty(UsageListInstance,
    'records', {
    get: function records() {
      if (!this._records) {
        this._records = new RecordList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._records;
    },
  });

  Object.defineProperty(UsageListInstance,
    'triggers', {
    get: function triggers() {
      if (!this._triggers) {
        this._triggers = new TriggerList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._triggers;
    },
  });

  return UsageListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageInstance
 * @augments InstanceResource
 * @description Initialize the UsageContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 */
function UsageInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(UsageInstance.prototype, InstanceResource.prototype);
UsageInstance.prototype.constructor = UsageInstance;

module.exports = {
  UsagePage: UsagePage,
  UsageList: UsageList,
  UsageInstance: UsageInstance,
  UsageContext: UsageContext
};