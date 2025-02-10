import React, { useState } from "react";
import lawsData from "../data/lawsData";

const LawsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-6">Legal Categories</h1>

      {/* Main Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lawsData.map((law) => (
          <div
            key={law.id}
            onClick={() => setSelectedCategory(law)}
            className="cursor-pointer p-4 border rounded-lg bg-white shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{law.name}</h2>
          </div>
        ))}
      </div>

      {/* Subcategories */}
      {selectedCategory && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-2xl font-bold">{selectedCategory.name}</h2>
          <ul className="mt-3">
            {selectedCategory.subcategories.map((sub) => (
              <li key={sub.id} className="mt-2">
                {sub.pdf ? (
                  <a href={sub.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {sub.name} (View PDF)
                  </a>
                ) : (
                  <span className="text-gray-800">{sub.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LawsPage;
