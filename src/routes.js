import React from 'react';
import App from './app/app';
import PostIndex from './app/home/container/posts_list';


import { Route,IndexRoute } from 'react-router';

/*const Greeting = () => {
    return <div>Hello there!</div>
}*/

export default(
    <Route path="/" component={App}>
      <IndexRoute component={PostIndex}/> 
    </Route>
);