# Contributing

So you've considered contributing to this amazing project because you want to help support it and see it grow, then you have come to the right place.

Before we begin on how you can contribute to this project, please have a quick read of our [Code of Conduct](https://github.com/TazDeCoder/glow-mui3/blob/main/CONTRIBUTING.md) and make sure you are aware of it since we do not tollerate unacceptable behaviour.

## Project setup

To setup this project in your local machine:

1. Fork this repo
2. Clone the forked repo in your local machine
3. Install the required dependencies for this project
   ```sh
   $ yarn
   ```
4. Run the start command to build the library on watch mode
   ```sh
   $ yarn start
   ```
5. In another terminal, run the storybook command to start a storybook server on http://localhost:6006
   ```sh
   $ yarn storybook
   ```
6. Before contributing any changes to our repo, make sure to run this command:
   ```sh
   $ yarn prepare
   ```

## Code contribution

To have your code appear in our awesome codebase, these are the following steps to take:

1. First, you need to look for a similiar issue that may include the changes you want to make - if not create your own issue for one
2. If the proposed changes sound great, then a maintainer of this repo (such as myself) will assign it to someone - don't be afraid to share whatever suggestions you have, it may just be what we're looking for!
3. Create (or update) a fork for this repo, `git checkout` into your assigned branch (i.e. issue branch), make your changes there - and where appropriate - test it thoroughly with written tests to ensure your changes work as intended with no problems whatsoever
4. Finally, open a pull request explaining the changes you've made, referencing the issue you wish to resolve, and one of our maintainers will review your code
5. If everything looks good, then your code will be added to our codebase!

**It's important to note that all pull requests must be "merge-worthy" (deployable) since our project follows the [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) branching strategy.**

## Reporting bugs

Bugs can be a nightmare when left unattended. That is why we appreciate that you inform of us any bugs that you find whilist using any of our components.

To report a code bug:

1. Open an issue describing the bug that you found in the library, how to reproduce that specific bug, system specs of your computer, and if you would like (and greatly appreciated) include a proposed solution for the bug
2. A maintainer of this repo will have a look over this issue to help resolve it with you, and if your bug is valid - meaning related to our code - we will assign it to either you, if you insist, or one of our maintainers to handle this bug

## Styleguides

### Commit Messages

Each commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]
```

Only the **type** and **description** are mandatory.

A **scope** may be added to a commit’s type, to provide additional contextual information, which is contained within the parenthesis.

The **body** may include details and motivation for the change, if need be.

#### Type

Must be one of the following:

- **build**: changes that affect the build system or external dependencies
- **ci**: changes to our CI configuration files and scripts
- **docs**: documentation only changes
- **feat**: a new feature
- **fix**: a bug fix
- **perf**: a code change that improves performance
- **refactor**: a code change that neither fixes a bug nor adds a feature
- **style**: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: adding missing tests or correcting existing tests
- **chore**: other changes that don't modify src or test files

**If the prefix is `feat`, `fix`, `perf`, `build`, or `test`, the commit message will appear in the changelog.**

### TypeScript

Our library is coded in TypeScript which means we don't accept JavaScript files - at least inside of our **src** directoy.

There are many ways to skin a cat, therefore we have rules to enforce the style of the code we want, and so it's important that we have you adhere to our [eslint rules](https://github.com/TazDeCoder/glow-mui3/blob/main/.eslintrc.js) and [editor rules](https://github.com/TazDeCoder/glow-mui3/blob/main/.editorconfig) to ensure your code is in harmony with our codebase, and therefore not look out of place.

The recommended way to enforce this via this command:

```sh
$ yarn format:write && yarn lint:fix
```

**Prettier is recommended here to improve the formatting of your code**
