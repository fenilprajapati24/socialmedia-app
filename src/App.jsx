
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from'./components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';
function App() {

   const [selectTab,setselectTab]=useState("Home");


  return (
    
    <PostListProvider>
    <div className="app-container">
    <Sidebar selectTab={selectTab} setselectTab={setselectTab}></Sidebar>
    <div className="content">  
    <Header></Header>

    {selectTab==="Home"?(< PostList></ PostList>):(<CreatePost></CreatePost>)}
    
    
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
    
  )
}

export default App
