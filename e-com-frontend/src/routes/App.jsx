import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer/Footer";
import FetchItems from "../components/FetchItems/FetchItems";
import { useSelector } from "react-redux";

import LoadingSpinner from "./../components/Loader/LoadingSpinner";


function App() {
  
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
     
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
