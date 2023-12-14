import { Login } from "../pages/Login/Login"
import { Main } from "../pages/Main/Main"
import { NewPassword } from "../pages/NewPassword/NewPassword"
import { RestoreCode } from "../pages/RestoreCode/RestoreCode"
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
            path: '/restore-password-code',
            element: <RestoreCode/>
        },
        {
            path: '/new-password',
            element: <NewPassword/>
        },
        {
            path: '/sign-up',
            // element: 
        },
        {
            path: '*',
            element: 'not found'
        },
    ]
}