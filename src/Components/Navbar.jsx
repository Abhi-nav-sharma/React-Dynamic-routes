import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}
