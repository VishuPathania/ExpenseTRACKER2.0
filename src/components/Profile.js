import React, { useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    photoUrl: '',
  });

  const handleProfileUpdate = () => {
    // Replace 'YOUR_UPDATE_PROFILE_API_ENDPOINT' with the actual API endpoint for updating the profile
    fetch('`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHIT4vrvkOkxBfGE-7je5urZRzeBVN-7k`', {
      method: 'POST',
      body: JSON.stringify(profileData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse response JSON
        } else {
          throw new Error('Profile update failed');
        }
      })
      .then((data) => {
        console.log(data);
        alert('Profile updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Error updating profile');
      });
  };
  

  return (
    <div>
      <h1>Welcome to Expense Tracker, you are logged in !!!</h1>
      <h2>Update Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={profileData.name}
          onChange={(e) =>
            setProfileData({ ...profileData, name: e.target.value })
          }
        />
      </div>
      <div>
        <label>Photo Profile URL:</label>
        <input
          type="text"
          value={profileData.photoUrl}
          onChange={(e) =>
            setProfileData({ ...profileData, photoUrl: e.target.value })
          }
        />
      </div>
      <button onClick={handleProfileUpdate}>Update</button>
    </div>
  );
};

export default Profile;
