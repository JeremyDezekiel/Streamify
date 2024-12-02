import React from "react"
import './Cards.css'
import ratingIcon from '../../assets/ratingIcon.png'
import playIcon from '../../assets/playIcon.png'

function Cards ({title, category}) {
    return (
        <div className="cards">
            <h2>{title?title:"Popular"}</h2>
            <div className="cardsList">
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>
                </div>
                <div className="card">
                    <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" alt=""/>
                    <p>Breaking Bad</p>
                </div>
            </div>
        </div>
    )
}

export default Cards