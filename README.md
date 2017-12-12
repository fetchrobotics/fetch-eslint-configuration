# fetch-eslint-configuration
The one and only fetch ESLint Configuration specification used for all projects.

# Usage

1. Add `"eslint-config-fetchrobotics": "git@github.com:fetchrobotics/fetch-eslint-configuration.git#<tag>"` to `package.json`

   Note: We recommend to use exact version (e.g. 1.0.0)

2. Create ESLint config file (e.g. `.eslintrc`)

3. Add `extends` option with value `fetchrobotics` (eslint-config-**fetchrobotics**)

```json
{
    "extends": "fetchrobotics"
}
```

4. Change rules severity or override options for rules from base configurations if needed ([details](https://eslint.org/docs/user-guide/configuring#extending-configuration-files))

# Development
You could use `npm link` to be able to use local repository in development (without a necessity to publish new version to see changes all the time) - [details](https://docs.npmjs.com/cli/link);

Run `npm link` in this package directory then run `npm link eslint-config-fetch` in the root directory of the app which should use this config.

To unlink module from local repository run `npm unlink eslint-config-fetch` in the app directory.
