import React from 'react';
import Search from './Search.js';
import { InstantSearch } from 'react-instantsearch-dom';

export default function Sidebar () {
  return (
    <div className='sidebar'>
      <InstantSearch
        appId="7KHPPMALBH"
        apiKey="b8dfdd155c2e8865556abdb415126ccf"
        indexName="hooks"
      >
        <Search/>
      </InstantSearch>
    </div>
  );
}
