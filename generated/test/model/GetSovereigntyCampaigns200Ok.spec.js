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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetSovereigntyCampaigns200Ok', function() {
    it('should create an instance of GetSovereigntyCampaigns200Ok', function() {
      // uncomment below and update the code to test GetSovereigntyCampaigns200Ok
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetSovereigntyCampaigns200Ok);
    });

    it('should have the property attackersScore (base name: "attackers_score")', function() {
      // uncomment below and update the code to test the property attackersScore
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaign_id")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property constellationId (base name: "constellation_id")', function() {
      // uncomment below and update the code to test the property constellationId
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property defenderId (base name: "defender_id")', function() {
      // uncomment below and update the code to test the property defenderId
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property defenderScore (base name: "defender_score")', function() {
      // uncomment below and update the code to test the property defenderScore
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "event_type")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property participants (base name: "participants")', function() {
      // uncomment below and update the code to test the property participants
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property solarSystemId (base name: "solar_system_id")', function() {
      // uncomment below and update the code to test the property solarSystemId
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "start_time")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

    it('should have the property structureId (base name: "structure_id")', function() {
      // uncomment below and update the code to test the property structureId
      //var instane = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      //expect(instance).to.be();
    });

  });

}));
