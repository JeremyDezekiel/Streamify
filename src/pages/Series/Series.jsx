import React from 'react'
// import './Series.css'
import playIcon from '../../assets/playIcon.png'
import infoIcon from '../../assets/infoIcon.png'
import replayIcon from '../../assets/replayIcon.png'
import CardsSeries from '../../components/CardsSeries/CardsSeries'

function Series() {
    return (
        <div>
            <div className="relative">
                <img className="min-w-full" src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcVZ02T8gjK92w0DHMEBRgWj1qzGoqVtI5Vj12Gv8kvjzYaSRHcZMmb-0YtzqQX2CT1bFdgsZllfC2gIawm5ovzKwUgjiFpPXwGW.webp?r=1af" alt="" />
                <div className="absolute w-full px-14 bottom-0">
                    <h1 className="text-8xl mb-5">Title Movie</h1>
                    <p className="text-2xl mb-5">desc Movie</p>
                    <button className="bg-gray-600 rounded py-2 px-9 font-bold">Go to Movie</button>
                    <CardsSeries/>
                </div>
            </div>
            <div className="mx-14">
                <CardsSeries title={'Now Playing'} category={"now_playing"} />
                <CardsSeries title={'Upcoming'} category={"upcoming"} />
                <CardsSeries stitle={'Top Rated'} category={"top_rated"} />
            </div>
        </div>
    )
}

export default Series
