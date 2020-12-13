import React from 'react'
import { useAuth } from '../../utils/Firebase/auth';

const SignOut = () => {

  const { userSignOut } = useAuth();
  return (
    <div>
      <button onClick={userSignOut}>
        SIGN OUT
      </button>
    </div>
  )
}

export default SignOut;
