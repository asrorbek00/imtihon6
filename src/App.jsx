import React from 'react'
import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Movie from './pages/Movie'
import Search from './pages/Search'
import MovieList from './pages/MovieList'



function App() {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index: true,
          element:<MovieList/>
        },
        {
          path:"movie/:id",
          element:<Movie/>
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

      ]
    }
  ])
   return <RouterProvider router={routes}/>

  
}

export default App