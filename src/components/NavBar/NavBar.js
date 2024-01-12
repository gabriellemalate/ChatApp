import "./NavBar.scss"
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
    const [setUser] = useState(false);
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const signOut = () => {
        auth.signOut();
    };

    return (
        <nav className="nav-bar">
            <h1 className="nav-bar__head">CHAT APP</h1>
            {user ? (
                <button onClick={signOut} className="nav-bar__out" type="button">
                    SIGN OUT
                </button>
            ) : (
                <button className="nav-bar__in">
                    {/* <button
                        onClick={googleSignIn}
                        alt="sign in with google"
                        type="button"
                    />SIGN IN */}
                </button>
            )}
        </nav>
    );
};

export default NavBar;
