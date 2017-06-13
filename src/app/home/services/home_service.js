var posts = [
  {
    id: 1,
    title: 'Save energy',
    category: 'energy conservation',
    content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
  }, {
    id: 2,
    title: 'Say no to plastics',
    category: 'eco-friendly habits',
    content: 'Use less and compost and recycle as much as possible'
  }, {
    id: 3,
    title: 'Use Automobiles smartly',
    category: 'Pollution',
    content: 'Walk and ride my bike less to and from school and get a ride with friends instea' +
        'd'
  }, {
    id: 4,
    title: 'Go green',
    category: 'eco-friendly habits',
    content: 'Work with my People.Power.Planet Champions to find ways that we can help our sch' +
        'ool save energy and the environment'
  }
];

export function getPosts() {
  return posts;
}