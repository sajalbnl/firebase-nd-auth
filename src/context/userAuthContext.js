import {createContext,useContext,useState,useEffect} from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import {auth}  from "../firebse-conf.js";
import {useNavigate} from "react-router-dom"



const UserAuthContext = createContext(); 

export function UserAuthContextProvider({children}){
    const [user,Setuser]=useState('')
    const Navigate= useNavigate();
    function signUp(email,password){
        createUserWithEmailAndPassword(auth,email,password)
    }
    function logOut() {
        return signOut(auth);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
      }
    function LogIn(email,password){
        signInWithEmailAndPassword(auth,email,password).then(()=>{
            Navigate('/home')
            alert("successfully logged in")
        }).catch((e)=>{
            alert(e)
        })
    }
    useEffect(()=>{
        const subscribe=onAuthStateChanged(auth,(currentUser)=>{
            Setuser(currentUser)
        });
        return ()=>{
            subscribe();
        }

    },[])

    return (
    <UserAuthContext.Provider value={{signUp,user,LogIn,logOut,googleSignIn}}>{children}</UserAuthContext.Provider>)
}

export function UseUserAuth(){
    return useContext(UserAuthContext)
}