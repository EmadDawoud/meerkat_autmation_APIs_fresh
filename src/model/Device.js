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

/**
 * The Device model module.
 * @module model/Device
 * @version 2.0.0
 */
export class Device {
  /**
   * Constructs a new <code>Device</code>.
   * @alias module:model/Device
   * @class
   * @param sNMPCollector {Object}
   */
  constructor(sNMPCollector) {
    this.sNMPCollector = sNMPCollector;
  }

  /**
   * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Device} obj Optional instance to populate.
   * @return {module:model/Device} The populated <code>Device</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Device();
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");
      if (data.hasOwnProperty("name"))
        obj.name = ApiClient.convertToType(data["name"], "String");
      if (data.hasOwnProperty("wname"))
        obj.wname = ApiClient.convertToType(data["wname"], "String");
      if (data.hasOwnProperty("model"))
        obj.model = ApiClient.convertToType(data["model"], "String");
      if (data.hasOwnProperty("vendor"))
        obj.vendor = ApiClient.convertToType(data["vendor"], "String");
      if (data.hasOwnProperty("ip"))
        obj.ip = ApiClient.convertToType(data["ip"], "String");
      if (data.hasOwnProperty("communitystr"))
        obj.communitystr = ApiClient.convertToType(
          data["communitystr"],
          "String"
        );
      if (data.hasOwnProperty("devicetype"))
        obj.devicetype = ApiClient.convertToType(data["devicetype"], "String");
      if (data.hasOwnProperty("province"))
        obj.province = ApiClient.convertToType(data["province"], "String");
      if (data.hasOwnProperty("snmpcollector"))
        obj.snmpcollector = ApiClient.convertToType(
          data["snmpcollector"],
          "String"
        );
      if (data.hasOwnProperty("kpinum"))
        obj.kpinum = ApiClient.convertToType(data["kpinum"], "Number");
      if (data.hasOwnProperty("monobj"))
        obj.monobj = ApiClient.convertToType(data["monobj"], "String");
      if (data.hasOwnProperty("sNMPCollector"))
        obj.sNMPCollector = ApiClient.convertToType(
          data["sNMPCollector"],
          Object
        );
    }
    return obj;
  }
}

/**
 * missing description
 * @member {Number} id
 */
Device.prototype.id = undefined;

/**
 * missing description
 * @member {String} name
 */
Device.prototype.name = undefined;

/**
 * missing description
 * @member {String} wname
 */
Device.prototype.wname = undefined;

/**
 * missing description
 * @member {String} model
 */
Device.prototype.model = undefined;

/**
 * missing description
 * @member {String} vendor
 */
Device.prototype.vendor = undefined;

/**
 * missing description
 * @member {String} ip
 */
Device.prototype.ip = undefined;

/**
 * missing description
 * @member {String} communitystr
 */
Device.prototype.communitystr = undefined;

/**
 * missing description
 * @member {String} devicetype
 */
Device.prototype.devicetype = undefined;

/**
 * missing description
 * @member {String} province
 */
Device.prototype.province = undefined;

/**
 * missing description
 * @member {String} snmpcollector
 */
Device.prototype.snmpcollector = undefined;

/**
 * missing description
 * @member {Number} kpinum
 */
Device.prototype.kpinum = undefined;

/**
 * missing description
 * @member {String} monobj
 */
Device.prototype.monobj = undefined;

/**
 * @member {Object} sNMPCollector
 */
Device.prototype.sNMPCollector = undefined;
