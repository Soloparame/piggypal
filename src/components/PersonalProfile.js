import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PersonalProfile() {
  const navigate = useNavigate(); // For navigation
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    department: "",
    year: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle Signup
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...userData,
            budget: 0,
            expenses: [],
            savingsGoals: [],
            billReminders: [],
          }),
        });

        if (response.ok) {
          alert("Registration successful! Please log in.");
          setIsSignup(false); // Switch to login mode
          setUserData({
            name: "",
            email: "",
            password: "",
            age: "",
            gender: "",
            department: "",
            year: "",
          });
        } else {
          alert("Registration failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during registration.");
      }
    } else {
      // Handle Login
      try {
        const response = await fetch(
          `http://localhost:3001/users?email=${userData.email}&password=${userData.password}`
        );
        const users = await response.json();

        if (users.length > 0) {
          alert("Login successful!");
          localStorage.setItem("user", JSON.stringify(users[0]));
          navigate("/"); // Redirect to Home or Dashboard
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during login.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {isSignup && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Year of Study</label>
                <input
                  type="text"
                  name="year"
                  value={userData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Department</label>
                <input
                  type="text"
                  name="department"
                  value={userData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              {isSignup ? "Log in here" : "Sign up here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
