module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/jsx-uses-react": 0,   
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "parser": "babel-eslint",
    "env": {
        "es6": true
    },
    "extends": [
        "plugin:react/recommended"
    ]
};