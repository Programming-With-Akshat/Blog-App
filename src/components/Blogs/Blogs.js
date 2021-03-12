import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import Blog from './Blog/Blog';
import './Blogs.css';

const Blogs = () => {
	const user = useSelector(selectUser);

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		db.collection('blogs')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setBlogs(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data()
					}))
				)
			);
	}, []);

	return (
		<div className='blogs'>
			{user && (
				<Link to='/addBlog'>
					<Button
						variant='contained'
						color='primary'
						startIcon={<i class='fas fa-plus'></i>}
					>
						Add Blog
					</Button>
				</Link>
			)}

			<div className='blogs__blogsList'>
				{blogs.map((blog) => (
					<Blog
						key={blog.id}
						id={blog.id}
						title={blog.data.title}
						content={blog.data.content}
						thumbnailUrl={blog.data.thumbnailUrl}
						username={blog.data.username}
					/>
				))}
			</div>
		</div>
	);
};

export default Blogs;
