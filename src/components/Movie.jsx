import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

function Movie() {
    const [movies, setMovies] = useState([]);
    const [collection, setCollection] = useState([]);
    const [oneCategory, setOneCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://nextwatch-db.vercel.app/films")
            .then((res) => res.json())
            .then((movies) => setMovies(movies));
    }, []);

    const toggleMovie = (movie) => {
        setCollection((prevCollection) =>
            prevCollection.some((m) => m.id === movie.id)
                ? prevCollection.filter((m) => m.id !== movie.id)
                : [...prevCollection, movie]
        );
    };

    const handleCategoryChange = (selectedCategory) => {
        setOneCategory(selectedCategory);
    };

    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const uniqueCategories = [
        "All",
        ...new Set(movies.map((movie) => movie.category || "Uncategorized")),
    ];

    const moviesToDisplay = movies.filter((movie) => {
        const matchesCategory =
            oneCategory === "All" || movie.category === oneCategory;
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
    <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Movies</h1>


            {/* Search and Category Filters */}
            <div className="flex justify-between mb-4">

                <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                <CategoryFilter
                    categories={uniqueCategories}
                    selectedCategory={oneCategory}
                    onCategoryChange={handleCategoryChange}
                />
            </div>

            {/* Movie List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {moviesToDisplay.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onClick={() => toggleMovie(movie)}
                        isInCollection={collection.some((m) => m.id === movie.id)}
                    />
                ))}
            </div>

            {/* User's Collection */}
            <div className="mt-8">

                <h2 className="text-2xl font-semibold mb-2">Your Collection</h2>

                <ul>
                    {collection.map((movie) => (
                        <li key={movie.id}>
                            {movie.title}{" "}
                            <button onClick={() => toggleMovie(movie)} className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600">Remove</button>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Movie;
