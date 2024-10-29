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
import {KPIStats} from './KPIStats.js';

/**
 * The AllOfSNMPCollectorKPIStats model module.
 * @module model/AllOfSNMPCollectorKPIStats
 * @version 1.1.0
 */
export class AllOfSNMPCollectorKPIStats {
  /**
   * Constructs a new <code>AllOfSNMPCollectorKPIStats</code>.
   * @alias module:model/AllOfSNMPCollectorKPIStats
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AllOfSNMPCollectorKPIStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfSNMPCollectorKPIStats} obj Optional instance to populate.
   * @return {module:model/AllOfSNMPCollectorKPIStats} The populated <code>AllOfSNMPCollectorKPIStats</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfSNMPCollectorKPIStats();
      if (data.hasOwnProperty('monobjnum'))
        obj.monobjnum = ApiClient.convertToType(data['monobjnum'], 'Number');
      if (data.hasOwnProperty('metricnum'))
        obj.metricnum = ApiClient.convertToType(data['metricnum'], 'Number');
      if (data.hasOwnProperty('kpinum'))
        obj.kpinum = ApiClient.convertToType(data['kpinum'], 'Number');
    }
    return obj;
  }
}

/**
 * missing description
 * @member {Number} monobjnum
 */
AllOfSNMPCollectorKPIStats.prototype.monobjnum = undefined;

/**
 * missing description
 * @member {Number} metricnum
 */
AllOfSNMPCollectorKPIStats.prototype.metricnum = undefined;

/**
 * missing description
 * @member {Number} kpinum
 */
AllOfSNMPCollectorKPIStats.prototype.kpinum = undefined;
