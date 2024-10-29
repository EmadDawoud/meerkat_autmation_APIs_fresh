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
import {ApiClient} from '../ApiClient.js';
import {Province} from './Province.js';

/**
 * The AllOfDeviceProvince model module.
 * @module model/AllOfDeviceProvince
 * @version 1.1.0
 */
export class AllOfDeviceProvince {
  /**
   * Constructs a new <code>AllOfDeviceProvince</code>.
   * @alias module:model/AllOfDeviceProvince
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AllOfDeviceProvince</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDeviceProvince} obj Optional instance to populate.
   * @return {module:model/AllOfDeviceProvince} The populated <code>AllOfDeviceProvince</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDeviceProvince();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * missing description
 * @member {Number} id
 */
AllOfDeviceProvince.prototype.id = undefined;

/**
 * missing description
 * @member {String} name
 */
AllOfDeviceProvince.prototype.name = undefined;
