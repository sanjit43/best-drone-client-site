import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializtion from "../Firebase/firebase.init";


firebaseInitializtion()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const handleRegisterUser = (email, password, name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');

                const newUser = { email: email, displayName: name }
                setUser(newUser);

                //Save user to databas
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const login = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //Google sign in setup
    const hanldeGoogleSignIn = (location, history) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                const destination = location?.state?.from || '/';
                history.replace(destination);
                saveUser(user.email, user.displayName, 'PUT')
                setError('')
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //Observed by on auth state changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unSubscribe;

    }, [auth])

    useEffect(() => {
        fetch(`https://enigmatic-headland-73975.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://enigmatic-headland-73975.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Registration Successfully');
                }
            })
    }

    return {
        user,
        loading,
        error,
        admin,
        handleRegisterUser,
        login,
        hanldeGoogleSignIn,
        logOut

    }
}
export default useFirebase;