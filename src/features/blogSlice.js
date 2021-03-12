import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		blogId: null,
		blogTitle: null,
		blogContent: null,
		blogThumbnailUrl: null,
		blogAuthor: null
	},
	reducers: {
		setBlog: (state, action) => {
			state.blogId = action.payload.blogId;
			state.blogTitle = action.payload.blogTitle;
			state.blogContent = action.payload.blogContent;
			state.blogThumbnailUrl = action.payload.blogThumbnailUrl;
			state.blogAuthor = action.payload.blogAuthor;
			state.blogTimestamp = action.payload.blogTimestamp;
		}
	}
});

export const { setBlog } = blogSlice.actions;

export const selectBlogId = (state) => state.blog.blogId;
export const selectBlogTitle = (state) => state.blog.blogTitle;
export const selectBlogContent = (state) => state.blog.blogContent;
export const selectBlogThumbnailUrl = (state) => state.blog.blogThumbnailUrl;
export const selectBlogAuthor = (state) => state.blog.blogAuthor;

export default blogSlice.reducer;
