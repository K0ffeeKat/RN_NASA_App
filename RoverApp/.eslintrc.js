module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                "*.ts", "*.tsx"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project" : ["./tsconfig.json"]
    },
    'parser': '@typescript-eslint/parser',
    "plugins": [
        "react", "@typescript-eslint"
    ],
    "rules": {
    }
}
