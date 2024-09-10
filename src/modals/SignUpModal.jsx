// SignUpModal.js (New Signup modal)
import { useState } from 'react';

const SignUpModal = ({ setIsSignUpOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state

    // Simple password validation (you can replace this with actual logic)
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    // Simulate sign-up process
    setTimeout(() => {
      // You can replace this with actual sign-up logic
      alert(`Account created for ${email}`);
      setIsSignUpOpen(false); // Close the modal after successful sign-up
      setIsLoading(false);
      setError('');
    }, 1000); // Simulated sign-up time
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={() => setIsSignUpOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
              required
            />
          </div>

          {/* Show error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Loading indicator on submit */}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg transition ${isLoading ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
