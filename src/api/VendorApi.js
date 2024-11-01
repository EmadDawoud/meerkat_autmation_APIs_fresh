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
import {Vendor} from '../model/Vendor.js';

/**
* Vendor service.
* @module api/VendorApi
* @version 1.1.0
*/
export class VendorApi {

    /**
    * Constructs a new VendorApi. 
    * @alias module:api/VendorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addVendor operation.
     * @callback moduleapi/VendorApi~addVendorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds Monitored Objects
     * Adds Monitored Objects to the system
     * @param {Object} opts Optional parameters
     * @param {module:model/Vendor} opts.body Inventory item to add
     * @param {module:api/VendorApi~addVendorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addVendor(opts, callback) {
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
        '/Vendor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchVendor operation.
     * @callback moduleapi/VendorApi~searchVendorCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Vendor>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * searches Vendors
     * By passing in the appropriate options, you can search for available Vendors 
     * @param {module:api/VendorApi~searchVendorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchVendor(callback) {
      
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
      let returnType = [Vendor];

      return this.apiClient.callApi(
        '/Vendor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}