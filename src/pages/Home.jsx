import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const [burstBubble, setBurstBubble] = useState(null);
  const [message, setMessage] = useState("");

  const popBubble = (bubble, text) => {

    setBurstBubble(bubble);
    setMessage(text);

    setTimeout(() => {
      setBurstBubble(null);
      setMessage("");
    }, 1200);

  };

  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 animate-gradient text-white min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Greeting Popup */}

      {message && (
        <div className="absolute top-16 bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg text-lg font-semibold animate-bounce">
          {message}
        </div>
      )}

      {/* Floating Clickable Bubbles */}

      <button
        onClick={() => popBubble("bubble1","Happy Women's Day 🌸")}
        className={`absolute top-20 left-10 bubble ${burstBubble === "bubble1" ? "pop" : ""}`}
      >
        Happy Women's Day 🌸
      </button>

      <button
        onClick={() => popBubble("bubble2","Celebrate Strength 💜")}
        className={`absolute bottom-24 right-12 bubble ${burstBubble === "bubble2" ? "pop" : ""}`}
      >
        Celebrate Strength 💜
      </button>

      <button
        onClick={() => popBubble("bubble3","Empowered Women Empower The World ✨")}
        className={`absolute top-40 right-24 bubble ${burstBubble === "bubble3" ? "pop" : ""}`}
      >
        Empowered Women ✨
      </button>

      {/* Floating Celebration Emojis */}

      <div className="absolute left-1/4 top-1/4 text-3xl animate-bounce">🌸</div>
      <div className="absolute right-1/3 bottom-1/3 text-3xl animate-bounce delay-200">✨</div>
      <div className="absolute left-1/3 bottom-1/4 text-3xl animate-bounce delay-500">💜</div>

      {/* Main Content */}

      <h1 className="text-6xl font-bold mb-6 animate-pulse">
        A World Without Women?
      </h1>

      <p className="max-w-xl text-lg mb-10">
        Explore how women's contributions shape healthcare, science,
        education, and leadership around the world.
      </p>

      <Link
        to="/impact"
        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition mb-12"
      >
        Explore Impact
      </Link>

      {/* Impact Counters */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">

        <div className="hover:scale-110 transition">
          <h2 className="text-4xl font-bold">70%</h2>
          <p className="text-sm">Healthcare Workforce Are Women</p>
        </div>

        <div className="hover:scale-110 transition">
          <h2 className="text-4xl font-bold">Millions</h2>
          <p className="text-sm">
            Women Educators Shaping Future Generations
          </p>
        </div>

        <div className="hover:scale-110 transition">
          <h2 className="text-4xl font-bold">Thousands</h2>
          <p className="text-sm">
            Women Scientists Driving Innovation
          </p>
        </div>

      </div>

    </div>
  );
}



// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Home() {

//   const [message, setMessage] = useState("");

//   const burstMessage = (text) => {
//     setMessage(text);

//     setTimeout(() => {
//       setMessage("");
//     }, 2500);
//   };

//   return (
//     <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 animate-gradient text-white min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

//       {/* Burst Message Popup */}

//       {message && (
//         <div className="absolute top-10 bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg text-lg font-semibold animate-bounce">
//           {message}
//         </div>
//       )}

//       {/* Floating Clickable Bubbles */}

//       <button
//         onClick={() => burstMessage("Happy Women's Day 🌸")}
//         className="absolute top-20 left-10 bg-white text-purple-600 px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
//       >
//         Happy Women's Day 🌸
//       </button>

//       <button
//         onClick={() => burstMessage("Celebrate Strength 💜")}
//         className="absolute bottom-24 right-12 bg-white text-purple-600 px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
//       >
//         Celebrate Strength 💜
//       </button>

//       <button
//         onClick={() => burstMessage("Empowered Women Empower The World ✨")}
//         className="absolute top-40 right-24 bg-white text-purple-600 px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
//       >
//         Empowered Women ✨
//       </button>

//       {/* Floating Emojis */}

//       <div className="absolute left-1/4 top-1/4 text-3xl animate-bounce">🌸</div>
//       <div className="absolute right-1/3 bottom-1/3 text-3xl animate-bounce delay-200">✨</div>
//       <div className="absolute left-1/3 bottom-1/4 text-3xl animate-bounce delay-500">💜</div>

//       {/* Main Content */}

//       <h1 className="text-6xl font-bold mb-6 animate-pulse">
//         A World Without Women?
//       </h1>

//       <p className="max-w-xl text-lg mb-10">
//         Explore how women's contributions shape healthcare, science,
//         education, and leadership around the world.
//       </p>

//       <Link
//         to="/impact"
//         className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition mb-12"
//       >
//         Explore Impact
//       </Link>

//       {/* Impact Counters */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">

//         <div className="hover:scale-110 transition">
//           <h2 className="text-4xl font-bold">70%</h2>
//           <p className="text-sm">Healthcare Workforce Are Women</p>
//         </div>

//         <div className="hover:scale-110 transition">
//           <h2 className="text-4xl font-bold">Millions</h2>
//           <p className="text-sm">
//             Women Educators Shaping Future Generations
//           </p>
//         </div>

//         <div className="hover:scale-110 transition">
//           <h2 className="text-4xl font-bold">Thousands</h2>
//           <p className="text-sm">
//             Women Scientists Driving Innovation
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// }