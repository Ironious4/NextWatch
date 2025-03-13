import React from "react";

function MovieCard({ movie, onClick, isInCollection }) {
    return (
<div className="bg-white rounded-lg shadow-md p-4">

<button onClick={onClick} className="bg-blue-500 text-white rounded px-4 py-2 mb-2">

            {isInCollection ? "Remove from Collection" : "Add to Collection"}
        </button>
        
<h3 className="text-lg font-semibold">{movie.title}</h3>

<p className="text-sm text-gray-600">Runtime: {movie.runtime} mins</p>

<p className="text-sm text-gray-600">Capacity: {movie.capacity}</p>

<p className="text-sm text-gray-600">Showtime: {movie.showtime}</p>

<p className="text-sm text-gray-600">Tickets sold: {movie.tickets_sold}</p>

<p className="text-sm text-gray-600">Description: {movie.description}</p>

<img src={movie.poster} alt={movie.title} className="mt-2 rounded" />



        </div>
    );
}

export default MovieCard;
