import React from 'react';
import { useParams } from 'react-router-dom';


<<<<<<< HEAD
function User() {
  const { userid } = useParams();
  return (
    <div className='text-center text-2xl p-4 bg-blue-500 text-white'>User:  {userid}</div>
=======

function User() {
  const { userid } = useParams(); // ✅ Get dynamic route param
  return (
    <div>
      <h2>User: {userid}</h2>
    </div>
>>>>>>> d75c7d6a960761162903061658e33246e84cd599
  );
}

export default User;