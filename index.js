'use strict';

var tk = require('rocambole-token');
var rocambole = require('rocambole');

exports.transformBefore = transformBefore;
function transformBefore(ast) {
  rocambole.moonwalk(ast, transform);
}

function transform(node) {
  if (node.type === 'ObjectExpression' || node.type === 'ArrayExpression') {
    findTrailingCommas(node.endToken.prev);
  }
}

function findTrailingCommas(token) {
  if (token.type === 'LineBreak') {
    findTrailingCommas(token.prev);
    return;
  }

  if (token.type === 'Punctuator' && token.value === ',') {
    tk.remove(token);
  }
}
