[![Actions Status](https://github.com/Lena05k/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Lena05k/frontend-project-lvl2/actions)
[![Node.js Package](https://github.com/Lena05k/frontend-project-lvl2/actions/workflows/jest-test.yml/badge.svg)](https://github.com/Lena05k/frontend-project-lvl2/actions/workflows/jest-test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/c50e4c296d7246e888f7/maintainability)](https://codeclimate.com/github/Lena05k/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c50e4c296d7246e888f7/test_coverage)](https://codeclimate.com/github/Lena05k/frontend-project-lvl2/test_coverage)

# Difference Calculator

## Project Description
**Difference generator** is a cli program. It compares two configuration files and shows a difference.

### Utility features:
* Support for different input formats: yaml, json.
* Report generation as plain text, stylish and json.

### Example:
```sh
# stylish format
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}

# plain format
gendiff -f plain ./__fixtures__/file1.json ./__fixtures__/file2.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```
## Launching the program:

### Launch scheme: 
#### 1. Fork this repo by SSH key:
```sh
git@github.com:Lena05k/frontend-project-lvl2.git
```
#### 2. Install depencies:
```sh
make install
```
#### 3. Link the package to execute gendiff function:

```sh
make link
```
#### 4. Display help:
```gendiff -h```
```sh
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           output usage information
      
``` 
<details><summary>Video</summary>

[![Video]( https://asciinema.org/a/eXTvzQWWqoEsUjsQUt3bMp3vh.svg)](https://asciinema.org/a/eXTvzQWWqoEsUjsQUt3bMp3vh)

</details>

#### 5. Running a quick command
```
gendiff filepath1 filepath2
```
* ```gendiff``` - quick command to compare a file.
* ```filepath1``` - the path to the first file you want to compare.

Specify the directory: ```./__fixtures__/file1.json```, ```./__fixtures__/file1.yml```
* ```filepath2``` - the path to the second file to be compared with.

Specify the directory: ```./__fixtures__/file2.json```, ```./__fixtures__/file1.yml```

Example: ```gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json```

#### Style:
Difference generator after implementation returns the difference in one of the three styles.
* ```'stylish'``` - when the comparison is made line by line and all the differences between the first file and the second will be marked with "+" or "-".
* ```'plain'``` - a text description of the attributes in the format of what was added/changed/deleted and where.
* ```'json'``` - translation of the difference between files in JSON format.

#### Launch
By default, the output style is 'stylish', so the two call options listed below are equivalent:
```sh
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
gendiff -f stylish ./__fixtures__/file1.json ./__fixtures__/file2.json
```
<details><summary>Video</summary>

[![Video]( https://asciinema.org/a/Fubg8mF0p5l7zElhrHBsg3VOv.svg)](https://asciinema.org/a/Fubg8mF0p5l7zElhrHBsg3VOv)

</details>

Output in 'plain' format:
```sh
gendiff -f plain ./__fixtures__/file1.json ./__fixtures__/file2.json
```
<details><summary>Video</summary>

[![Video]( https://asciinema.org/a/gKFbJppDG92k5n9li7fKfP7jj.svg)](https://asciinema.org/a/gKFbJppDG92k5n9li7fKfP7jj)

</details>

Output in 'json' format:
```sh
gendiff -f json ./__fixtures__/file1.json ./__fixtures__/file2.json
``` 
<details><summary>Video</summary>

[![Video]( https://asciinema.org/a/fGNlrTIinzKIDv54gJj6rjPYB.svg)](https://asciinema.org/a/fGNlrTIinzKIDv54gJj6rjPYB)

</details>

### Run tests:

1. Run linter:
```sh 
make lint
```
2. Run test:
```sh 
make test
```
<details><summary>Video</summary>

[![Video]( https://asciinema.org/a/rOZ9eGF3GRGCWdEYKy26scn7s.svg)](https://asciinema.org/a/rOZ9eGF3GRGCWdEYKy26scn7s)

</details>

3. Get test coverage:
```sh 
make test-coverage
```
<details><summary>Video</summary>

[![Video]( https://asciinema.org/a/mlZunITZs7mYFSLvKtaz44t9j.svg)](https://asciinema.org/a/mlZunITZs7mYFSLvKtaz44t9j)

</details>


