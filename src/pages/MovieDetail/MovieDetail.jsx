import React from 'react'
import './MovieDetail.css'
import tmdb from '../../utils/axios'
import { useParams } from 'react-router-dom'
import ratingIcon from '../../assets/ratingIcon.png'
import iconPlayWhite from '../../assets/iconPlayWhite.png'
import favoriteIcon from '../../assets/favoriteIcon.png'

function MovieDetail() {
    // const [isLoading, setIsLoading] = useState(true)
    // const [detail, setdetail] = useState([])
    // const [error, setError] = useState(null)

    const params = useParams()

    // const fetchDetail = async () => {
    //     try {
    //         setIsLoading(true)
    //         const { data } = await tmdb.get(`/movie/${movieId}/credits`)
    //         setdetail(data)
    //     } catch (error) {
    //         console.error(error)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchDetail()
    // }, [])
    return (
        <>
        <div className='heroMovieDetail'>
            <div className='poster'>
                <img src='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/m0SbwFNCa9epW1X60deLqTHiP7x.jpg' alt=''/>
            </div>
            <div className='contentDetail'>
                <div className='titleDetail'>
                    <h2>Moana 2</h2>
                    <div className='facts'>
                        <span className='certification'>SU</span>
                        <span className='release'>11/27/2024</span>
                        <span className='factsDot'>•</span>
                        <span className='genre'>
                            <span>Animasi</span>
                            ,&nbsp;
                            <span> Adventure</span>
                            ,&nbsp;
                            <span> Family</span>
                            ,&nbsp;
                            <span> Comedy</span>
                        </span>
                        <span className='factsDot'>•</span>
                        <span className='runtime'>1h 40m</span>
                    </div>
                </div>
                <div>
                    <ul className='action'>
                        <li className='rating'>
                            <img src={ratingIcon} alt=''/>
                            <span>7.0</span>
                        </li>
                        <li className='favorite'>
                            <a>
                                <img src={favoriteIcon} alt=''/>
                            </a>
                        </li>
                        <li className='trailer'>
                            <img src={iconPlayWhite} alt=''/>
                            <span>Play Trailer</span>
                        </li>
                    </ul>
                </div>
                <div className='movieInfo'>
                    <h3 className='tagline'>The ocean is calling them back.</h3>
                    <h3>OverView</h3>
                    <p>After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.</p>
                    <ul className='creditProfile'>
                        <li className='proflie'>
                        <p>Dana Ledoux Miller</p>
                        <p className='jobs'>Director, Writer</p>
                        </li>
                        <li className='proflie'>
                        <p>Ron Clements</p>
                        <p className='jobs'>Characters</p>
                        </li>
                        <li className='proflie'>
                        <p>John Musker</p>
                        <p className='jobs'>Characters</p>
                        </li>
                        <li className='proflie'>
                        <p>David G. Derrick Jr.</p>
                        <p className='jobs'>Director</p>
                        </li>
                        <li className='proflie'>
                        <p>Jason Hand</p>
                        <p className='jobs'>Director</p>
                        </li>
                        <li className='proflie'>
                        <p>Jared Bush</p>
                        <p className='jobs'>Writer</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="cardsActor">
            <div className="cardsListActor">
                <div className="card">
                    <img src="https://media.themoviedb.org/t/p/w138_and_h175_face/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg" alt=""/>
                    <p>Auli'i Cravalho</p>
                    <span>Moana (voice)</span>
                </div>
                <div className="card">
                    <img src="https://media.themoviedb.org/t/p/w138_and_h175_face/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg" alt=""/>
                    <p>Auli'i Cravalho</p>
                    <span>Moana (voice)</span>
                </div>
                <div className="card">
                    <img src="https://media.themoviedb.org/t/p/w138_and_h175_face/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg" alt=""/>
                    <p>Auli'i Cravalho</p>
                    <span>Moana (voice)</span>
                </div>
                <div className="card">
                    <img src="https://media.themoviedb.org/t/p/w138_and_h175_face/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg" alt=""/>
                    <p>Auli'i Cravalho</p>
                    <span>Moana (voice)</span>
                </div>
                <div className="card">
                    <img src="https://media.themoviedb.org/t/p/w138_and_h175_face/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg" alt=""/>
                    <p>Auli'i Cravalho</p>
                    <span>Moana (voice)</span>
                </div>
                <div className="card">
                    <img src="https://media.themoviedb.org/t/p/w138_and_h175_face/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg" alt=""/>
                    <p>Auli'i Cravalho</p>
                    <span>Moana (voice)</span>
                </div>
                <div className="card">
                    <img src="https://media.themoviedb.org/t/p/w138_and_h175_face/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg" alt=""/>
                    <p>Auli'i Cravalho</p>
                    <span>Moana (voice)</span>
                </div>
            </div>
        </div>
        <div>MovieDetail: {params.movieId}</div>
        </>
    )
}

export default MovieDetail