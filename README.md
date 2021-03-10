# Thirty Seconds

## Prerequisites

- Node (tested with v15.0.1)
- Yarn (tested with v1.22.5)

## Setup

- Clone repo
- Get `NPM_TOKEN` for authenticating with GSAP's private registry. The value for this can be gotten from [Robin-Hoodie](mailto:robin@oreon.io)
- Run `export NPM_TOKEN=token_goes_here`
- Run `yarn`

### NPM_TOKEN

The reason this is necessary is because we're using an NPM package from a private registry.
For security reasons this token is not included in the repository.
See [this video](https://www.youtube.com/watch?v=30CivTsqqMY) for more details

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
