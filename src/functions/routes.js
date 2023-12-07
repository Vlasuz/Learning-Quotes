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
            element: 'login'
        },
        {
            path: '*',
            element: 'not found'
        },
    ]
}