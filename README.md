# cleaner-node
Helpful utilities and scripts to make Node projects more legible and easier for the next developer to take over.

## Background  
There are several libraries out there designed to make life easier for developers (`moment`, `lodash`, `underscore`, etc.).  However, for the most part, the goals of those utilities are to *add on* to what Node and JavaScript bring to the table.  And, as Node and JavaScript mature, developers find them to be less of a _neccessity_ and end up removing them.  While `cleaner-node` is _also_ a helper package, and completely unnecessary, it's goal is to abstract some of the more redundant and verbose syntaxes.  The end result is a codebase that still functions as it would _without_ `cleaner-node` but is easier to read *and maintain*.  Unlike those other libraries, which shrink over time, I intend on growing `cleaner-node` for as long as Node exists so that I don't have to write the same code again, and again, and again, and again, and ag....

## Installation  

`npm i cleaner-node`

## Changes  

### v0.0.1 - v0.22.2

The first iteration of `cleaner-node` proved to be very successful.  It was used in several projects and was great at reducing the noise in the codebase.  It actually lead to the development of other projects, such as [`restutils-host`](https://www.npmjs.com/package/restutils-host) and [`restutils-client`](https://www.npmjs.com/package/restutils-client); tools that allow instant API creation from any JavaScript file or Node package.  During this time there was experimentation with both CommonJS and JavaScript Modules.  It was decided that, while JavaScript Modules are the future, CommonJS is still the standard for Node projects and will be for some time.  As such, the first release of `cleaner-node` will be in CommonJS with other projects, such as [`nextjs-helpers`](https://www.npmjs.com/package/nextjs-helpers), focusing on JavaScript Modules.

### v1.0.0  

The first actual release of `cleaner-node`, this version focuses on reducing code complexity for common tasks within Node projects.  It is written using CommonJS and is intended to be used in Node projects.  It is not intended to be used in the browser, though it may work in some cases.  It is also not intended to be used in React projects, though it may work in some cases.  

## Contact  

If you have any questions, comments, or concerns, please feel free to reach out to me at...

**Fred Lackey**  
[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)  
[http://fredlackey.com](http://fredlackey.com)  
