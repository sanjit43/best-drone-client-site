const firebaseConfig = {
    // apiKey: "AIzaSyBYpLLSNd2mJnHM7pdk7SlBOaIh3kj9jm4",
    // authDomain: "drone-lab.firebaseapp.com",
    // projectId: "drone-lab",
    // storageBucket: "drone-lab.appspot.com",
    // messagingSenderId: "1017811877472",
    // appId: "1:1017811877472:web:01e7285653a45613d80d05"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_Id,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export default firebaseConfig;