import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useFetch } from '../hooks/useFetch'

const Post = () => {

    let params = useParams()
    const { id } = params
    const {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    if (loading) {
        return <Spinner/>
      }
      
      if (error !== '') {
        return <h2>{error}</h2>
      }
    
      return (
        <div>
            <h1 className='text-center mt-2 text-uppercase fw-bold'>Post</h1>
                <div className='card mb-3' key={data.id}>
                    <div className='card-body bg-dark text-white'>
                        <h2 className='card-title'>{data.id} - {data.title}</h2>
                        <p className='card-text'>{data.body}</p>
                    </div>
                </div>
            <Link to='/blog' className='btn btn-outline-dark d-block mx-auto w-25'>Back to Blog</Link>
        </div>
      )
}

export default Post