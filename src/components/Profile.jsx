import React, { useState } from 'react';

const Profile = () => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Default profile image
  const [fullName, setFullName] = useState('John Doe'); // Example default full name
  const [bio, setBio] = useState('A passionate developer.'); // Example default bio

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update the profile image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!'); // You can replace this with actual logic
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-300">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-600"
          />
          <input type="file" onChange={handleImageUpload} className="mt-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a short bio"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
