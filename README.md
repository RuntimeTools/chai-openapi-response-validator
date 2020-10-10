# OpenAPI Validators

[![Build Status](https://travis-ci.com/RuntimeTools/OpenAPIValidators.svg?branch=master)](https://travis-ci.com/RuntimeTools/OpenAPIValidators)
![dependencies](https://img.shields.io/david/RuntimeTools/OpenAPIValidators)
![style](https://img.shields.io/badge/code%20style-airbnb-ff5a5f.svg)
[![codecov](https://codecov.io/gh/RuntimeTools/OpenAPIValidators/branch/master/graph/badge.svg)](https://codecov.io/gh/RuntimeTools/OpenAPIValidators)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/RuntimeTools/OpenAPIValidators/blob/master/CONTRIBUTING.md)

Chai and Jest support for asserting that HTTP responses satisfy an OpenAPI spec.

## Problem 😕

If your server's behaviour doesn't match your API documentation, then you need to correct your server, your documentation, or both. The sooner you know the better.

## Solution 😄

These test plugins let you automatically test whether your server's behaviour and documentation match. They extend Chai and Jest to support the [OpenAPI standard](https://swagger.io/docs/specification/about/) for documenting REST APIs. In your JavaScript tests, you can simply assert `expect(responseObject).toSatisfyApiSpec()`

### [Chai OpenAPI Response Validator](https://github.com/RuntimeTools/OpenAPIValidators/tree/master/packages/chai-openapi-response-validator#readme)

[![downloads](https://img.shields.io/npm/dm/chai-openapi-response-validator)](https://www.npmjs.com/package/chai-openapi-response-validator)
[![npm](https://img.shields.io/npm/v/chai-openapi-response-validator.svg)](https://www.npmjs.com/package/chai-openapi-response-validator)

### [jest-openapi](https://github.com/RuntimeTools/OpenAPIValidators/tree/master/packages/jest-openapi#readme)

[![downloads](https://img.shields.io/npm/dm/jest-openapi)](https://www.npmjs.com/package/jest-openapi)
[![npm](https://img.shields.io/npm/v/jest-openapi.svg)](https://www.npmjs.com/package/jest-openapi)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/rwalle61"><img src="https://avatars1.githubusercontent.com/u/18170169?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Richard Waller</b></sub></a><br /><a href="#maintenance-rwalle61" title="Maintenance">🚧</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=rwalle61" title="Code">💻</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=rwalle61" title="Documentation">📖</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/pulls?q=is%3Apr+reviewed-by%3Arwalle61" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/JonnySpruce"><img src="https://avatars3.githubusercontent.com/u/30812276?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonny Spruce</b></sub></a><br /><a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=JonnySpruce" title="Code">💻</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=JonnySpruce" title="Documentation">📖</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/pulls?q=is%3Apr+reviewed-by%3AJonnySpruce" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/AlexDobeck"><img src="https://avatars2.githubusercontent.com/u/10519388?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex Dobeck</b></sub></a><br /><a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=AlexDobeck" title="Code">💻</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/issues?q=author%3AAlexDobeck" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/BenGu3"><img src="https://avatars2.githubusercontent.com/u/7105857?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ben Guthrie</b></sub></a><br /><a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=BenGu3" title="Code">💻</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/issues?q=author%3ABenGu3" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://martijnvegter.com/"><img src="https://avatars3.githubusercontent.com/u/25134477?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martijn Vegter</b></sub></a><br /><a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=mvegter" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ludeknovy"><img src="https://avatars1.githubusercontent.com/u/13610612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ludek</b></sub></a><br /><a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=ludeknovy" title="Code">💻</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/issues?q=author%3Aludeknovy" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/tgiardina"><img src="https://avatars1.githubusercontent.com/u/37459104?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tommy Giardina</b></sub></a><br /><a href="https://github.com/RuntimeTools/OpenAPIValidators/commits?author=tgiardina" title="Code">💻</a> <a href="https://github.com/RuntimeTools/OpenAPIValidators/issues?q=author%3Atgiardina" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
