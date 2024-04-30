/* eslint-disable react/prop-types */
import IMG1 from './../../assets/logo.png';
import { IoPerson } from "react-icons/io5";
import { BsBox2HeartFill } from "react-icons/bs";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { MdOutlineManageSearch } from "react-icons/md";

const Header = ({ onCategoryClick, onSearch }) => {
  const bag = useSelector((store) => store.bag);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className="logo_container">
        <Link to='/'><img className="ecom_home" src={IMG1} alt="UgCaked Home"/></Link>
      </div>
      <nav className="nav_bar">
        <a href="#" onClick={() => onCategoryClick("Electronics")}>Electronics</a>
        <a href="#" onClick={() => onCategoryClick("Groceries")}>Groceries</a>
        <a href="#" onClick={() => onCategoryClick("Furniture")}>Furniture</a>
        <a href="#" onClick={() => onCategoryClick("Kitchenware")}>Kitchenware</a>
        <a href="#" onClick={() => onCategoryClick("Fitness")}>Fitness</a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon"><MdOutlineManageSearch />
</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
          onChange={handleInputChange}
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPerson />
          <span className="action_name">Profile</span>
        </div>
        <div className="action_container">
          <BsBox2HeartFill />
          <span className="action_name">Wishlist</span>
        </div>
        <Link className="action_container" to="/bag">
          <IoBagHandleSharp />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
