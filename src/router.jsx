import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import TvShows from "./pages/TvShows/TvShows"
import Movie from "./pages/Movie/Movie"
import NewandPopular from "./pages/NewandPopular/NewandPopular"
import MainLayout from "./Layout/MainLayout"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import Trailer from "./pages/Trailer/Trailer"
import Search from "./pages/Search/Search"
import TvShowsDetail from "./pages/TvShowsDetail/TvShowsDetail"
import TrailerTvShows from "./pages/TrailerTvShows/TrailerTvShows"
import Favorite from "./pages/Favorite/Favorite"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "tvshows",
                element: <TvShows />,
            },
            {
                path: "movie",
                element: <Movie />,
            },
            {
                path: "search",
                element: <Search />,
            },
            {
                path: "newandpopular",
                element: <NewandPopular />,
            },
            {
                path: "moviedetail/:movieId",
                element: <MovieDetail />,
            },
            {
                path: "tvshowsdetail/:seriesId",
                element: <TvShowsDetail />,
            },
            {
                path: "favorite",
                element: <Favorite />,
            },
        ]
    },
    {
        path: "/trailer/:idMovie",
        element: <Trailer />,
    },
    {
        path: "trailertvshows/:seriesId",
        element: <TrailerTvShows />,
    },
])

export default router
