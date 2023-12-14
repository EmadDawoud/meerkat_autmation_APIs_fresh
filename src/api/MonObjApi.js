/*
 * Meerkat Automation APIs
 * This API for quering and adding Meerkat SNMP Devices
 *
 * OpenAPI spec version: 1.1.0
 * Contact: emad.dawoud@telus.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.51
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient.js";
import {MonObj} from '../model/MonObj.js';

/**
* MonObj service.
* @module api/MonObjApi
* @version 1.1.0
*/
export class MonObjApi {

    /**
    * Constructs a new MonObjApi. 
    * @alias module:api/MonObjApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addMonObj operation.
     * @callback moduleapi/MonObjApi~addMonObjCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds Monitored Objects
     * Adds Monitored Objects to the system
     * @param {Object} opts Optional parameters
     * @param {module:model/MonObj} opts.body Inventory item to add
     * @param {module:api/MonObjApi~addMonObjCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addMonObj(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/MonObj', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchMonObj operation.
     * @callback moduleapi/MonObjApi~searchMonObjCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MonObj>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * searches Monitored Objects
     * By passing in the appropriate options, you can search for available Monitoered Objects 
     * @param {module:api/MonObjApi~searchMonObjCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchMonObj(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MonObj];

      return this.apiClient.callApi(
        '/MonObj', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}