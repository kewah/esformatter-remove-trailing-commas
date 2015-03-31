/*global describe, it, beforeEach*/
'use strict';

var assert = require('assert');
var esformatter = require('esformatter');
var fs = require('fs');
var plugin = require('..');

describe('esformatter-remove-trailing-commas', function() {
  beforeEach(function() {
    esformatter.register(plugin);
    this.config = {preset: 'default'};
  });

  it('should remove trailing commas on object', function(done) {
    var output = esformatter.format(readfile('fixtures/object.js'));
    assert.equal(output, readfile('expected/object.js'));
    done();
  });

  it('should remove trailing commas on array', function(done) {
    var output = esformatter.format(readfile('fixtures/array.js'));
    assert.equal(output, readfile('expected/array.js'));
    done();
  });
});

function readfile(name) {
  return fs.readFileSync('test/' + name).toString();
}
