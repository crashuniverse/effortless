# effortless

Its an experiment to fill efforts using browser automation and save the pain
of being harassed and have a feeling of not doing anything about it.

## Pre-requisites
Patience  
`node`, `npm`  
`selenium-server-standalone@2.45`  
`chromedriver`

Install `node` and `npm` using [nvm](https://github.com/creationix/nvm#installation)  
On macOS, install `selenium-server-standalone@2.45` and `chromedriver` using
`brew`.

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


[Efforts] Test Suite
========================

Running:  efforts
 ✔ Element <#userNameInput> was visible after 52 milliseconds.
 ✔ Element <#Find_an_App> was visible after 564 milliseconds.
 ✔ Element <#findAppTxtId> was visible after 45 milliseconds.

OK. 3 assertions passed. (10.332s)
```
