.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: up-dev
up-dev: ## Start dev environment
	npm run start


.PHONY: codegen
codegen: ## Codegen
	npx @openapitools/openapi-generator-cli generate -i src/openapi.json -g typescript-fetch -o ./src/gen
