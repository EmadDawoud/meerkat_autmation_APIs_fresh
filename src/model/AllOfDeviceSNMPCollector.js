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
import {ApiClient} from '../ApiClient';
import {SNMPCollector} from './SNMPCollector';

/**
 * The AllOfDeviceSNMPCollector model module.
 * @module model/AllOfDeviceSNMPCollector
 * @version 1.1.0
 */
export class AllOfDeviceSNMPCollector {
  /**
   * Constructs a new <code>AllOfDeviceSNMPCollector</code>.
   * @alias module:model/AllOfDeviceSNMPCollector
   * @class
   * @param kPIStats {} 
   * @param communityStr {} 
   */
  constructor(kPIStats, communityStr) {
    this.kPIStats = kPIStats;
    this.communityStr = communityStr;
  }

  /**
   * Constructs a <code>AllOfDeviceSNMPCollector</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDeviceSNMPCollector} obj Optional instance to populate.
   * @return {module:model/AllOfDeviceSNMPCollector} The populated <code>AllOfDeviceSNMPCollector</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDeviceSNMPCollector();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('devicenum'))
        obj.devicenum = ApiClient.convertToType(data['devicenum'], 'Number');
      if (data.hasOwnProperty('kpistats'))
        obj.kpistats = ApiClient.convertToType(data['kpistats'], 'String');
      if (data.hasOwnProperty('communitystr'))
        obj.communitystr = ApiClient.convertToType(data['communitystr'], 'String');
      if (data.hasOwnProperty('collectorvm'))
        obj.collectorvm = ApiClient.convertToType(data['collectorvm'], 'String');
      if (data.hasOwnProperty('collectorVM'))
        obj.collectorVM = ApiClient.convertToType(data['collectorVM'], Object);
      if (data.hasOwnProperty('kPIStats'))
        obj.kPIStats = ApiClient.convertToType(data['kPIStats'], Object);
      if (data.hasOwnProperty('communityStr'))
        obj.communityStr = ApiClient.convertToType(data['communityStr'], Object);
    }
    return obj;
  }
}

/**
 * missing description
 * @member {Number} id
 */
AllOfDeviceSNMPCollector.prototype.id = undefined;

/**
 * missing description
 * @member {String} name
 */
AllOfDeviceSNMPCollector.prototype.name = undefined;

/**
 * missing description
 * @member {Number} devicenum
 */
AllOfDeviceSNMPCollector.prototype.devicenum = undefined;

/**
 * missing description
 * @member {String} kpistats
 */
AllOfDeviceSNMPCollector.prototype.kpistats = undefined;

/**
 * missing description
 * @member {String} communitystr
 */
AllOfDeviceSNMPCollector.prototype.communitystr = undefined;

/**
 * missing description
 * @member {String} collectorvm
 */
AllOfDeviceSNMPCollector.prototype.collectorvm = undefined;

/**
 * @member {Object} collectorVM
 */
AllOfDeviceSNMPCollector.prototype.collectorVM = undefined;

/**
 * @member {Object} kPIStats
 */
AllOfDeviceSNMPCollector.prototype.kPIStats = undefined;

/**
 * @member {Object} communityStr
 */
AllOfDeviceSNMPCollector.prototype.communityStr = undefined;

