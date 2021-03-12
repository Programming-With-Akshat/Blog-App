import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setBlog } from '../../../features/blogSlice';
import './Blog.css';

const Blog = ({ id, title, content, timestamp, thumbnailUrl, username }) => {
	const truncate = (str) => {
		return str.length > 10 ? str.substring(0, 75) + '...' : str;
	};

	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<div
			className='blog'
			onClick={() => {
				dispatch(
					setBlog({
						blogTitle: title,
						blogContent: content,
						blogThumbnailUrl: thumbnailUrl,
						blogAuthor: username,
						blogId: id
					})
				);

				history.push(`/${id}/read`);
			}}
		>
			<img src={thumbnailUrl} alt='Thumbnail' className='blog__thumbnail' />

			<div className='blog__content'>
				<h3 className='blog___title'>{title}</h3>
				<p className='blog__timestamp'>{timestamp}</p>
				<h5 className='blog__summary'>{truncate(content)}</h5>
				<Link className='blog__readMore'>Read More...</Link>
				<p className='blog__author'>Blog By {username}</p>
			</div>
		</div>
	);
};

export default Blog;
