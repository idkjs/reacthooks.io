const algoliasearch = require('algoliasearch');
const client = algoliasearch(
    '7KHPPMALBH',
    '3d3f75fcc0407819552f4cd6d1d95abc'
  );
const index = client.initIndex('hooks');

index.setSettings({
    // Select the attributes you want to search in
    searchableAttributes: [
      'name', 'description'
    ],
    // Define business metrics for ranking and sorting
    customRanking: [
      'desc(popularity)'
    ],
  });