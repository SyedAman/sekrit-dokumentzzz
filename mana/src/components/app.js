import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './home';
import ViewEntry from './view_entry';
import NewEntry from './new_entry';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [
        {
          title: 'First Entry',
          date: '1/1/2018',
          log: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime nobis totam a in laudantium tenetur deserunt inventore sit molestiae officia doloremque accusantium, voluptate praesentium placeat quo rerum ab dolore`,
          emotion: {
            "Neutral": 0.760,
            "Happy": 0.000,
            "Sad": 0.238,
            "Angry": 0.001,
            "Fear": 0.000
          },
        }
      ]
    }
  }
  render() {
    return (
      <BrowserRouter> 
        <div>
          hello world
          <Switch>
            <Route path="/entry/new" component={NewEntry} />
            // This is the second Route because :id is a wildcard and will accept anything.
            <Route path="/entry/:id" component={ViewEntry}/>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
