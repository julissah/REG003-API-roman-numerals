# Roman numerals

CLI - The library allows to convert `Arabic numerals` to `Roman numerals` and vice versa.

## Install

```npm
npm i roman-numerals-api
```

## Usage

```bash
roman-numerals
```

<!-- ## Demo

![Alt Text](https://user-images.githubusercontent.com/45825143/134442350-70eacd7b-17b2-4226-808a-d44e5174abe3.gif) -->

## API - JavaScript

The module _exports_ an _object_ with two methods:

* `parse(str)`: Receives a `String` as a single argument and returns a number
  (`Number`) if it is a valid Roman numeral, otherwise it will throw an error specifying the cause.
* `stringify(num)`: Receives a number (`Number`) and returns a `String` with the representation of the received number as a Roman numeral. In case the number is out of range (`1 <= num <= 3999`).

Example of use:

```js
const { parse, stringify } = require('roman-numerals-convers');

console.log(parse('I') === 1); // true
console.log(parse('III') === 3); // true
console.log(parse('IV') === 4); // true
console.log(parse('IX') === 9); // true
console.log(parse('MCMXLIV') === 1944); // true

console.log(stringify(1) === 'I'); // true
console.log(stringify(3) === 'III'); // true
console.log(stringify(4) === 'IV'); // true
console.log(stringify(9) === 'IX'); // true
console.log(stringify(1944) === 'MCMXLIV'); // true

console.log(parse(stringify(1)) === 1); // true
console.log(parse(stringify(3)) === 3); // true
console.log(parse(stringify(4)) === 4); // true
console.log(parse(stringify(9)) === 9); // true
console.log(parse(stringify(1944)) === 1944); // true
```

## CLI - Command Line Interface


The module can be installed with the `npm i roman-numerals-convert` command globally and also using the `npx` command (a tool that comes with `node` and `npm`).

This interface offers two _sub-commands_ (`parse` and `stringify`) plus options to display help (`--help`) and the module version (`--version`).


### Examples

You can also execute directly with the `romans-numerals` command.

#### Comands

* parse

  ```sh
  $ npx roman-numerals parse MMXX
  2020
  ```

* stringify

  ```sh
  $ npx roman-numerals stringify 2020
  MMXX
  ```

#### Options
* --version

  ```text
  $ npx roman-numerals -v
  1.0.0
  ```

* --help

  ```text
  $ npx roman-numerals -h
  Usage: roman-numerals [opttions] <command> [<input>]
  Commands:
    parse <input>      Parse a roman numeral string into an   integer.
    stringify <input>  Takes an integer and converts it to a  roman numeral.
  Options:
    --h,--help     Show this help.
    --v,--version  Show version number.
  ```

## Install - NPM

You can download the package [NPM](https://www.npmjs.com/package/roman-numerals-api).
## License
roman-numerals is released under the [MIT License](https://opensource.org/licenses/MIT).