import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Law App</h1>
      <p className="text-lg mb-6">Find legal information tailored to your needs.</p>
      <Link to="/laws" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Explore Laws
      </Link>
    </div>
  );
};

export default HomePage;
