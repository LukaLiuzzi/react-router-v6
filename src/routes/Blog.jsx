import { useFetch } from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

const Blog = () => {

  const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts')


  if (loading) {
    return <Spinner />
  }
  
  if (error !== '') {
    return <h2>{error}</h2>
  }

  return (
    <div>
    <h1 className='text-center mt-2 text-uppercase fw-bold'>Blog</h1>
    {
      data.map(post => (
        <div className='card mb-3' key={post.id}>
          <Link to={`/blog/${post.id}`}>
          <div className='card-body bg-dark text-white'>
            <h2 className='card-title'>{post.id} - {post.title}</h2>
            <p className='card-text'>{post.body}</p>
          </div>
        </Link>
        </div>
      ))
    }
    </div>
  )
}

export default Blog