// const hooks = require('../hooks/index.js');
let objects = require('./hooks.json');

const algoliasearch = require('algoliasearch');

const client = algoliasearch(
  '7KHPPMALBH',
  '3d3f75fcc0407819552f4cd6d1d95abc'
);
const index = client.initIndex('hooks');

// (async function () {
//   try {
//       const results = await index.saveObjects(objects, { autoGenerateObjectIDIfNotExist: true });
//       console.log("RESULTS" + results);
//   } catch (e) {
//       console.log("ERROR" + e);
//       throw e;
//   }
// })();
// let objects = hooks.allHooks;

// this uses `addObjects` and a callback rather than async. works


console.log(objects)
index.addObjects(objects, function(err, content) {
  console.log(content);
});
