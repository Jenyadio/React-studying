import React, {useState, useEffect} from 'react';
import PostService from './API/PostService';
import PostFilter from './Components/PostFilter';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyModal from './Components/UI/MyModal/MyModal'
import Loader from './Components/UI/loader/Loader'
import {usePosts} from './hooks/usePosts';
import './styles/App.css'
import { useFetching } from './hooks/useFetching';
 
function App() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError ] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
     setPosts([...posts, newPost])
     setModal(false)
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
         <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
      }
    </div>
  );
}

export default App;
