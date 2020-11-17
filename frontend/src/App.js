import React, { Component } from 'react';
import axios from 'axios';
const api = axios.create(
  {baseURL : 'http://127.0.0.1:8000/api'}
)

class App extends Component {
  state = {
    posts : [],
    next : [],
    previous : [],
    count : 0,
  }
  constructor(){
    super();
    api.get('/?page=1').then(res => {
      this.setState({ posts: res.data.results ,next: res.data.next ,previous: res.data.previous, count: res.data.count});
      
     
    })
  }
  nextPage = () => {
    api.get(this.state.next).then(res =>{
      this.setState({ posts: res.data.results ,next: res.data.next ,previous: res.data.previous, count: res.data.count});
      
    })
  }
  previousPage = () => {
    api.get(this.state.previous).then(res =>{
      this.setState({ posts: res.data.results ,next: res.data.next ,previous: res.data.previous, count: res.data.count});
      
    })
  }

  render (){
    return(
    <div className="App">
      <h1>Total Posts = {this.state.count}</h1>
     {
       this.state.posts.map(post =><h2 key={post.id}>{post.title}</h2>)
     }
      <button onClick={() => this.nextPage()}>Next Page</button>
      <button onClick={() => this.previousPage()}>Previous Page</button>
    </div>)
  }
}

export default App;