/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "./../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({item}) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="company-name">{item.name}</div>
      <div className="item-name">{item.description}</div>
      <div className="price">
          <span className="current-price discount">Rs {item.price}</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
    </>
  )
}

export default HomeItem