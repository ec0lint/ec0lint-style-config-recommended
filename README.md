# stylelint-config-recommended

[![NPM version]](https://www.npmjs.com/package/ec0lint-css-config-recommended)

> The recommended shareable config for ec0lint-css.

It turns on all the ec0lint-css rules.

Use it as is or as a foundation for your own config.

## Installation

```bash
npm i ec0lint-css-config-recommended
```

## Usage

Set your `ec0lint-css` config to:

```json
{
  "extends": "ec0lint-css-config-recommended"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-allowed-list` rule:

```json
{
  "extends": "ec0lint-css-config-recommended",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends"]
      }
    ],
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "s"]
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
