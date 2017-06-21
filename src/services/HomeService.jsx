var posts = [
  {
    id: 1,
    title: 'Save energy',
    category_id: 1,
    content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
  }, {
    id: 2,
    title: 'Say no to plastics',
    category_id: 2,
    content: 'Use less and compost and recycle as much as possible'
  }, {
    id: 3,
    title: 'Use Automobiles smartly',
    category_id: 3,
    content: 'Walk and ride my bike less to and from school and get a ride with friends instead'
  }, {
    id: 4,
    title: 'Go green',
    category_id: 4,
    content: 'Work with my People.Power.Planet Champions to find ways that we can help our school save energy and the environment'
  }
];

var categories = [
  {
    id:1,
    category:'energy conservation'
  }, {
    id:2,
    category:'no plastics'
  }, {
    id:3,
    category:'Pollution'
  }, {
    id:4,
    category:'eco-friendly habits'
  }
];

export function getPosts() {
  return posts;

}

export function getPostById(id) {
  return posts[id-1];
}

export function getCategories() {
  return categories;
}

export function getCategorylist(category_id){
  var categories_list = posts.filter(function (post) {
    return post.category_id === category_id
  });
  return categories_list;
}