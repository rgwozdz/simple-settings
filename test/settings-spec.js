"use strict";
const chai = require("chai");
const expect = chai.expect;
const Settings = require("../index");
const fixture  = require("./fixtures/fixture");

describe('Settings suite', function () {

  describe('Instantiate Settings class', function(){

    it("Settings should instantiate without error", function () {
      var settings = new Settings(fixture);
      expect(typeof settings).to.equal('object');
    });

  });

  describe('Settings "get" method', function(){

    it("Settings instance should contain a 'get' method", function () {
      var settings = new Settings(fixture);
      expect('get' in settings).to.equal(true);
      expect(typeof settings.get).to.equal('function');
    });

  });


  describe('Setting "toJS()" method', function(){

    it("Settings instance should contain a 'toJS' method", function () {
      var settings = new Settings(fixture);
      expect('toJS' in settings).to.equal(true);
      expect(typeof settings.toJS).to.equal('function');
    });

  });
});
