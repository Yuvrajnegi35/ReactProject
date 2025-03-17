import React from 'react';
import { useParams } from 'react-router-dom';



function User() {
  const { userid } = useParams(); // ✅ Get dynamic route param
  return (
    <div>
      <h2>User: {userid}</h2>
    </div>
  );
}

export default User;