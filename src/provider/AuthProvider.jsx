import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateUser = async (userInfo) => {
        try {
            await updateProfile(auth.currentUser, userInfo);
        } catch (err) {
            setError(err.message);
        }
    };

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            setUser(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        error
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
