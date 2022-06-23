import React, { useState } from 'react'
import MyButton from '../Components/UI/button/MyButton';
import MyInput from '../Components/UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''}) 
    }
   
    return (
      <form>
        {/* Управляемый компонент */}
        <MyInput 
            value={post.title} 
            onChange={e => setPost({...post, title: e.target.value})}
            type="text" 
            placeholder="Название поста"
        />
        {/* Неуправляемый компонент */}
        <MyInput 
            value={post.body} 
            onChange={e => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
}

export default PostForm
