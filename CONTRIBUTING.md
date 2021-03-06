# Contribution Guidelines

Thanks for being willing to contribute!

We appreciate [bug reports](https://github.com/openapi-library/OpenAPIValidators/issues/new?assignees=&labels=bug&template=bug_report.md&title=), [feature requests](https://github.com/openapi-library/OpenAPIValidators/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=), doc updates, fixing [open issues](https://github.com/openapi-library/OpenAPIValidators/issues), and other contributions. Please follow our [Code Of Conduct](https://github.com/openapi-library/OpenAPIValidators/blob/master/CODE_OF_CONDUCT.md) and the guide below.

- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Pull Requests](#pull-requests)

## Bug Reports

A bug is a **recreatable** problem that is caused by the code in the repository.

Before submitting bug reports:

1. **Check if the [issue has already been reported](https://github.com/openapi-library/OpenAPIValidators/issues)**
2. **Recreate the bug** &mdash; clone `master` and use our bug recreation template for [`chai-openapi-response-validator`](https://github.com/openapi-library/OpenAPIValidators/blob/master/packages/chai-openapi-response-validator/test/bugRecreationTemplate.test.ts) or [`jest-openapi`](https://github.com/openapi-library/OpenAPIValidators/blob/master/packages/jest-openapi/__test__/bugRecreationTemplate.test.ts).

## Feature Requests

Feature requests are welcome. Provide clear reasons for why, how, and when you'd use the new feature.

Consider whether your idea fits with the scope and aims of the project. It's up to _you_ to convince the project's developers of the merits of this feature.

## Pull Requests

- Good PRs are a fantastic help!
- PRs must pass `yarn test:ci`
- New code should be consistent with existing code.
- PRs should remain focused in scope and not contain unrelated commits or code changes.
- Please ask before embarking on any significant pull request, to ensure we will want to merge into the project.
- If this is your first pull request for this project, please add yourself as a contributor! Just comment on your pull request: `@all-contributors please add <your-username> for <contribution>` ([see example](https://allcontributors.org/docs/en/bot/usage#all-contributors-add)) and the All Contributors bot will raise a PR adding you to the [Contributors section of our main README](https://github.com/openapi-library/OpenAPIValidators#contributors).

Follow this process if you'd like to work on this project:

### 1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/<repo-name>

# Navigate to the newly cloned directory
cd <repo-name>

# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/<upstream-owner>/<repo-name>
```

### 2. If you cloned a while ago, get the latest changes from upstream

```bash
git checkout <dev-branch>
git pull upstream <dev-branch>
```

### 3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix

```bash
git checkout -b <topic-branch-name>
```

### 4. Test that your code works

To test changes to a particular package, you can run these from within the `package/<packageName>` dir (e.g. `package/jest-openapi`):

```bash
# run all tests
yarn test

# run all tests, with coverage check
yarn test:coverage

# run all tests, with coverage check, and opens the coverage report in your browser
yarn test:coverage:browse

# run eslint check
yarn lint

# [MUST] run all the above checks
yarn test:ci
```

To test both packages, run the above from the root dir.

### 5. Commit your changes in logical chunks

- Use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits before making them public.
- We use [Husky](https://github.com/typicode/husky) to run code-quality checks on every commit. This informs you early on if your code is not ready to be saved in Git history. If a commit fails a check, fix the problem then commit again.

### 6. Locally merge (or rebase) the upstream development branch into your topic branch

```bash
git pull [--rebase] upstream <dev-branch>
```

### 7. Push your topic branch up to your fork

```bash
git push origin <topic-branch-name>
```

### 8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description. Link it to the relevant issue
