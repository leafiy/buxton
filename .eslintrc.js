module.exports = {
    root: true,
    env: {
        "es6": true,
            "node": true,
            "browser": true
    },
    rules: {
        "no-useless-escape": "off",
        "no-empty": "off"
    },
    parserOptions: {
        parser: "babel-eslint",
        "sourceType": "module",
        "ecmaVersion": 2017
    },
};