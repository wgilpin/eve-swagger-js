/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.10.dev12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetCharactersCharacterIdCalendar200Ok', 'model/GetCharactersCharacterIdCalendarInternalServerError', 'model/GetCharactersCharacterIdCalendarForbidden', 'model/GetCharactersCharacterIdCalendarEventIdForbidden', 'model/GetCharactersCharacterIdCalendarEventIdInternalServerError', 'model/GetCharactersCharacterIdCalendarEventIdOk', 'model/PutCharactersCharacterIdCalendarEventIdResponse', 'model/PutCharactersCharacterIdCalendarEventIdInternalServerError', 'model/PutCharactersCharacterIdCalendarEventIdForbidden'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdCalendar200Ok'), require('../model/GetCharactersCharacterIdCalendarInternalServerError'), require('../model/GetCharactersCharacterIdCalendarForbidden'), require('../model/GetCharactersCharacterIdCalendarEventIdForbidden'), require('../model/GetCharactersCharacterIdCalendarEventIdInternalServerError'), require('../model/GetCharactersCharacterIdCalendarEventIdOk'), require('../model/PutCharactersCharacterIdCalendarEventIdResponse'), require('../model/PutCharactersCharacterIdCalendarEventIdInternalServerError'), require('../model/PutCharactersCharacterIdCalendarEventIdForbidden'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.CalendarApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdOk, root.EveSwaggerInterface.PutCharactersCharacterIdCalendarEventIdResponse, root.EveSwaggerInterface.PutCharactersCharacterIdCalendarEventIdInternalServerError, root.EveSwaggerInterface.PutCharactersCharacterIdCalendarEventIdForbidden);
  }
}(this, function(ApiClient, GetCharactersCharacterIdCalendar200Ok, GetCharactersCharacterIdCalendarInternalServerError, GetCharactersCharacterIdCalendarForbidden, GetCharactersCharacterIdCalendarEventIdForbidden, GetCharactersCharacterIdCalendarEventIdInternalServerError, GetCharactersCharacterIdCalendarEventIdOk, PutCharactersCharacterIdCalendarEventIdResponse, PutCharactersCharacterIdCalendarEventIdInternalServerError, PutCharactersCharacterIdCalendarEventIdForbidden) {
  'use strict';

  /**
   * Calendar service.
   * @module api/CalendarApi
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new CalendarApi. 
   * @alias module:api/CalendarApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdCalendar operation.
     * @callback module:api/CalendarApi~getCharactersCharacterIdCalendarCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdCalendar200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List calendar event summaries
     * Get 50 event summaries from the calendar. If no event ID is given, the resource will return the next 50 chronological event summaries from now. If an event ID is specified, it will return the next 50 chronological event summaries from after that event.   ---  Alternate route: &#x60;/v1/characters/{character_id}/calendar/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/calendar/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/calendar/&#x60;   ---  This route is cached for up to 5 seconds
     * @param {Integer} characterId The character to retrieve events from
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.fromEvent The event ID to retrieve events from
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CalendarApi~getCharactersCharacterIdCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdCalendar200Ok>}
     */
    this.getCharactersCharacterIdCalendar = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdCalendar";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'from_event': opts['fromEvent'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdCalendar200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/calendar/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdCalendarEventId operation.
     * @callback module:api/CalendarApi~getCharactersCharacterIdCalendarEventIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdCalendarEventIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an event
     * Get all the information for a specific event  ---  Alternate route: &#x60;/v3/characters/{character_id}/calendar/{event_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/calendar/{event_id}/&#x60;   ---  This route is cached for up to 5 seconds
     * @param {Integer} characterId The character id requesting the event
     * @param {Integer} eventId The id of the event requested
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CalendarApi~getCharactersCharacterIdCalendarEventIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdCalendarEventIdOk}
     */
    this.getCharactersCharacterIdCalendarEventId = function(characterId, eventId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdCalendarEventId";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling getCharactersCharacterIdCalendarEventId";
      }


      var pathParams = {
        'character_id': characterId,
        'event_id': eventId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdCalendarEventIdOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/calendar/{event_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCharactersCharacterIdCalendarEventId operation.
     * @callback module:api/CalendarApi~putCharactersCharacterIdCalendarEventIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Respond to an event
     * Set your response status to an event  ---  Alternate route: &#x60;/v3/characters/{character_id}/calendar/{event_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/calendar/{event_id}/&#x60; 
     * @param {Integer} characterId The character ID requesting the event
     * @param {Integer} eventId The ID of the event requested
     * @param {module:model/PutCharactersCharacterIdCalendarEventIdResponse} response The response value to set, overriding current value.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CalendarApi~putCharactersCharacterIdCalendarEventIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putCharactersCharacterIdCalendarEventId = function(characterId, eventId, response, opts, callback) {
      opts = opts || {};
      var postBody = response;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling putCharactersCharacterIdCalendarEventId";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling putCharactersCharacterIdCalendarEventId";
      }

      // verify the required parameter 'response' is set
      if (response == undefined || response == null) {
        throw "Missing the required parameter 'response' when calling putCharactersCharacterIdCalendarEventId";
      }


      var pathParams = {
        'character_id': characterId,
        'event_id': eventId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/calendar/{event_id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
