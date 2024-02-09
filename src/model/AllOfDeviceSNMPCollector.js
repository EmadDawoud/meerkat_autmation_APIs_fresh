/*
 * Meerkat Automation APIs
 * This API for quering and adding Meerkat SNMP Devices
 *
 * OpenAPI spec version: 2.0.0
 * Contact: emad.dawoud@telus.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.52
 *
 * Do not edit the class manually.
 *
 */
import { ApiClient } from "../ApiClient.js";
import { SNMPCollector } from "./SNMPCollector.js";

/**
 * The AllOfDeviceSNMPCollector model module.
 * @module model/AllOfDeviceSNMPCollector
 * @version 2.0.0
 */
export class AllOfDeviceSNMPCollector {
  /**
   * Constructs a new <code>AllOfDeviceSNMPCollector</code>.
   * @alias module:model/AllOfDeviceSNMPCollector
   * @class
   */
  constructor() {}

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
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");
      if (data.hasOwnProperty("name"))
        obj.name = ApiClient.convertToType(data["name"], "String");
      if (data.hasOwnProperty("devicenum"))
        obj.devicenum = ApiClient.convertToType(data["devicenum"], "Number");
      if (data.hasOwnProperty("kpinum"))
        obj.kpinum = ApiClient.convertToType(data["kpinum"], "Number");
      if (data.hasOwnProperty("communitystr"))
        obj.communitystr = ApiClient.convertToType(
          data["communitystr"],
          "String"
        );
      if (data.hasOwnProperty("collectorvm"))
        obj.collectorvm = ApiClient.convertToType(
          data["collectorvm"],
          "String"
        );
      if (data.hasOwnProperty("collectorVM"))
        obj.collectorVM = ApiClient.convertToType(data["collectorVM"], Object);
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
 * @member {Number} kpinum
 */
AllOfDeviceSNMPCollector.prototype.kpinum = undefined;

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
