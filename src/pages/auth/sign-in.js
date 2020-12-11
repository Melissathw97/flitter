import React, { useState } from 'react';
import { useAuth } from '../../utils/Firebase/auth';

const SignIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { userSignIn } = useAuth();

  return (
    <div>
      <input
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={() => {
          userSignIn(username, password);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default SignIn;