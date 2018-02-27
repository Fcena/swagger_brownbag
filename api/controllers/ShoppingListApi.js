'use strict';
import { retrieveSwaggerParam, removeProperties } from '../helpers/util';
import { itemsCollection } from '../database/db';

const DUMMY_LOKI_PROPS = ['meta', '$loki'];
const removeLokiDummyProps = removeProperties(DUMMY_LOKI_PROPS);

export const getItems = (req, res) => {
  const allItems = itemsCollection
    .chain()
    .data()
    .map(removeLokiDummyProps);

  res.json(allItems);
};

export const getItemById = (req, res) => {
  const id = retrieveSwaggerParam(req.swagger, 'id');
  const item = removeLokiDummyProps(itemsCollection.findOne({ id }));

  res.json(item);
};

export const addItem = (req, res) => {
  const item = retrieveSwaggerParam(req.swagger, 'item');
  itemsCollection.insert(item);

  res.json({ id: item.id });
};
export const updateItemById = (req, res) => {
  const id = retrieveSwaggerParam(req.swagger, 'id');
  const newItem = retrieveSwaggerParam(req.swagger, 'updated_item');
  let item = itemsCollection.findOne({ id });
  Object.assign(item, newItem);
  itemsCollection.update(item);

  res.header('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end();
};

export const deleteItemById = (req, res) => {
  const id = retrieveSwaggerParam(req.swagger, 'id');
  itemsCollection.findAndRemove({ id });

  res.header('Content-Type', 'application/json');
  res.statusCode = 204;
  res.end();
};
