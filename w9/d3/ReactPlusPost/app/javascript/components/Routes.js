import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import NewPost from "./NewPost";
import ShowPost from "./ShowPost";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link class="link" to="/">
              Home
            </Link>
            <Link class="link" to="/posts">
              All Posts
            </Link>
            <Link class="link" to="/posts/new">
              New Post
            </Link>
            <Link class="link" to="/posts/1">
              Post 1
            </Link>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/new" component={NewPost} />
            <Route path="/posts/:id" component={ShowPost} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
