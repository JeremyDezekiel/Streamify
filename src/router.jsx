import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Series from "./pages/Series/Series"
import Movie from "./pages/Movie/Movie"
import NewandPopular from "./pages/NewandPopular/NewandPopular"
import MainLayout from "./Layout/MainLayout"
import MovieDetail from "./pages/MovieDetail/MovieDetail"

const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "series",
                element: <Series/>
            },
            {
                path: "movie",
                element: <Movie/>
            },
            {
                path: "newandpopular",
                element: <NewandPopular/>
            },
            {   
                path: "moviedetail/:movieId",
                element: <MovieDetail/>
            }   

        ]
    }
])

export default router