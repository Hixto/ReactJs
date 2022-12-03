import React, {useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/postlist';
import './components/styles/app.css'
import MyInput from './components/UI/Input/MyInput';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, SetPosts] = useState([
      {id: 1, title: "javascript", body: "description"},
      {id: 2, title: "ajavascript", body: "description"},
      {id: 3, title: "javascript", body: "adescription"},
    ])

    const [SelectedSort, SetSelectedSort] = useState('')
    const [SearchQuery, SetSearchQuery] = useState('')

    function getSortedPosts() {
      console.log('сортировка сработала')
      if(SelectedSort) {
        return [...posts].sort((a, b) => a[SelectedSort].localeCompare(b[SelectedSort]));
      }
      return posts;
    }

    const SortedPosts = getSortedPosts

    const createPost = (newPost) => {
      SetPosts([...posts, newPost])
    }

    const removePost = (post) => {
      SetPosts(posts.filter(p => p.id !== post.id))
    }

    const SortPosts = (sort) => {
      SetSelectedSort(sort);
    }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={SearchQuery}
          onChange={e => SetSearchQuery(e.target.value)}
          placeholder='Поиск'
        />
        <MySelect
          value={SelectedSort}
          onChange={SortPosts}
          defaultValue="Сотрировка"
          option={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length
        ?   <PostList remove={removePost} posts={SortedPosts} title="post list 1"/>
        :   <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
