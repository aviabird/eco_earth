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

var categories = [
  {
    id:1,
    category:'energy conservation'
  }, {
    id:2,
    category:'eco-friendly habits'
  },{
    id:3,
    category:'Pollution'
  },{
    id:4,
    category:'eco-friendly habits'
  }
];

export function getPosts() {
  return posts;
}

export function getCategories() {
  return categories;
}

export function getCategorylist(category){
  var categories_list=posts.filter(function (post) {
    return post.category == category
  });
  return categories_list;
}
