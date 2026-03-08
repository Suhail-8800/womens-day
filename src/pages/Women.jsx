import marie from "../assets/images/marie_curie.png";
import kalpana from "../assets/images/kalpana.png";
import malala from "../assets/images/malala.png";
import indira from "../assets/images/Indira_nooyi.png";

export default function Women() {

  return (

    <div className="p-10 text-center bg-gray-50 min-h-screen">

      <h2 className="text-4xl font-bold mb-4">
        Women Who Changed The World 🌍
      </h2>

      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        Celebrating remarkable women who broke barriers and changed the course of history through courage, innovation, and leadership.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Marie Curie */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300">
          <img src={marie} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
          <h3 className="font-bold text-lg">Marie Curie</h3>
          <p className="text-gray-600">
            Pioneer of radioactivity research and the first woman to win a Nobel Prize.
          </p>

          <a
            href="https://www.britannica.com/biography/Marie-Curie"
            target="_blank"
            className="inline-block mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Learn More
          </a>
        </div>


        {/* Kalpana Chawla */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300">
          <img src={kalpana} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
          <h3 className="font-bold text-lg">Kalpana Chawla</h3>
          <p className="text-gray-600">
            First woman of Indian origin to travel to space and inspire millions.
          </p>

          <a
            href="https://www.britannica.com/biography/Kalpana-Chawla"
            target="_blank"
            className="inline-block mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Learn More
          </a>
        </div>


        {/* Malala */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300">
          <img src={malala} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
          <h3 className="font-bold text-lg">Malala Yousafzai</h3>
          <p className="text-gray-600">
            Nobel Peace Prize winner advocating for girls' education worldwide.
          </p>

          <a
            href="https://www.britannica.com/biography/Malala-Yousafzai"
            target="_blank"
            className="inline-block mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Learn More
          </a>
        </div>


        {/* Indra Nooyi */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300">
          <img src={indira} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
          <h3 className="font-bold text-lg">Indra Nooyi</h3>
          <p className="text-gray-600">
            Former CEO of PepsiCo and a powerful global business leader.
          </p>

          <a
            href="https://www.britannica.com/biography/Indra-Nooyi"
            target="_blank"
            className="inline-block mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Learn More
          </a>
        </div>

      </div>

    </div>

  );
}