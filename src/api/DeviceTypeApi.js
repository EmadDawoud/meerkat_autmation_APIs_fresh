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
import {DeviceType} from '../model/DeviceType.js';

/**
* DeviceType service.
* @module api/DeviceTypeApi
* @version 1.1.0
*/
export class DeviceTypeApi {

    /**
    * Constructs a new DeviceTypeApi. 
    * @alias module:api/DeviceTypeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addDeviceType operation.
     * @callback moduleapi/DeviceTypeApi~addDeviceTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds Device Types
     * Adds Device Types to the system
     * @param {Object} opts Optional parameters
     * @param {module:model/DeviceType} opts.body Inventory item to add
     * @param {module:api/DeviceTypeApi~addDeviceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addDeviceType(opts, callback) {
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
        '/DeviceType', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchDeviceType operation.
     * @callback moduleapi/DeviceTypeApi~searchDeviceTypeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeviceType>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * searches Device Types
     * By passing in the appropriate options, you can search for available Device types 
     * @param {module:api/DeviceTypeApi~searchDeviceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchDeviceType(callback) {
      
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
      let returnType = [DeviceType];

      return this.apiClient.callApi(
        '/DeviceType', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}