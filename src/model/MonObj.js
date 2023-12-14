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
import {Metric} from './Metric.js';

/**
 * The MonObj model module.
 * @module model/MonObj
 * @version 1.1.0
 */
export class MonObj {
  /**
   * Constructs a new <code>MonObj</code>.
   * @alias module:model/MonObj
   * @class
   * @param sNMPMIB {Object} 
   * @param metric {Array.<module:model/Metric>} 
   */
  constructor(sNMPMIB, metric) {
    this.sNMPMIB = sNMPMIB;
    this.metric = metric;
  }

  /**
   * Constructs a <code>MonObj</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonObj} obj Optional instance to populate.
   * @return {module:model/MonObj} The populated <code>MonObj</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MonObj();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('oid'))
        obj.oid = ApiClient.convertToType(data['oid'], 'String');
      if (data.hasOwnProperty('snmpmib'))
        obj.snmpmib = ApiClient.convertToType(data['snmpmib'], 'String');
      if (data.hasOwnProperty('sNMPMIB'))
        obj.sNMPMIB = ApiClient.convertToType(data['sNMPMIB'], Object);
      if (data.hasOwnProperty('metric'))
        obj.metric = ApiClient.convertToType(data['metric'], [Metric]);
    }
    return obj;
  }
}

/**
 * missing description
 * @member {Number} id
 */
MonObj.prototype.id = undefined;

/**
 * missing description
 * @member {String} name
 */
MonObj.prototype.name = undefined;

/**
 * missing description
 * @member {String} oid
 */
MonObj.prototype.oid = undefined;

/**
 * missing description
 * @member {String} snmpmib
 */
MonObj.prototype.snmpmib = undefined;

/**
 * @member {Object} sNMPMIB
 */
MonObj.prototype.sNMPMIB = undefined;

/**
 * @member {Array.<module:model/Metric>} metric
 */
MonObj.prototype.metric = undefined;

