import React from "react"
import './CardPopular.css'

function CardPopular(props) {
    return (
        <div className="cards">
            <div className="category">
                <h2>Popular</h2>
                <div className="arrowCategory">
                    {/* <img src="" alt="" /> */}
                    <h3>Explore All</h3>
                </div>
            </div>
            <div className="cardsList">
                {
                    props.popular.results?.map(movie => {
                        return (
                            <div key={movie.id} className="card">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                <p>{movie.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardPopular