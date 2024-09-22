import React, { useEffect, useState } from 'react';
import { auth } from '../services/firebase-config';
import { getUserData, updateUserData } from '../services/userService';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(auth.currentUser.uid);
      setUser(userData);
    };
    fetchData();
  }, []);

  const handleUpdate = async (data) => {
    await updateUserData(auth.currentUser.uid, data);
    alert('Profile updated successfully!');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile p-5">
      <h1 className="text-2xl font-bold mb-3">Your Profile</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate({ name: e.target.name.value });
      }}>
        <input
          type="text"
          defaultValue={user.name}
          name="name"
          className="border p-2 rounded w-full mb-3"
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
