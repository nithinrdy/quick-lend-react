import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({ token }) {
	console.log(token);
	return token ? <Outlet /> : <Navigate to="/login" />;
}
