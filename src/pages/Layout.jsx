import { Outlet, Link } from "react-router-dom";
import '../pages/essai.scss';

const Layout = () => {
  return (
    <>
      <nav>
        <ul class="nav-list" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li> <Link to="/carousel">carousel</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
