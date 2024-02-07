// AuthenticationPage.js
import React, { useState } from "react";
import { auth } from './firebaseConfig';

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Sign up successful
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignIn = async () => { // Corrected function name to handleSignIn
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Sign in successful
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Sign out successful
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default AuthenticationPage;
