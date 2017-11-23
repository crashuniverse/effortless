# effortless

It is an experiment to fill efforts using browser automation and save the pain
of being harassed and have a feeling of not doing anything about it. The big
picture is we should save every minute by making new abstractions over existing
apps.

## How to use this project
This project makes the entire effort updating process automated. The way it
works is you provide Travis CI with credentials in form of 2 environment
variables - `USERNAME` and `PASSWORD` with your actual values for these
credentials. Travis CI uses these credentials to login on your behalf and fills
your timesheets. Advanced usage involves an optional 3rd env variable `PROJECT`,
for which the value is `id` of the [project on Monday in DOM](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/edit-dom#inspect-an-element).
Typical values are `0_0_0_0` & `projectA_0_0_0`.

## Setup Travis CI for scheduled jobs in 5 steps
1. Make a free account or login with an existing account at
[Github](https://github.com/).
2. [Fork](https://help.github.com/articles/fork-a-repo/) `effortless` project
that makes a copy of the project in your account.
3. Make a free account at a leading [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) SaaS software [Travis CI](https://travis-ci.org/) using Github credentials or login with an
existing account.
4. [Add environment variables](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings)
in Travis CI:
```
USERNAME: xa123456
PASSWORD: password
PROJECT: 0_7_nonproj (optional)
```
5. At 5pm on one of these days, [add a cron job](https://docs.travis-ci.com/user/cron-jobs/#Adding-Cron-Jobs)
in Travis CI so that it runs a build everyday.

## How to stop using this project
If you decide to stop using the project for any reason, you should turn off
builds for project listed under
[Travis CI profile](https://travis-ci.org/profile).


## Security and privacy - the internals
`effortless` is built with security as a part of design. A few things to know
would be:
1. Your username and password are stored on Travis CI in a private account that
is accessible only to the you.
2. The login credentials are provided to `effortless` in runtime and after a
build succeeds it gets destroyed.
3. Automation runs in no logging mode, so there are no chances of it being
logged anywhere. These logs are private and is available for you on Travis CI
to inspect.
4. The credentials leave  to destination on https protocol so it is
safe throughout its journey.
5. The source code is on Github and there is no monkey business in logic.

## Development pre-requisites
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

Made with ❤️ in India.
