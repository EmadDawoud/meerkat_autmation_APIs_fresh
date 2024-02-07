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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MeerkatAutomationApis);
  }
}(this, function(expect, MeerkatAutomationApis) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CollectorVM', function() {
      beforeEach(function() {
        instance = new MeerkatAutomationApis.CollectorVM();
      });

      it('should create an instance of CollectorVM', function() {
        // TODO: update the code to test CollectorVM
        expect(instance).to.be.a(MeerkatAutomationApis.CollectorVM);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property ip (base name: "ip")', function() {
        // TODO: update the code to test the property ip
        expect(instance).to.have.property('ip');
        // expect(instance.ip).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property province (base name: "province")', function() {
        // TODO: update the code to test the property province
        expect(instance).to.have.property('province');
        // expect(instance.province).to.be(expectedValueLiteral);
      });

    });
  });

}));
