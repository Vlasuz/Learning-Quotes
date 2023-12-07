import { Login } from "../pages/Login/Login"
import { Main } from "../pages/Main/Main"

export const routes = () => {
    return [
        {
            path: '/Learning-Quotes',
            element: <Main/>
        },
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '*',
            element: 'not found'
        },
    ]
}