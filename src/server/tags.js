const algoliasearch = require('algoliasearch');
const client = algoliasearch(
  '7KHPPMALBH',
  '3d3f75fcc0407819552f4cd6d1d95abc'
);
const index = client.initIndex('hooks');
index.search('use', {
    filters: 'js' // Same as '_tags:politics'
  }).then(({ hits }) => {
    console.log(hits);
  });