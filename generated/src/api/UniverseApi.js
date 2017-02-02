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
    define(['ApiClient', 'model/GetUniverseBloodlines200Ok', 'model/GetUniverseBloodlinesInternalServerError', 'model/GetUniverseCategoriesInternalServerError', 'model/GetUniverseCategoriesCategoryIdInternalServerError', 'model/GetUniverseCategoriesCategoryIdNotFound', 'model/GetUniverseCategoriesCategoryIdOk', 'model/GetUniverseFactions200Ok', 'model/GetUniverseFactionsInternalServerError', 'model/GetUniverseGroupsInternalServerError', 'model/GetUniverseGroupsGroupIdNotFound', 'model/GetUniverseGroupsGroupIdInternalServerError', 'model/GetUniverseGroupsGroupIdOk', 'model/GetUniverseRaces200Ok', 'model/GetUniverseRacesInternalServerError', 'model/GetUniverseStationsStationIdInternalServerError', 'model/GetUniverseStationsStationIdOk', 'model/GetUniverseStructuresInternalServerError', 'model/GetUniverseStructuresStructureIdForbidden', 'model/GetUniverseStructuresStructureIdInternalServerError', 'model/GetUniverseStructuresStructureIdOk', 'model/GetUniverseStructuresStructureIdNotFound', 'model/GetUniverseSystemsSystemIdNotFound', 'model/GetUniverseSystemsSystemIdInternalServerError', 'model/GetUniverseSystemsSystemIdOk', 'model/GetUniverseTypesInternalServerError', 'model/GetUniverseTypesTypeIdNotFound', 'model/GetUniverseTypesTypeIdOk', 'model/GetUniverseTypesTypeIdInternalServerError', 'model/PostUniverseNamesNotFound', 'model/PostUniverseNames200Ok', 'model/PostUniverseNamesInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetUniverseBloodlines200Ok'), require('../model/GetUniverseBloodlinesInternalServerError'), require('../model/GetUniverseCategoriesInternalServerError'), require('../model/GetUniverseCategoriesCategoryIdInternalServerError'), require('../model/GetUniverseCategoriesCategoryIdNotFound'), require('../model/GetUniverseCategoriesCategoryIdOk'), require('../model/GetUniverseFactions200Ok'), require('../model/GetUniverseFactionsInternalServerError'), require('../model/GetUniverseGroupsInternalServerError'), require('../model/GetUniverseGroupsGroupIdNotFound'), require('../model/GetUniverseGroupsGroupIdInternalServerError'), require('../model/GetUniverseGroupsGroupIdOk'), require('../model/GetUniverseRaces200Ok'), require('../model/GetUniverseRacesInternalServerError'), require('../model/GetUniverseStationsStationIdInternalServerError'), require('../model/GetUniverseStationsStationIdOk'), require('../model/GetUniverseStructuresInternalServerError'), require('../model/GetUniverseStructuresStructureIdForbidden'), require('../model/GetUniverseStructuresStructureIdInternalServerError'), require('../model/GetUniverseStructuresStructureIdOk'), require('../model/GetUniverseStructuresStructureIdNotFound'), require('../model/GetUniverseSystemsSystemIdNotFound'), require('../model/GetUniverseSystemsSystemIdInternalServerError'), require('../model/GetUniverseSystemsSystemIdOk'), require('../model/GetUniverseTypesInternalServerError'), require('../model/GetUniverseTypesTypeIdNotFound'), require('../model/GetUniverseTypesTypeIdOk'), require('../model/GetUniverseTypesTypeIdInternalServerError'), require('../model/PostUniverseNamesNotFound'), require('../model/PostUniverseNames200Ok'), require('../model/PostUniverseNamesInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.UniverseApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseBloodlines200Ok, root.EveSwaggerInterface.GetUniverseBloodlinesInternalServerError, root.EveSwaggerInterface.GetUniverseCategoriesInternalServerError, root.EveSwaggerInterface.GetUniverseCategoriesCategoryIdInternalServerError, root.EveSwaggerInterface.GetUniverseCategoriesCategoryIdNotFound, root.EveSwaggerInterface.GetUniverseCategoriesCategoryIdOk, root.EveSwaggerInterface.GetUniverseFactions200Ok, root.EveSwaggerInterface.GetUniverseFactionsInternalServerError, root.EveSwaggerInterface.GetUniverseGroupsInternalServerError, root.EveSwaggerInterface.GetUniverseGroupsGroupIdNotFound, root.EveSwaggerInterface.GetUniverseGroupsGroupIdInternalServerError, root.EveSwaggerInterface.GetUniverseGroupsGroupIdOk, root.EveSwaggerInterface.GetUniverseRaces200Ok, root.EveSwaggerInterface.GetUniverseRacesInternalServerError, root.EveSwaggerInterface.GetUniverseStationsStationIdInternalServerError, root.EveSwaggerInterface.GetUniverseStationsStationIdOk, root.EveSwaggerInterface.GetUniverseStructuresInternalServerError, root.EveSwaggerInterface.GetUniverseStructuresStructureIdForbidden, root.EveSwaggerInterface.GetUniverseStructuresStructureIdInternalServerError, root.EveSwaggerInterface.GetUniverseStructuresStructureIdOk, root.EveSwaggerInterface.GetUniverseStructuresStructureIdNotFound, root.EveSwaggerInterface.GetUniverseSystemsSystemIdNotFound, root.EveSwaggerInterface.GetUniverseSystemsSystemIdInternalServerError, root.EveSwaggerInterface.GetUniverseSystemsSystemIdOk, root.EveSwaggerInterface.GetUniverseTypesInternalServerError, root.EveSwaggerInterface.GetUniverseTypesTypeIdNotFound, root.EveSwaggerInterface.GetUniverseTypesTypeIdOk, root.EveSwaggerInterface.GetUniverseTypesTypeIdInternalServerError, root.EveSwaggerInterface.PostUniverseNamesNotFound, root.EveSwaggerInterface.PostUniverseNames200Ok, root.EveSwaggerInterface.PostUniverseNamesInternalServerError);
  }
}(this, function(ApiClient, GetUniverseBloodlines200Ok, GetUniverseBloodlinesInternalServerError, GetUniverseCategoriesInternalServerError, GetUniverseCategoriesCategoryIdInternalServerError, GetUniverseCategoriesCategoryIdNotFound, GetUniverseCategoriesCategoryIdOk, GetUniverseFactions200Ok, GetUniverseFactionsInternalServerError, GetUniverseGroupsInternalServerError, GetUniverseGroupsGroupIdNotFound, GetUniverseGroupsGroupIdInternalServerError, GetUniverseGroupsGroupIdOk, GetUniverseRaces200Ok, GetUniverseRacesInternalServerError, GetUniverseStationsStationIdInternalServerError, GetUniverseStationsStationIdOk, GetUniverseStructuresInternalServerError, GetUniverseStructuresStructureIdForbidden, GetUniverseStructuresStructureIdInternalServerError, GetUniverseStructuresStructureIdOk, GetUniverseStructuresStructureIdNotFound, GetUniverseSystemsSystemIdNotFound, GetUniverseSystemsSystemIdInternalServerError, GetUniverseSystemsSystemIdOk, GetUniverseTypesInternalServerError, GetUniverseTypesTypeIdNotFound, GetUniverseTypesTypeIdOk, GetUniverseTypesTypeIdInternalServerError, PostUniverseNamesNotFound, PostUniverseNames200Ok, PostUniverseNamesInternalServerError) {
  'use strict';

  /**
   * Universe service.
   * @module api/UniverseApi
   * @version 0.3.10.dev12
   */

  /**
   * Constructs a new UniverseApi. 
   * @alias module:api/UniverseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUniverseBloodlines operation.
     * @callback module:api/UniverseApi~getUniverseBloodlinesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetUniverseBloodlines200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get bloodlines
     * Get a list of bloodlines  ---  Alternate route: &#x60;/v1/universe/bloodlines/&#x60;  Alternate route: &#x60;/legacy/universe/bloodlines/&#x60;  Alternate route: &#x60;/dev/universe/bloodlines/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language to use in the response (default to en-us)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseBloodlinesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetUniverseBloodlines200Ok>}
     */
    this.getUniverseBloodlines = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetUniverseBloodlines200Ok];

      return this.apiClient.callApi(
        '/universe/bloodlines/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseCategories operation.
     * @callback module:api/UniverseApi~getUniverseCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Integer'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item categories
     * Get a list of item categories  ---  Alternate route: &#x60;/v1/universe/categories/&#x60;  Alternate route: &#x60;/legacy/universe/categories/&#x60;  Alternate route: &#x60;/dev/universe/categories/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Integer'>}
     */
    this.getUniverseCategories = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Integer'];

      return this.apiClient.callApi(
        '/universe/categories/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseCategoriesCategoryId operation.
     * @callback module:api/UniverseApi~getUniverseCategoriesCategoryIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseCategoriesCategoryIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item category information
     * Get information of an item category  ---  Alternate route: &#x60;/v1/universe/categories/{category_id}/&#x60;  Alternate route: &#x60;/legacy/universe/categories/{category_id}/&#x60;  Alternate route: &#x60;/dev/universe/categories/{category_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} categoryId An Eve item category ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language to use in the response (default to en-us)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseCategoriesCategoryIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseCategoriesCategoryIdOk}
     */
    this.getUniverseCategoriesCategoryId = function(categoryId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId == undefined || categoryId == null) {
        throw "Missing the required parameter 'categoryId' when calling getUniverseCategoriesCategoryId";
      }


      var pathParams = {
        'category_id': categoryId
      };
      var queryParams = {
        'language': opts['language'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetUniverseCategoriesCategoryIdOk;

      return this.apiClient.callApi(
        '/universe/categories/{category_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseFactions operation.
     * @callback module:api/UniverseApi~getUniverseFactionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetUniverseFactions200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get factions
     * Get a list of factions  ---  Alternate route: &#x60;/v1/universe/factions/&#x60;  Alternate route: &#x60;/legacy/universe/factions/&#x60;  Alternate route: &#x60;/dev/universe/factions/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language to use in the response (default to en-us)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseFactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetUniverseFactions200Ok>}
     */
    this.getUniverseFactions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetUniverseFactions200Ok];

      return this.apiClient.callApi(
        '/universe/factions/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseGroups operation.
     * @callback module:api/UniverseApi~getUniverseGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Integer'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item groups
     * Get a list of item groups  ---  Alternate route: &#x60;/v1/universe/groups/&#x60;  Alternate route: &#x60;/legacy/universe/groups/&#x60;  Alternate route: &#x60;/dev/universe/groups/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Which page to query
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Integer'>}
     */
    this.getUniverseGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Integer'];

      return this.apiClient.callApi(
        '/universe/groups/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseGroupsGroupId operation.
     * @callback module:api/UniverseApi~getUniverseGroupsGroupIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseGroupsGroupIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item group information
     * Get information on an item group  ---  Alternate route: &#x60;/v1/universe/groups/{group_id}/&#x60;  Alternate route: &#x60;/legacy/universe/groups/{group_id}/&#x60;  Alternate route: &#x60;/dev/universe/groups/{group_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} groupId An Eve item group ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language to use in the response (default to en-us)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseGroupsGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseGroupsGroupIdOk}
     */
    this.getUniverseGroupsGroupId = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getUniverseGroupsGroupId";
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'language': opts['language'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetUniverseGroupsGroupIdOk;

      return this.apiClient.callApi(
        '/universe/groups/{group_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseRaces operation.
     * @callback module:api/UniverseApi~getUniverseRacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetUniverseRaces200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character races
     * Get a list of character races  ---  Alternate route: &#x60;/v1/universe/races/&#x60;  Alternate route: &#x60;/legacy/universe/races/&#x60;  Alternate route: &#x60;/dev/universe/races/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language to use in the response (default to en-us)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseRacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetUniverseRaces200Ok>}
     */
    this.getUniverseRaces = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetUniverseRaces200Ok];

      return this.apiClient.callApi(
        '/universe/races/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseStationsStationId operation.
     * @callback module:api/UniverseApi~getUniverseStationsStationIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseStationsStationIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get station information
     * Public information on stations  ---  Alternate route: &#x60;/v1/universe/stations/{station_id}/&#x60;  Alternate route: &#x60;/legacy/universe/stations/{station_id}/&#x60;  Alternate route: &#x60;/dev/universe/stations/{station_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} stationId An Eve station ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseStationsStationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseStationsStationIdOk}
     */
    this.getUniverseStationsStationId = function(stationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stationId' is set
      if (stationId == undefined || stationId == null) {
        throw "Missing the required parameter 'stationId' when calling getUniverseStationsStationId";
      }


      var pathParams = {
        'station_id': stationId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetUniverseStationsStationIdOk;

      return this.apiClient.callApi(
        '/universe/stations/{station_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseStructures operation.
     * @callback module:api/UniverseApi~getUniverseStructuresCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Integer'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all public structures
     * List all public structures  ---  Alternate route: &#x60;/v1/universe/structures/&#x60;  Alternate route: &#x60;/legacy/universe/structures/&#x60;  Alternate route: &#x60;/dev/universe/structures/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseStructuresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Integer'>}
     */
    this.getUniverseStructures = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Integer'];

      return this.apiClient.callApi(
        '/universe/structures/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseStructuresStructureId operation.
     * @callback module:api/UniverseApi~getUniverseStructuresStructureIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseStructuresStructureIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get structure information
     * Returns information on requested structure, if you are on the ACL. Otherwise, returns \&quot;Forbidden\&quot; for all inputs.  ---  Alternate route: &#x60;/v1/universe/structures/{structure_id}/&#x60;  Alternate route: &#x60;/legacy/universe/structures/{structure_id}/&#x60;  Alternate route: &#x60;/dev/universe/structures/{structure_id}/&#x60; 
     * @param {Integer} structureId An Eve structure ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseStructuresStructureIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseStructuresStructureIdOk}
     */
    this.getUniverseStructuresStructureId = function(structureId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'structureId' is set
      if (structureId == undefined || structureId == null) {
        throw "Missing the required parameter 'structureId' when calling getUniverseStructuresStructureId";
      }


      var pathParams = {
        'structure_id': structureId
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
      var returnType = GetUniverseStructuresStructureIdOk;

      return this.apiClient.callApi(
        '/universe/structures/{structure_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseSystemsSystemId operation.
     * @callback module:api/UniverseApi~getUniverseSystemsSystemIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseSystemsSystemIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get solar system information
     * Information on solar systems  ---  Alternate route: &#x60;/v1/universe/systems/{system_id}/&#x60;  Alternate route: &#x60;/legacy/universe/systems/{system_id}/&#x60;  Alternate route: &#x60;/dev/universe/systems/{system_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} systemId An Eve solar system ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseSystemsSystemIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseSystemsSystemIdOk}
     */
    this.getUniverseSystemsSystemId = function(systemId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'systemId' is set
      if (systemId == undefined || systemId == null) {
        throw "Missing the required parameter 'systemId' when calling getUniverseSystemsSystemId";
      }


      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetUniverseSystemsSystemIdOk;

      return this.apiClient.callApi(
        '/universe/systems/{system_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseTypes operation.
     * @callback module:api/UniverseApi~getUniverseTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Integer'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get types
     * Get a list of type ids  ---  Alternate route: &#x60;/v1/universe/types/&#x60;  Alternate route: &#x60;/legacy/universe/types/&#x60;  Alternate route: &#x60;/dev/universe/types/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Which page to query
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Integer'>}
     */
    this.getUniverseTypes = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Integer'];

      return this.apiClient.callApi(
        '/universe/types/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseTypesTypeId operation.
     * @callback module:api/UniverseApi~getUniverseTypesTypeIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseTypesTypeIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get type information
     * Get information on a type  ---  Alternate route: &#x60;/v2/universe/types/{type_id}/&#x60;  Alternate route: &#x60;/dev/universe/types/{type_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} typeId An Eve item type ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language to use in the response (default to en-us)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~getUniverseTypesTypeIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseTypesTypeIdOk}
     */
    this.getUniverseTypesTypeId = function(typeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'typeId' is set
      if (typeId == undefined || typeId == null) {
        throw "Missing the required parameter 'typeId' when calling getUniverseTypesTypeId";
      }


      var pathParams = {
        'type_id': typeId
      };
      var queryParams = {
        'language': opts['language'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetUniverseTypesTypeIdOk;

      return this.apiClient.callApi(
        '/universe/types/{type_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUniverseNames operation.
     * @callback module:api/UniverseApi~postUniverseNamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PostUniverseNames200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get names and categories for a set of ID&#39;s
     * Resolve a set of IDs to names and categories. Supported ID&#39;s for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types.  ---  Alternate route: &#x60;/v2/universe/names/&#x60;  Alternate route: &#x60;/dev/universe/names/&#x60; 
     * @param {Array.<module:model/Integer>} ids The ids to resolve
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/UniverseApi~postUniverseNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PostUniverseNames200Ok>}
     */
    this.postUniverseNames = function(ids, opts, callback) {
      opts = opts || {};
      var postBody = ids;

      // verify the required parameter 'ids' is set
      if (ids == undefined || ids == null) {
        throw "Missing the required parameter 'ids' when calling postUniverseNames";
      }


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PostUniverseNames200Ok];

      return this.apiClient.callApi(
        '/universe/names/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
