import React, { useState, useEffect } from 'react';
import { auth, firestore } from './Firebase';

const Profile = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        console.log('User is authenticated:', user);

        // fetchingg user data from Firestore if authenticated
        const userId = user.uid;
        const userRef = firestore.collection('users').doc(userId);

        userRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              setName(userData.name || '');
              setPhotoURL(userData.photoURL || '');
            }
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
      } else {
        setIsAuthenticated(false);
        console.log('User is not authenticated');
      }
    }, [auth]);

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      console.error('User not authenticated');
      return;
    }

    try {
      // Updating the userss profile information in Firebase Authentication
      await auth.currentUser.updateProfile({
        displayName: name,
        photoURL: photoURL,
      });

      // Update the user's profile data in Firestore (if needed)
      const userId = auth.currentUser.uid;
      const userRef = firestore.collection('users').doc(userId);

      await userRef.set({
        name: name,
        photoURL: photoURL,
      });

      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="photoURL">Photo URL:</label>
          <input
            type="text"
            id="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
