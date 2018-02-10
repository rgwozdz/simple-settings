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

    it('Expect instance to contain a "get" method', function () {
      var settings = new Settings(fixture);
      expect('get' in settings).to.equal(true);
      expect(typeof settings.get).to.equal('function');
    });

    it(`Expect "get" to return primitives when fetched`, function () {
      const settings = new Settings(fixture);
      expect(settings.get('b')).to.equal(2);
      expect(settings.get('c')).to.equal("string");
      expect(settings.get('d')).to.equal(null);
      expect(settings.get('e')).to.equal(true);
    });

    it(`Expect "get" to return another Settings instance when fetching a nested object `, function () {
      const settings = new Settings(fixture);
      expect(settings.get('a') instanceof Settings).to.equal(true);
    });

    it(`Expect "get" to be chainable for nested objects`, function () {
      const settings = new Settings(fixture);
      expect(settings.get('a').get('aa')).to.equal(1);
      expect(settings.get('a').get('ad').get('ada')).to.equal('test');
    });

    it(`Expect "get" to return array if fetched`, function () {
      const settings = new Settings(fixture);
      expect(settings.get('a').get('ac') instanceof Array).to.equal(true);
    });

    it(`Using "get" for RegExp should return the RegExp`, function () {
      const settings = new Settings(fixture);
      expect(settings.get('a').get('ab') instanceof RegExp).to.equal(true);
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
