import { Login } from "../pages/Login/Login"
import { Main } from "../pages/Main/Main"
import { RestorePassword } from "../pages/RestorePassword/RestorePassword"

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
            path: '/restore-password',
            element: <RestorePassword/>
        },
        {
            path: '*',
            element: 'not found'
        },
    ]
}