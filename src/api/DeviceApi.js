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
import {Device} from '../model/Device.js';

/**
* Device service.
* @module api/DeviceApi
* @version 1.1.0
*/
export class DeviceApi {

    /**
    * Constructs a new DeviceApi. 
    * @alias module:api/DeviceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addDevice operation.
     * @callback moduleapi/DeviceApi~addDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds SNMP Devices
     * Adds Devices to the system
     * @param {Object} opts Optional parameters
     * @param {module:model/Device} opts.body Inventory item to add
     * @param {module:api/DeviceApi~addDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addDevice(opts, callback) {
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
        '/Device', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchDevice operation.
     * @callback moduleapi/DeviceApi~searchDeviceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Device>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * searches SNMP Devices
     * By passing in the appropriate options, you can search for available Devices 
     * @param {module:api/DeviceApi~searchDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchDevice(callback) {
      
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
      let returnType = [Device];

      return this.apiClient.callApi(
        '/Device', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}