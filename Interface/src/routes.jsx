import {createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import ListUsers from "./pages/ListUsers"

const router = createBrowserRouter([

{
    path: '/', /* a rais do projeto*/
    element: <Home/>

},

{
    path: '/lista-de-usuarios',
    element: < ListUsers/>
}

])

export default router