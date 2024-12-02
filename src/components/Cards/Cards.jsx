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
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>House Of The Dragon</p>
                    <span>Apr 17, 2011</span>
                </div>
                <div className="card">
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>House Of The Dragon</p>
                    <span>Apr 17, 2011</span>
                </div>
                <div className="card">
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>House Of The Dragon</p>
                    <span>Apr 17, 2011</span>
                </div>
                <div className="card">
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>House Of The Dragon</p>
                    <span>Apr 17, 2011</span>
                </div>
                <div className="card">
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>House Of The Dragon</p>
                    <span>Apr 17, 2011</span>
                </div>
                <div className="card">
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>House Of The Dragon</p>
                    <span>Apr 17, 2011</span>
                </div>
                <div className="card">
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>House Of The Dragon</p>
                    <span>Apr 17, 2011</span>
                </div>
            </div>
        </div>
    )
}

export default Cards