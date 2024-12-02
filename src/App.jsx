import React, { useEffect, useState } from "react"
import Home from './pages/Home/Home'
import tmbd from './utils/axios'

function App() {
  // const [isLoading, setIsLoading] = useState(true)
  // const [nowPlaying, setNowPlaying] = useState([])
  // const [popular, setPopular] = useState([])
  // const [topRated, setTopRated] = useState([])
  // const [upcoming, setUpcoming] = useState(true)
  // const [error, setError] = useState(null)

  // const fetchNowPlaying = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { data } = await tmbd.get('/movie/now_playing')
  //     setNowPlaying(data)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const fetchPopular = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { data } = await tmbd.get('/movie/popular')
  //     setPopular(data)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const fetchTopRated = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { data } = await tmbd.get('/movie/top_rated')
  //     setTopRated(data)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const fetchUpcoming = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { data } = await tmbd.get('/movie/upcoming')
  //     setUpcoming(data)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchNowPlaying()
  //   fetchPopular()
  //   fetchTopRated()
  //   fetchUpcoming()
  // }, [])

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
