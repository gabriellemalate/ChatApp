import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const Welcome = () => {
    const googleSignIn = () => {
    };

    return (
        <main className="welcome">
            <h1>Welcome to Chat App!</h1>
            <button className="sign-in">
                <button
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="Sign In!"
                    type="button"
                />
            </button>
        </main>
    );
};

export default Welcome;
