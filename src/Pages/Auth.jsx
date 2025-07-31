
function Login({  }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   if (email === "admin@hrlite.com" && password === "password123") {
  //     onLogin();
  //   } else {
  //     alert("Invalid email or password");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center font-sans">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">Tracklance</h2>
          <p className="text-sm italic text-white">
            Track Every Gig Like a Pro.
          </p>
        </div>

        <form className="space-y-6">
          {/* onSubmit={handleSubmit}> */}
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
