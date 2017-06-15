import React from 'react';
import App from './app/app';
import PostsList from './app/home/container/posts_list';
import PostShow from './app/post_detail/post_show';

import { Route,IndexRoute } from 'react-router';

/*const Greeting = () => {
    return <div>Hello there!</div>
}*/

export default(
    <Route path="/" component = { App }>
      <IndexRoute component = { PostsList }/> //going to / would render App with PostIndex passed as a child
      <Route path="posts/:id" component = { PostShow }/>
    </Route>
);