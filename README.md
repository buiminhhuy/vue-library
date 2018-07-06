# vue-library

> vue-library was adjusted for library development (ie. creating components to be imported into other projects via npm).
> Includes docs site so you can release documentation online for your library.
> This template is Vue 2.x compatible.


## Build Setup

``` bash

# Clone project
git clone https://github.com/buithi/vue-library.git

# Install dependencies
npm install

- `npm run dev:lib`: Runs webpack watch mode on your library so file changes are built and re-written to disk automatically (useful for [npm link](https://docs.npmjs.com/cli/link) situations).

- `npm run dev:docs`: Runs both the development server for your docs/demo site.

- `npm run build`: Shortcut to run both build:lib and build:docs.

- `npm run build:lib`: Production ready build of your library as an ES6 module (via UMD), ready to import into another project via npm.

- `npm run build:docs`: Production ready build of your docs site for your library. Put this build online so you can demo your library to the world and provide documentation.

```

#### Add externals

If you are using certain dependencies (ie. Lodash, jQuery, etc.) that you think clients would more likely provide 
in their own project or in their site directly as a script globally (such as from a CDN) then you can use 
Webpack's externals configuration for this. You can [read more here](https://webpack.js.org/guides/author-libraries/#add-externals).  


## Related Project

 [vue-project](https://github.com/buithi/vue-project) `A project was designed to run this vue-library`<br />
 [vue-library-template](https://github.com/prograhammer/vue-library-template)<br />


 ## License

[MIT](https://github.com/buithi/vue-library/blob/master/LICENSE) license.

Copyright (c) 2018-present Huy Bui