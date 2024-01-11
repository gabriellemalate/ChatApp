import React from "react";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "./Welcome.scss"

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return (
        <main className="welcome">
            <h1>Welcome to Chat App!</h1>
                <button
                    className="sign-in"
                    onClick={googleSignIn}
                    alt="Sign In!"
                    type="button"
                >SIGN IN
                </button>
        </main>
    );
};

export default Welcome;
