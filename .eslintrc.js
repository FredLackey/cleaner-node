module.exports = {
  extends: 'airbnb-base',
  env    : {
    browser: false,
    es6    : true,
    node   : true,
    jest   : true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins : ['jsdoc'],
  settings: {
    'import/core-modules': ['aws-sdk']
  },
  rules: {
    'arrow-body-style'           : 'off',
    'arrow-parens'               : 'off',
    'brace-style'                : 'off',
    camelcase                    : 'off',
    'comma-dangle'               : 'off',
    'consistent-return'          : 'off',
    'function-paren-newline'     : 'off',
    'global-require'             : 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require'  : 'off',
    'import/order'               : 'off',
    indent                       : 'off',
    'key-spacing'                : 'off',
    'linebreak-style'            : 'off',
    'max-len'                    : 'off',
    'no-await-in-loop'           : 'off',
    'no-console'                 : 'off',
    'no-continue'                : 'off',
    'no-lonely-if'               : 'off',
    'no-loop-func'               : 'off',
    'no-multi-spaces'            : 'off',
    'no-multiple-empty-lines'    : 'off',
    'no-nested-ternary'          : 'off',
    'no-param-reassign'          : 'off',
    'no-restricted-globals'      : 'off',
    'no-shadow'                  : 'off',
    'no-trailing-spaces'         : 'off',
    'no-underscore-dangle'       : 'off',
    'no-unused-vars'             : 'off',
    'object-curly-newline'       : 'off',
    'object-property-newline'    : 'off',
    'operator-linebreak'         : 'off',
    'padded-blocks'              : 'off',
    'space-before-function-paren': 'off',

    "jsdoc/require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration"    : true,
          "MethodDefinition"       : true,
          "ClassDeclaration"       : true,
          "ArrowFunctionExpression": false,
          "FunctionExpression"     : false
        }
      }
    ]
  }
};
