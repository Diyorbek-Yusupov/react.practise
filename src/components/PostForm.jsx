import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export default function PostForm({createPost}) {
    const [ post, setPost ] = useState({title:'', stack:''});
    const [ id, setId ] = useState(101);
    const giveId = () => {
      setId(id => id+1);
      return id
    }
    const addPost = (e) => {
        e.preventDefault();
        createPost({...post, id: giveId()});
        setPost({title: '', stack: ''})
      }
    return (
        <>
            <form>
            <h3 className="text-center">Add Post to list</h3>
            <MyInput
              type="text"
              placeholder="Language"
              className="form-control"
              value={post.title}
              onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
              type="text" 
              placeholder="Stack" 
              className="form-control my-2" 
              value={post.stack}
              onChange={e => setPost({...post, stack: e.target.value})}
            />
            <MyButton
              className='btn btn-primary form-control'
              onClick={addPost}  
            >
                Add post
            </MyButton>
         </form>
        </>
    )
}
