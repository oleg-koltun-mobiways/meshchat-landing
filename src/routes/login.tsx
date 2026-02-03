import { createFileRoute, redirect } from '@tanstack/react-router';
import Login from '../components/Login';
import { isAuthenticated } from '../utils/auth';

export const Route = createFileRoute('/login')({
    component: LoginComponent,
    beforeLoad: () => {
        // If already authenticated, redirect to home
        if (isAuthenticated()) {
            throw redirect({ to: '/' });
        }
    },
});

function LoginComponent() {
    return <Login />;
}
