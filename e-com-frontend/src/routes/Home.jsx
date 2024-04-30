import { useState } from "react";
import HomeItem from "../components/HomeItem/HomeItem";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItemsByCategory = category
    ? items.filter((item) => item.category === category)
    : items;

  const filteredItemsBySearch = searchTerm
    ? filteredItemsByCategory.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredItemsByCategory;

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <main>
      <Header
        onCategoryClick={handleCategoryClick}
        onSearch={handleSearch}
      />
      {filteredItemsBySearch.length === 0 && <p>No items found</p>}
      <div className="items-container">
        {filteredItemsBySearch.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
