import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEdit } from 'react-icons/fa';

const Profile = () => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Default profile image
  const [fullName, setFullName] = useState('Om Singh'); // Example default full name
  const [bio, setBio] = useState('A passionate developer.'); // Example default bio
  const [email, setEmail] = useState('om singh@example.com'); // Default email
  const [location, setLocation] = useState('Jalandhar, Punjab'); // Default location
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    linkedin: '',
    github: ''
  });
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(true); // Editing mode state

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
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000); // Remove the success message after 3 seconds
    setIsEditing(false); // Switch to view mode after saving the profile
  };

  const renderSocialLinks = () => (
    <div className="flex space-x-4 mt-4 justify-center md:justify-start">
      {socialLinks.facebook && (
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-blue-600 hover:scale-110 transform transition" />
        </a>
      )}
      {socialLinks.twitter && (
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 hover:scale-110 transform transition" />
        </a>
      )}
      {socialLinks.linkedin && (
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-blue-700 hover:scale-110 transform transition" />
        </a>
      )}
      {socialLinks.github && (
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-800 hover:scale-110 transform transition" />
        </a>
      )}
    </div>
  );

  if (!isEditing) {
    return (
      <div className="p-8 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg relative transform transition-all duration-500">
        <button
          className="absolute top-4 right-4 text-blue-500 dark:text-blue-300 text-xl hover:scale-110 transition"
          onClick={() => setIsEditing(true)}
        >
          <FaEdit /> {/* Edit button to switch back to edit mode */}
        </button>

        <div className="text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-600 hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-300">{fullName}</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">{bio}</p>
          <p className="text-gray-500 dark:text-gray-400">{location}</p>
          <p className="text-gray-500 dark:text-gray-400">{email}</p>
          {renderSocialLinks()}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg transform transition-all hover:scale-105 duration-500">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-300">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-600 hover:scale-110 transition-transform duration-300"
          />
          <label className="cursor-pointer">
            <input
              type="file"
              onChange={handleImageUpload}
              className="hidden"
            />
            <span className="text-blue-500 dark:text-blue-300 underline hover:text-blue-700 cursor-pointer">
              Change Profile Picture
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your location"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Facebook</label>
            <div className="relative">
              <FaFacebookF className="absolute top-3 left-3 text-blue-600" />
              <input
                type="text"
                value={socialLinks.facebook}
                onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Facebook URL"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Twitter</label>
            <div className="relative">
              <FaTwitter className="absolute top-3 left-3 text-blue-400" />
              <input
                type="text"
                value={socialLinks.twitter}
                onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Twitter URL"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">LinkedIn</label>
            <div className="relative">
              <FaLinkedinIn className="absolute top-3 left-3 text-blue-700" />
              <input
                type="text"
                value={socialLinks.linkedin}
                onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="LinkedIn URL"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">GitHub</label>
            <div className="relative">
              <FaGithub className="absolute top-3 left-3 text-gray-800" />
              <input
                type="text"
                value={socialLinks.github}
                onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })}
                className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="GitHub URL"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Save Profile
        </button>
        {message && (
          <p className="text-center text-green-600 mt-4 font-semibold">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Profile;
