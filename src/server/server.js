// server.js
import React from 'react';
import { renderToString } from 'react-dom/server';
import { findResultsState } from 'react-instantsearch-dom/server';

import { App } from './App';

server.get('/', async (req, res) => {
  const initialState = {

    resultsState: await findResultsState(App, {
      indexName,
      searchClient
    })
  };

  const plainHTML = renderToString(<App {...initialState} />);

  // ...
});

const indexName = 'hooks';
const searchClient = algoliasearch(
    // '7KHPPMALBH',
  'latency',
  '3d3f75fcc0407819552f4cd6d1d95abc'
);

server.get('/', async (req, res) => {
    const initialState = {

   resultsState: await findResultsState(App, {
     indexName,
     searchClient
   })
    };
  
    const plainHTML = renderToString(<App {...initialState} />);
  
    // ...
  });
