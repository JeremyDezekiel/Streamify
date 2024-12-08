import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Favorite() {
    const [favorites, setFavorites] = useState([])

    const navigate = useNavigate()

    const goToMovieDetail = (movieId) => {
        navigate(`/moviedetail/${movieId}`)
    }

    const removeFromFavorites = (movieId) => {
        const updatedFavorites = favorites.filter((movie) => movie.id !== movieId)
        setFavorites(updatedFavorites)
        sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }

    useEffect(() => {
        const storedFavorites = JSON.parse(sessionStorage.getItem("favorites")) || []
        setFavorites(storedFavorites)
    }, [])

    return (
        <div className="container mx-auto px-4 mt-6">
            <h2 className="text-center text-2xl font-bold mb-6">My Favorite</h2>
            {favorites.length === 0 && (
                <div className="text-center text-lg text-gray-500">
                    <p>No favorites yet.</p>
                </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {favorites?.map((movie) => (
                    <div key={movie.id} className="relative group">
                        <div className="card bg-gray-800 text-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img className="w-full h-64 object-cover" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} onClick={() => goToMovieDetail(movie.id)}/>
                            <div className="p-4">
                                <p className="font-semibold text-lg mb-1">{movie.title ? movie.title : movie.name}</p>
                            </div>
                            <button className="absolute top-2 right-2 text-sm text-red-500 group-hover:text-red-700 transition-all duration-300" onClick={() => removeFromFavorites(movie.id)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorite
