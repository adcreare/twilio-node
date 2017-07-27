'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('MessageInteraction', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.proxy.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .sessions('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .messageInteractions.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sessionSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        participantSid: 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Proxy/Services/<%= serviceSid %>/Sessions/<%= sessionSid %>/Participants/<%= participantSid %>/MessageInteractions')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'data': 'body',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'participant_sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'inbound_participant_sid': null,
          'inbound_resource_sid': null,
          'inbound_resource_status': null,
          'inbound_resource_type': null,
          'inbound_resource_url': null,
          'outbound_participant_sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'outbound_resource_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'outbound_resource_status': 'sent',
          'outbound_resource_type': 'Message',
          'outbound_resource_url': null,
          'sid': 'KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'completed',
          'url': 'https://preview.twilio.com/Proxy/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions/KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'session_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.preview.proxy.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .sessions('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .messageInteractions.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.proxy.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .sessions('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .messageInteractions('KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sessionSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        participantSid: 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Proxy/Services/<%= serviceSid %>/Sessions/<%= sessionSid %>/Participants/<%= participantSid %>/MessageInteractions/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'data': 'data',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'participant_sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'inbound_participant_sid': null,
          'inbound_resource_sid': null,
          'inbound_resource_status': null,
          'inbound_resource_type': null,
          'inbound_resource_url': null,
          'outbound_participant_sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'outbound_resource_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'outbound_resource_status': 'sent',
          'outbound_resource_type': 'Message',
          'outbound_resource_url': null,
          'sid': 'KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'completed',
          'url': 'https://preview.twilio.com/Proxy/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions/KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'session_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.proxy.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .sessions('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .messageInteractions('KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.proxy.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .sessions('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .messageInteractions.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sessionSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        participantSid: 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Proxy/Services/<%= serviceSid %>/Sessions/<%= sessionSid %>/Participants/<%= participantSid %>/MessageInteractions')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'interactions': [],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/Proxy/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/Proxy/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'interactions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.proxy.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .sessions('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .messageInteractions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
