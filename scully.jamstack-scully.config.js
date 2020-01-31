const { RouteTypes } = require('@scullyio/scully');

exports.config = {
  projectRoot: "./",
  projectName: "jamstack-scully",
  outDir: './dist/static',
  routes: {
    '/pages/:name': {
      type: 'contentFolder',
      name: {
        folder: "./content/pages"
      }
    },
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: "./content/posts"
      },
    },
  }
};
