import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    navigate(`/search/${search}`);
    setSearch("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-full mx-auto justify-between items-center px-5 mt-9 bg-gray-400  text-gray-800 "
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-900 outline-none bg-transparent flex-1 font-semibold"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-gray-900 font-semibold disabled"
      >
        Search
      </button>
    </form>
  );
}
