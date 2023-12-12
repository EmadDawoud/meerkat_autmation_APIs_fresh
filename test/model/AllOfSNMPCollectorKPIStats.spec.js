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
    describe('AllOfSNMPCollectorKPIStats', function() {
      beforeEach(function() {
        instance = new MeerkatAutomationApis.AllOfSNMPCollectorKPIStats();
      });

      it('should create an instance of AllOfSNMPCollectorKPIStats', function() {
        // TODO: update the code to test AllOfSNMPCollectorKPIStats
        expect(instance).to.be.a(MeerkatAutomationApis.AllOfSNMPCollectorKPIStats);
      });

      it('should have the property monobjnum (base name: "monobjnum")', function() {
        // TODO: update the code to test the property monobjnum
        expect(instance).to.have.property('monobjnum');
        // expect(instance.monobjnum).to.be(expectedValueLiteral);
      });

      it('should have the property metricnum (base name: "metricnum")', function() {
        // TODO: update the code to test the property metricnum
        expect(instance).to.have.property('metricnum');
        // expect(instance.metricnum).to.be(expectedValueLiteral);
      });

      it('should have the property kpinum (base name: "kpinum")', function() {
        // TODO: update the code to test the property kpinum
        expect(instance).to.have.property('kpinum');
        // expect(instance.kpinum).to.be(expectedValueLiteral);
      });

    });
  });

}));
