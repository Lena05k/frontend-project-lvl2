install:
	npx ci

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- -coverage

jest:
	npm jest
