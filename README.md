# ec0lint-config-recommended

[NPM version](https://www.npmjs.com/package/ec0lint-style-config-recommended)

[Website](https://ec0lint.com)

> The recommended shareable config for ec0lint-style.

It turns on all the ec0lint-style rules.

Use it as is or as a foundation for your own config.

## Installation

```bash
npm i ec0lint-style-config-recommended
```

## Usage

Set your `ec0lint-style` config to:

```json
{
  "extends": "ec0lint-style-config-recommended"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-allowed-list` rule:

```json
{
  "extends": "ec0lint-style-config-recommended",
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

# ec0lint mission

ec0lint is a static code analysis tool that provides users with hints on how to reduce the carbon footprint of their websites during the development process. Applying code changes suggested by ec0lint results in lower carbon emissions per visit, quicker loading and higher space efficiency. The tool is open-source and community-driven.

Learn more [at our page](https://ec0lint.com)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
