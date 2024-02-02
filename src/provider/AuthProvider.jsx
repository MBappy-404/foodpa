import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from "../Firebase/Firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const googleProvider = new GoogleAuthProvider();
     const facebookProvider = new FacebookAuthProvider();



     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     };

     const signIn = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     };

     const googleSignIn = () => {
          setLoading(true)
          return signInWithPopup(auth, googleProvider);
     };
     const facebookSignIn = () => {
          setLoading(true)
          return signInWithPopup(auth, facebookProvider);
     };

     const updateUserProfile = (name) => {
          return updateProfile(auth.currentUser, {
               displayName: name,
          })
     }

     const logOut = () => {
          setLoading(true);
          return signOut(auth);
     }


     useEffect(() => {
          const unSubscribes = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               // console.log(currentUser);
               const userInfo = { email: currentUser?.email };

               if (currentUser) {
                    axios.post('https://bistro-boss-server-mbappy-404.vercel.app/jwt', userInfo)
                         .then(res => {
                              // console.log(data);
                              localStorage.setItem("access-token-foodpa", res.data.token);
                              setLoading(false);
                         })
               } else {
                    localStorage.removeItem("access-token-foodpa");
               }
          })

          return () => {
               return unSubscribes();
          }
     }, [])


     const authInfo = { user, loading, createUser, updateUserProfile, signIn, logOut, googleSignIn, facebookSignIn }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;