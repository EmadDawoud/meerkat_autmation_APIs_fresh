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

/**
 * The CommunityStr model module.
 * @module model/CommunityStr
 * @version 1.1.0
 */
export class CommunityStr {
  /**
   * Constructs a new <code>CommunityStr</code>.
   * @alias module:model/CommunityStr
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CommunityStr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommunityStr} obj Optional instance to populate.
   * @return {module:model/CommunityStr} The populated <code>CommunityStr</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CommunityStr();
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
CommunityStr.prototype.id = undefined;

/**
 * missing description
 * @member {String} name
 */
CommunityStr.prototype.name = undefined;

