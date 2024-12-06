import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Göstərilməli səhifələr
  const validPaths = ["/women/view-all", "/men/view-all", "/ViewAll"];

  if (!validPaths.includes(location.pathname)) {
    return null; // Breadcrumb yalnız müəyyən səhifələrdə göstərilir
  }

  // Dinamik breadcrumb adları
  const getBreadcrumbName = () => {
    if (location.pathname === "/women/view-all") return "View All Women";
    if (location.pathname === "/men/view-all") return "View All Men";
    if (location.pathname === "/ViewAll") return "ViewAll";
    return "";
  };

  return (
    <nav className='my-8'>
      <ul className='flex items-center space-x-2 '>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <FiChevronRight />
        <li>{getBreadcrumbName()}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
