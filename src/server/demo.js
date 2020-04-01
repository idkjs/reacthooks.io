import algoliasearch from 'algoliasearch'
import fetch from 'isomorphic-unfetch'

const client = algoliasearch('7KHPPMALBH', '3d3f75fcc0407819552f4cd6d1d95abc')

const index = client.initIndex('demo_ecommerce')

let products = requires('./hooks.json')
index.saveObjects(products, {
    autoGenerateObjectIDIfNotExist: true
  })