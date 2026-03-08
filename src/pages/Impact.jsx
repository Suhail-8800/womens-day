import { useState } from "react";

export default function Impact() {

  const [removed, setRemoved] = useState({
    healthcare: false,
    science: false,
    education: false
  });

  const toggle = (field) => {
    setRemoved({
      ...removed,
      [field]: !removed[field]
    });
  };

  return (

    <div className="min-h-screen p-10 bg-gray-50">

      {/* Global Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">

        <div>
          <h2 className="text-4xl font-bold text-purple-600">70%</h2>
          <p className="text-gray-600">Healthcare Workforce Are Women</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-purple-600">33%</h2>
          <p className="text-gray-600">Scientific Researchers Are Women</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-purple-600">68%</h2>
          <p className="text-gray-600">Educators Are Women</p>
        </div>

      </div>


      {/* Impact Cards */}

      <div className="grid md:grid-cols-3 gap-10 text-center items-start">


        {/* Healthcare */}

        <div className="bg-white shadow-lg p-8 rounded-xl hover:shadow-2xl hover:scale-105 transition duration-300">

          <h2 className="text-3xl font-bold mb-4">
            Healthcare 🏥
          </h2>

          <p className="text-gray-700 mb-4">
            {removed.healthcare
              ? "Hospitals face severe staff shortages without women healthcare professionals."
              : "Women represent nearly 70% of the global healthcare workforce."}
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-pink-500 h-4 rounded-full transition-all duration-500"
              style={{ width: removed.healthcare ? "30%" : "70%" }}
            ></div>
          </div>

          <p className="text-sm mb-4">
            Workforce Remaining: {removed.healthcare ? "30%" : "70%"}
          </p>

          <button
            onClick={() => toggle("healthcare")}
            className="bg-pink-500 text-white px-6 py-2 rounded hover:scale-105 transition"
          >
            {removed.healthcare ? "Restore Women" : "Remove Women"}
          </button>

        </div>


        {/* Science */}

        <div className="bg-white shadow-lg p-8 rounded-xl hover:shadow-2xl hover:scale-105 transition duration-300">

          <h2 className="text-3xl font-bold mb-4">
            Science 🔬
          </h2>

          <p className="text-gray-700 mb-4">
            {removed.science
              ? "Innovation slows dramatically due to the loss of diverse research perspectives."
              : "Women make up about 33% of the world's scientific researchers."}
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-purple-500 h-4 rounded-full transition-all duration-500"
              style={{ width: removed.science ? "10%" : "33%" }}
            ></div>
          </div>

          <p className="text-sm mb-4">
            Research Diversity: {removed.science ? "10%" : "33%"}
          </p>

          <button
            onClick={() => toggle("science")}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:scale-105 transition"
          >
            {removed.science ? "Restore Women" : "Remove Women"}
          </button>

        </div>


        {/* Education */}

        <div className="bg-white shadow-lg p-8 rounded-xl hover:shadow-2xl hover:scale-105 transition duration-300">

          <h2 className="text-3xl font-bold mb-4">
            Education 🎓
          </h2>

          <p className="text-gray-700 mb-4">
            {removed.education
              ? "Millions of students lose guidance and mentorship from experienced educators."
              : "Women represent about 68% of teachers worldwide."}
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-pink-500 h-4 rounded-full transition-all duration-500"
              style={{ width: removed.education ? "23%" : "68%" }}
            ></div>
          </div>

          <p className="text-sm mb-4">
            Active Educators: {removed.education ? "23%" : "68%"}
          </p>

          <button
            onClick={() => toggle("education")}
            className="bg-pink-500 text-white px-6 py-2 rounded hover:scale-105 transition"
          >
            {removed.education ? "Restore Women" : "Remove Women"}
          </button>

        </div>

      </div>


      {/* Did You Know Section */}

      <div className="mt-20 text-center max-w-xl mx-auto">

        <h2 className="text-3xl font-bold mb-4">
          Did You Know? 💡
        </h2>

        <p className="text-gray-600">
          Women perform nearly 76% of the world's unpaid care work,
          supporting families, communities, and economies globally.
        </p>

      </div>


      {/* Call To Action */}

      <div className="mt-16 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Support Women Empowerment 🌸
        </h2>

        <p className="text-gray-600 mb-6">
          Recognizing women's contributions helps build a more equal,
          innovative, and sustainable world.
        </p>

        <a
          href="https://www.unwomen.org/en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
        >
          Learn How You Can Help
        </a>

      </div>

    </div>

  );

}