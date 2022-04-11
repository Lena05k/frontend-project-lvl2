install:
	npx ci

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest -- -coverage
