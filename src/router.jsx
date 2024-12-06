import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Series from "./pages/Series/Series"
import Movie from "./pages/Movie/Movie"
import NewandPopular from "./pages/NewandPopular/NewandPopular"
import MainLayout from "./Layout/MainLayout"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import Trailer from "./pages/Trailer/Trailer"
import Search from "./pages/Search/Search"
import SeriesDetail from "./pages/SeriesDetail/SeriesDetail"
import TrailerSeries from "./pages/TrailerSeries/TrailerSeries"
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
                path: "series",
                element: <Series />,
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
                path: "seriesdetail/:seriesId",
                element: <SeriesDetail />,
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
        path: "trailerseries/:seriesId",
        element: <TrailerSeries />,
    },
])

export default router
