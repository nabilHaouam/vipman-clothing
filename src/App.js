import React, { Component } from 'react'
import {CardList} from './components/cards/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      users:[],
      searchField:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      users : users
    }))
  }
  handleChange = e =>(this.setState({searchField: e.target.value}))

  render() {
    const {searchField , users} = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='app'>  
        <h1 className='app-title'>Aliens Rolodex</h1>     
        <SearchBox placeholder='search aliens' handleChange={this.handleChange}/>
        <CardList users={filteredUsers}/>
      </div>
    )
  }
}
