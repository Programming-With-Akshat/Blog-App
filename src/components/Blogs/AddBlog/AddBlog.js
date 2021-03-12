import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import db from '../../../firebase';
import firebase from 'firebase';
import './AddBlog.css';
import { useHistory } from 'react-router';

const AddBlog = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [thumbnailUrl, setThumbnailUrl] = useState('');

	const user = useSelector(selectUser);
	const history = useHistory();

	const addBlog = (e) => {
		e.preventDefault();

		db.collection('blogs').add({
			title: title,
			content: content,
			thumbnailUrl: thumbnailUrl,
			username: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});

		history.push('/');
	};

	return (
		<div className='addBlog'>
			<form>
				<div className='addBlog__details'>
					<h3>Blog Title</h3>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type='text'
					/>

					<h3>Blog Content</h3>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						type='text'
					/>

					<h3>Blog Thumbnail Url</h3>
					<input
						value={thumbnailUrl}
						onChange={(e) => setThumbnailUrl(e.target.value)}
						type='text'
					/>
				</div>

				<Button
					variant='contained'
					type='submit'
					color='primary'
					onClick={addBlog}
					startIcon={<i class='fas fa-check'></i>}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddBlog;
