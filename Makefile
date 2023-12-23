SHELL := /bin/bash
NPM_BIN := ./node_modules/.bin
COMMIT := $(NPM_BIN)/git-cz
NEXT := $(NPM_BIN)/next
PRETTIER := $(NPM_BIN)/prettier
ESLINT := $(NPM_BIN)/eslint
TSC := $(NPM_BIN)/tsc
RMRF = $(NPM_BIN)/rimraf

CHANGE_CWD := ./

APP_VERSION = $(shell node -p "require('./package.json').version")

BUILD_HASH = $(shell git rev-parse HEAD)
CURRENT_BRANCH = $(shell git rev-parse --abbrev-ref HEAD)

.PHONY: build clean clean-deep commit dev format lint release serve

-include .env.local
export $(shell sed 's/=.*//' .env.local)

dev: clean
	$(NEXT) dev

build: clean lint
	$(NEXT) build

clean:
	$(RMRF) .next
	$(RMRF) dist

clean-deep: clean
	$(RMRF) ./node_modules

commit:
	 $(COMMIT)

format: type-check
	$(PRETTIER) --write "{,**/}{,.}*.{css,sass,scss,js,json,jsx,md,ts,tsx,yml,yaml}"

lint:
	$(PRETTIER) --check "{,**/}{,.}*.{css,sass,scss,js,json,jsx,md,ts,tsx,yml,yaml}"
	$(ESLINT) src
	$(NEXT) lint

release: format build

serve: build
	$(NEXT) start

type-check:
	$(TSC) --pretty --noEmit