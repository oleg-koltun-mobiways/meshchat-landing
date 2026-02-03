import { createRootRoute, Outlet, redirect } from '@tanstack/react-router';
import Header from '../components/Header/Header';
import { isAuthenticated } from '../utils/auth';

export const Route = createRootRoute({
    component: RootComponent,
    beforeLoad: ({ location }) => {
        // Allow access to login page without authentication
        if (location.pathname === '/login') {
            return;
        }

        // Redirect to login if not authenticated
        if (!isAuthenticated()) {
            throw redirect({ to: '/login' });
        }
    },
});

function RootComponent() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
