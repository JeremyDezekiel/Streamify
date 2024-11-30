import React from "react"
import './CardNowPlaying.css'

function CardNowPlaying (props) {
    return (
        <div className="cards">
            <div className="category">
                <h2>Playing Now</h2>
                <div className="arrowCategory">
                    {/* <img src="" alt="" /> */}
                    <h3>Explore All</h3>
                </div>
            </div>
            <div className="cardsList">
                {
                    props.playing.results?.map(movie => {
                        return (
                            <div key={movie.id} className="card">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                <p>{movie.title}</p>  
                            </div>
                        )
                    })
                }
                
                {/* <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb3z_J3XGQztP0TN8korj7rJOSUzLg_TBoblj_5cVaN6MGTWpXfb2JVYzk3ssu1JpONDShhsk08mYz_iK9jFywWFucPHOlMB45DyN4uTb50ltZQHUE_RPhaSi5h0U0jP84_P.jpg?r=872" alt=""/>
                    <p>Better Call Saul</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQj09nuUngR8pSicC6c4pxayB9FC1bD9QbiLOtRsFf0VDfzh7I4GbAC3_XQjJUwh0gl_YdqpiO_0gxEQhJCB2dt5CUAXECsW70g.webp?r=bcd" alt=""/>
                    <p>Law & Order: Special Victims Unit</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSBP1r9AElP5xMCHWQRQAZzsQrhQudgiy8ItQsmy5XuUSOOIHQgMsvNyL54mal5F80HyLU2zrLELLAEd0w1RgnH2O4BQ1ykRxYKjfl_k3fvvQdAfJPOw3HhFfvyCpx8D2MD_.jpg?r=cb4" alt=""/>
                    <p>Narcos</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYhgripUAwC-whqQV1ez3TByK8golgbJ5ABqR3Bd77zzVtUB74X-UAMNBT_4eqq0jGyRCjT50qxK4O-5KX3txXH1WMJVfSq5QpA.webp?r=6e3" alt=""/>
                    <p>Animal Kingdom</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYrqoxISd-kZO090d4uGaTPstthUsgcTOJWApalWACo1LPoWwHu8TKFqYH00fGpdwn537inZWDFpBq5pA8PQ985316jiHqDbZXMBEgdzFQMYOj_ev6IE2Hi2PP6dSP8uoJK-.jpg?r=f77" alt=""/>
                    <p>The Asunta Case</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeYmxjDCM9vYlhxcf0dkW7yyvVjBXCfzMrqrVtg380lJgQTyCCWvzPgXG5avE61W3qYwEEoQ4RFvhTF-2e9N_VelDT5j8fbSqLfrYCUdyBxIFH9l-5r_WWWE9woTuqpUPrj3.jpg?r=5f5" alt=""/>
                    <p>Top Boy</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTRds9NZRP77e1hml5laFyufgxsEsboOBlVTuPUtFnNBhzWfTyiRKiCzhM2sRkTp50sXrL5XIYGa7axKSnfNz_XorHjqI2b_YisLtXLBW-ww1yF-m-34F8sxQV7J_DBPLVej.jpg?r=316" alt=""/>
                    <p>Titans</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSkRGppo2XkWhMd0cYKiUuh3JEOq1moWFgi9HSqf4YjwbjIWY74PU1Yne-mheCn4o0MdnhlB80FD1_cW0z_gXckjPuRY-gZdpAGpDKB-UjHlzrn7PzPBHuIB5KD-jAh-qk4t.jpg?r=7e4" alt=""/>
                    <p>El Camino: A Breaking Bad Movie</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWsxn2B_atEjFzC2xHnVaC8tkNulBkIh1wfQrrEBZQZI2RAMkzDx5EBzHuGZmYK2cEbm9YpxoBUbAtsOWjuMETuD20VEGQ3dZofKw4gArhD_rSKX0Izp0L0ubMaSwlA--LqY.jpg?r=b38" alt=""/>
                    <p>Narcos: Mexico</p>  
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRQNhKRLRvgQr2fV0SR3hERQfS83s2WF7EugIARQsS8JQa9egszI-f6O_8y2Z2l0gF47-hr4tc3u65OaJPGxyXoNW03qjUYcDZA0wzfiixuXz1lFZQVTAc2sYwcYO7avmqzt.jpg?r=5a4" alt=""/>
                    <p>The Last Kingdom</p>  
                </div> */}
            </div>
        </div>
    )
}

export default CardNowPlaying