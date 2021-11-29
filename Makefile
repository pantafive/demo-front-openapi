.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: up-dev
up-dev: ## Start dev environment
	npm run start


.PHONY: codegen
codegen: ## Codegen
	npx swagger-typescript-api -p ./src/openapi.json -o ./src/gen -n api.ts
