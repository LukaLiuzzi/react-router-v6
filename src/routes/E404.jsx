import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation404 from '../assets/animation404';

const options = {
	animationData: animation404,
	loop: true,
	autoplay: true,
	style: {
		width: '100%',
		height: '75vh',
	},
};

const E404 = () => {
	return (
		<div>
			<Lottie {...options} />
			<div className='d-flex flex-column align-items-center'>
				<h1>Error 404</h1>
				<h2>Page not found</h2>
				<Link to='/' className='btn btn-dark'>
					Home
				</Link>
			</div>
		</div>
	);
};

export default E404;
