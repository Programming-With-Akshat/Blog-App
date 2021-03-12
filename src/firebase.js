import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyB4alRRpa9ijM4hEhBgRGirLRzweYIoaIs',
	authDomain: 'blog-app-4233f.firebaseapp.com',
	projectId: 'blog-app-4233f',
	storageBucket: 'blog-app-4233f.appspot.com',
	messagingSenderId: '402802890090',
	appId: '1:402802890090:web:d5c9a61d823f7484e08113'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
