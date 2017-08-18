# effortless

Its an experiment to fill efforts using browser automation and save the pain
of being harassed and have a feeling of not doing anything about it.

## Pre-requisites
`node`, `npm`  
`java8` or `java version "1.8.0_xxx"`

Install `node` and `npm` using [nvm](https://github.com/creationix/nvm#installation)

## Install
`npm i`

## Run
`USERNAME=xa123456 PASSWORD=password npm start`

## Console output
```
$ USERNAME=xa123456 PASSWORD=password npm start

> effortless@1.0.0 start /Users/pr375903/Development/labs/effortless
> npm t


> effortless@1.0.0 test /Users/pr375903/Development/labs/effortless
> nightwatch tests

Starting selenium server... started - PID:  23355

[Efforts] Test Suite
========================

Running:  efforts
 ✔ Element <#username> was visible after 124 milliseconds.
 ✔ Element <.appstore> was visible after 2831 milliseconds.
 ✔ Element <#mainContent> was visible after 2172 milliseconds.

OK. 3 assertions passed. (31.886s)
```
