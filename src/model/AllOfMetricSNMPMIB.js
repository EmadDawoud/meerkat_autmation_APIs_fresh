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
import { SNMPMIB } from "./SNMPMIB.js";

/**
 * The AllOfMetricSNMPMIB model module.
 * @module model/AllOfMetricSNMPMIB
 * @version 2.0.0
 */
export class AllOfMetricSNMPMIB {
  /**
   * Constructs a new <code>AllOfMetricSNMPMIB</code>.
   * @alias module:model/AllOfMetricSNMPMIB
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AllOfMetricSNMPMIB</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfMetricSNMPMIB} obj Optional instance to populate.
   * @return {module:model/AllOfMetricSNMPMIB} The populated <code>AllOfMetricSNMPMIB</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfMetricSNMPMIB();
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");
      if (data.hasOwnProperty("name"))
        obj.name = ApiClient.convertToType(data["name"], "String");
      if (data.hasOwnProperty("file"))
        obj.file = ApiClient.convertToType(data["file"], "String");
    }
    return obj;
  }
}

/**
 * missing description
 * @member {Number} id
 */
AllOfMetricSNMPMIB.prototype.id = undefined;

/**
 * missing description
 * @member {String} name
 */
AllOfMetricSNMPMIB.prototype.name = undefined;

/**
 * missing description
 * @member {String} file
 */
AllOfMetricSNMPMIB.prototype.file = undefined;
