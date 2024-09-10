import { useState } from 'react';

const SignInModal = ({ setIsSignInOpen, onSuccessfulSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state

    // Simulating authentication delay
    setTimeout(() => {
      // Demo credentials validation
      if (email === 'demo@serviceco.com' && password === 'demo123') {
        onSuccessfulSignIn(); // Call success handler (e.g., close modal, update login state)
        setIsSignInOpen(false); // Close the modal after successful sign-in
        setError(''); // Clear any previous errors
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setIsLoading(false); // Remove loading state
    }, 1000); // Simulated loading time
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={() => setIsSignInOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        
        <form onSubmit={handleSignIn}>
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

          {/* Show error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Loading indicator on submit */}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg transition ${isLoading ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
          <p><strong>Demo Credentials:</strong></p>
          <p><strong>Email:</strong> demo@serviceco.com</p>
          <p><strong>Password:</strong> demo123</p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
