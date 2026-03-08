import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-purple-600 text-white sticky top-0 z-50 shadow-md">

      <h1 className="text-xl font-bold">
        Women's Day
      </h1>

      <div className="space-x-6">

        <Link to="/">Home</Link>

        <Link to="/impact">Impact</Link>

        <Link to="/women">Women Leaders</Link>

        <Link to="/inspiration">Inspiration</Link>

        <Link to="/wall">Appreciation Wall</Link>

      </div>

    </nav>
  );
}
