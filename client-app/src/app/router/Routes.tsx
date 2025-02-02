import {createBrowserRouter, Navigate, RouteObject} from 'react-router';
import App from '../layout/App.tsx';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard.tsx';
import ActivityForm from '../../features/activities/form/ActivityForm.tsx';
import ActivityDetails from '../../features/activities/details/ActivityDetails.tsx';
import TestErrors from '../../features/errors/TestError.tsx';
import NotFound from '../../features/errors/NotFound.tsx';
import ServerError from '../../features/errors/ServerError.tsx';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'activities/:id', element: <ActivityDetails/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>},
            {path: 'errors', element: <TestErrors />},
            {path: 'not-found', element: <NotFound />},
            {path: 'server-error', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found' />},
        ]
    }
];

export const router = createBrowserRouter(routes);

