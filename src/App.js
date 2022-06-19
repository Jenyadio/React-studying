import React, { useState, useRef } from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import './styles/App.css'
 
function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
     e.preventDefault();
     setPosts([...posts, {...post, id: Date.now()}]);
     setPost({title: '', body: ''})
  }

  return (
    <div className="App">
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
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
