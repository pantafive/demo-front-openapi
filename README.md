# OpenAPI for frontend

This project demonstrates how to build client and form validation from OpenAPI specification.
Project builds on top of [Svelte](https://svelte.dev/) and [Snowpack](https://www.snowpack.dev/).
HTTP client is generated with help of [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api).
Form validation is based on [Ajv](https://ajv.js.org/).

## Setup Environment

```shell
npm install
```

> if you plan to contribute you should also install [pre-commit](https://pre-commit.com/)
> and setup it with `pre-commit install` command.

## Play

To start development server just run `make up-dev`. You'll see simple form with invalid data. When you fix errors you'll
be able to submit form to https://httpbin.org.

No try to play wit `./src/openapi.json` file. Change validation rules, then run `make codegen`. That is.

---

**Probably this is worst javascript code you have ever seen. I know nothing about frontend and javascript. The only goal
of the project is to demonstrate power of OpenAPI and base concepts of code generation. I will be very happy for your
feedback.**
