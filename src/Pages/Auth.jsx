import logo from "../Assets/Images/logo.png";

function Login({ onLogin }) {
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="mx-auto" />
          {/* <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Tracklance
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Track every gig like a pro.
          </p> */}
        </div>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-xs text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
