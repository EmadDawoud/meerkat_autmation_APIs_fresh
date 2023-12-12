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
    describe('AllOfDeviceSNMPCollector', function() {
      beforeEach(function() {
        instance = new MeerkatAutomationApis.AllOfDeviceSNMPCollector();
      });

      it('should create an instance of AllOfDeviceSNMPCollector', function() {
        // TODO: update the code to test AllOfDeviceSNMPCollector
        expect(instance).to.be.a(MeerkatAutomationApis.AllOfDeviceSNMPCollector);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property devicenum (base name: "devicenum")', function() {
        // TODO: update the code to test the property devicenum
        expect(instance).to.have.property('devicenum');
        // expect(instance.devicenum).to.be(expectedValueLiteral);
      });

      it('should have the property kpistats (base name: "kpistats")', function() {
        // TODO: update the code to test the property kpistats
        expect(instance).to.have.property('kpistats');
        // expect(instance.kpistats).to.be(expectedValueLiteral);
      });

      it('should have the property communitystr (base name: "communitystr")', function() {
        // TODO: update the code to test the property communitystr
        expect(instance).to.have.property('communitystr');
        // expect(instance.communitystr).to.be(expectedValueLiteral);
      });

      it('should have the property collectorvm (base name: "collectorvm")', function() {
        // TODO: update the code to test the property collectorvm
        expect(instance).to.have.property('collectorvm');
        // expect(instance.collectorvm).to.be(expectedValueLiteral);
      });

      it('should have the property collectorVM (base name: "collectorVM")', function() {
        // TODO: update the code to test the property collectorVM
        expect(instance).to.have.property('collectorVM');
        // expect(instance.collectorVM).to.be(expectedValueLiteral);
      });

      it('should have the property kPIStats (base name: "kPIStats")', function() {
        // TODO: update the code to test the property kPIStats
        expect(instance).to.have.property('kPIStats');
        // expect(instance.kPIStats).to.be(expectedValueLiteral);
      });

      it('should have the property communityStr (base name: "communityStr")', function() {
        // TODO: update the code to test the property communityStr
        expect(instance).to.have.property('communityStr');
        // expect(instance.communityStr).to.be(expectedValueLiteral);
      });

    });
  });

}));
