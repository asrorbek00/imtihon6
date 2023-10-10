import React from 'react'
import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Movie from './pages/Movie'
import Search from './pages/Search'
import MovieList from './pages/MovieList'
import TrendingList from './pages/TrendingList'
import Trending from './pages/Trending'


function App() {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index: true,
          element:<TrendingList/>
        },
        {
          path:"movies",
          element:<MovieList/>
        },
        {
          path:"trend/:id",
          element:<Trending/>
        },
        {
          path:"movies/search",
          element:<Search/>
        },
        {
          path:"search",
          element:<Search/>
        },
       {
        path:"search/s/:id",
        element:<Movie/>
       },
      {
        path:"movies/search/s/:id",
        element:<Movie/>
      },
      {
        path:"tvlist/search/s/:id",
        element:<Movie/>
      },
       {
        path:"movies/movie/:id",
        element:<Movie/>
      },

      ]
    }
  ])
   return <RouterProvider router={routes}/>

  
}

export default App