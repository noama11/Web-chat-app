import { useState } from 'react'
import { auth } from '../firebase/Config'
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
const NavBar = () => {

    const [user] = useAuthState(auth);

    const signIn = async () => {

        const provider = new GoogleAuthProvider(); // Will save the user auth after the authentication on const auth
        await signInWithRedirect(auth, provider); // Will open the Google authentication page
    }

    const signOut = () => {
        auth.signOut(); // Cleaning the data and the "auth" var (make it null)
    }

    return (
        <nav className="flex items-center  bg-black p-2 ">
            <div className="flex ml-auto gap-4 text-white font-semibold text-2xl">
                <button className="" onClick={signIn}> Sign in</button>
                <button className="" onClick={signOut}> Sign out</button>
            </div>
        </nav>
    )
}

export default NavBar;