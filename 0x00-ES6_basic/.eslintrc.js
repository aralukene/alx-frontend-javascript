module.exports = {
    "env": {
        "browser": false,
	"es6": true,
	"jest": true,
        "es2021": true
    },
    "extends": [
	"airbnb-base",
	"plugin:jest/all",
	"eslint:recommended",
    ],
    "globals": {
	"Atomics": 'readonly',
	"SharedArrayBuffer": 'readonly',
	},
    "plugins": ['jest'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
		"*.js",
                ".eslintrc.{js,cjs}"
            ],
	    "excludedFiles": 'babel.config.js',
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
	'no-console': 'off',
	'no-shadow': 'off',
	'no-restricted-syntax': [
	    'error',
	    'LabeledStatement',
	    'WithStatement',
	],
    }
}
