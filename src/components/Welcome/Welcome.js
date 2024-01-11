import React from "react";

const Welcome = () => {
    const googleSignIn = () => {
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
