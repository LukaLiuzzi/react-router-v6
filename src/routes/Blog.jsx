import { useFetch } from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import { Link, useSearchParams } from 'react-router-dom';

const Blog = () => {
	let [searchParams, setSearchParams] = useSearchParams();

	const { data, error, loading } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);

	const handleChange = (e) => {
		let search = e.target.value;
		if (search) {
			setSearchParams({ search });
		} else {
			setSearchParams({});
		}
	};

	if (loading) {
		return <Spinner />;
	}

	if (error !== '') {
		return <h2>{error}</h2>;
	}

	return (
		<div>
			<h1 className='text-center mt-2 text-uppercase fw-bold'>Blog</h1>

			<input
				type='text'
				className='form-control mb-2'
				value={searchParams.get('search') || ''}
				name='search'
				onChange={handleChange}
			/>

			{data
				.filter((post) => {
					if (searchParams.get('search')) {
						return post.title
							.toLowerCase()
							.includes(searchParams.get('search').toLowerCase());
					} else {
						return post;
					}
				})
				.map((post) => (
					<div className='card mb-3' key={post.id}>
						<Link to={`/blog/${post.id}`}>
							<div className='card-body bg-dark text-white'>
								<h2 className='card-title'>
									{post.id} - {post.title}
								</h2>
								<p className='card-text'>{post.body}</p>
							</div>
						</Link>
					</div>
				))}
		</div>
	);
};

export default Blog;
