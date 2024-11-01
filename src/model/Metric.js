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
 * The Metric model module.
 * @module model/Metric
 * @version 1.1.0
 */
export class Metric {
  /**
   * Constructs a new <code>Metric</code>.
   * @alias module:model/Metric
   * @class
   * @param sNMPMIB {Object} 
   */
  constructor(sNMPMIB) {
    this.sNMPMIB = sNMPMIB;
  }

  /**
   * Constructs a <code>Metric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Metric} obj Optional instance to populate.
   * @return {module:model/Metric} The populated <code>Metric</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Metric();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('snmpmib'))
        obj.snmpmib = ApiClient.convertToType(data['snmpmib'], 'String');
      if (data.hasOwnProperty('oid'))
        obj.oid = ApiClient.convertToType(data['oid'], 'String');
      if (data.hasOwnProperty('monobj'))
        obj.monobj = ApiClient.convertToType(data['monobj'], 'String');
      if (data.hasOwnProperty('sNMPMIB'))
        obj.sNMPMIB = ApiClient.convertToType(data['sNMPMIB'], Object);
    }
    return obj;
  }
}

/**
 * missing description
 * @member {Number} id
 */
Metric.prototype.id = undefined;

/**
 * missing description
 * @member {String} name
 */
Metric.prototype.name = undefined;

/**
 * missing description
 * @member {String} snmpmib
 */
Metric.prototype.snmpmib = undefined;

/**
 * missing description
 * @member {String} oid
 */
Metric.prototype.oid = undefined;

/**
 * missing description
 * @member {String} monobj
 */
Metric.prototype.monobj = undefined;

/**
 * @member {Object} sNMPMIB
 */
Metric.prototype.sNMPMIB = undefined;

