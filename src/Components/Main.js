import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom'

//class component
class Main extends Component {
  constructor() {
    super()
    this.state = {
      posts: [{
        id: 0,
        description: "Naruto Uzumaki",
        imageLink: "Photos/Naruto Uzumaki.jpg"
      }, {
        id: 1,
        description: "Sasuke Uchiha",
        imageLink: "Photos/sasuke.gif"
      }, {
        id: 2,
        description: "Kakashi Hatake",
        imageLink: "Photos/Kakashi Hatake.jpg"
      }],
    }
    this.removePhoto = this.removePhoto.bind(this);
  }

  //Add method removePhoto 
  removePhoto(postRemoved) {
    console.log(postRemoved.description)
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  //Add method addphoto
  AddPhoto(postSubmitted){
    this.setState((state)=>({
      posts:state.posts.concat([postSubmitted])
    }))
  }

  componentDidMount(){
    console.log("ComponentDidMount")
  }

  componentDidUpdate(prevProp,prevState){
    console.log(prevState.posts)
    console.log(this.state)
  }
  render() {
    return (
     //using Link to navigate with match url and with Route show the path and show that ui component
      <div> 
          <Route exact path="/" render = {() => (
            <div>
              <Title title={'Naruto'} />
              <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigator={this.navigator}/>
            </div>
          )}/>
          <Route path="/addPhoto" render={({history}) => (
              <AddPhoto onAddPhoto={(addedPost) => {
                this.AddPhoto(addedPost)
                history.push('/')
              }}/> 
            )}/>
      </div>
    )
  }
}

export default Main;