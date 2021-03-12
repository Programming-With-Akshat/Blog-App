import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import blogReducer from '../features/blogSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		blog: blogReducer
	}
});
