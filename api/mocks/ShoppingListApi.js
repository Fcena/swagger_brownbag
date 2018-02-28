const dummyMockItems = [
  {
    id: 1,
    name: 'apple',
    created: '2018/02/27',
    type: 'vegetable',
    bought: true,
  },
  {
    id: 2,
    name: 'apple',
    created: '2018/02/27',
    type: 'vegetable',
    bought: true,
  },
  {
    id: 3,
    name: 'apple',
    created: '2018/02/27',
    type: 'vegetable',
    bought: true,
  },
  {
    id: 4,
    name: 'apple',
    created: '2018/02/27',
    type: 'vegetable',
    bought: true,
  },
  {
    id: 5,
    name: 'apple',
    created: '2018/02/27',
    type: 'vegetable',
    bought: true,
  },
];

export const getItems = (req, res) => {
  res.json(dummyMockItems);
};
