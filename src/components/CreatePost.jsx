import { useContext, useRef } from "react";
// import {PostList} from "./PostList";
import {PostList} from "../store/post-list-store";

const CreatePost=()=>{

  const {addPost}=useContext(PostList);

   const userIdElement=useRef();
   const postTitleElement=useRef();
   const postBodyElement=useRef();
   const reactionsElement=useRef();
  const tagsElement=useRef();

   
   const handleSubmit=(event)=>{
    event.preventDefault();
    
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";;
    reactionsElement.current.value="";
    tagsElement.current.value="";
    addPost(userId,postTitle,postBody,reactions,tags);
     
   }
   return(

    <form className="create-post"  onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">enter user id</label>
    <input type="text" 
    ref={userIdElement}
    className="form-control" 
    id="userId"
    placeholder="your user us " />
  
  </div>
  <div className="mb-3">
    <label htmlFor="title"  className="form-label">Post Title</label>
    <input type="text" 
    ref={postTitleElement}
    className="form-control" 
    id="text" 
    placeholder="how you are today.."/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post content</label>
    <textarea type="text" 
    ref={postBodyElement}
    row="4"  
    className="form-control" 
    id="body"
     placeholder="tell us more about it..."/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">no of ractions</label>
    <input type="text" 
    ref={reactionsElement}
    className="form-control"
     id="reactions" 
     placeholder="how many people racated this post"/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">enter your hastags</label>
    <input type="text"
    ref={tagsElement}
     className="form-control"
      id="tags"
       placeholder="please enter tags"/>
    
  </div>



  <button type="submit" className="btn btn-primary">Submit</button>
</form>



   )
}

export default CreatePost;