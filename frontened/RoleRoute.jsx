export default function RoleRoute({ children, role }) {
  const userRole = localStorage.getItem("role");
  return userRole === role ? children : <h1>Unauthorized</h1>;
}
