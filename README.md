# Thirty Seconds

## Prerequisites

- Node (tested with v15.0.1)
- Yarn (tested with v1.22.5)

## Setup

- Clone repo
- Run `yarn`

## Scripts

We generally want to avoid having to `cd` into any project directories and be able to run all scripts from the root.
This includes things like:

- Running a dev server
- Running a local Netlify instance
- Linting
- Typechecking
- Producing a build
- ...

An example of this would be:

`client:dev` this will run a dev server for the client project

Generally all project specific scripts should be prefixed with either `client:` or `server:`
Scripts that target all projects should be prefixed with `all:`
