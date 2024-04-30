/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { bagActions } from "./../../store/bagSlice";
const BagItem = ({item}) => {

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
<div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={item.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">{item.name}</div>
      <div className="item-name">{item.description}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.price}</span>
      </div>
     
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">   05 May 2024</span>
      </div>
    </div>

    <div className="remove-from-cart" onClick={handleRemoveItem}>
        <RiDeleteBin5Fill />
      </div>  </div>
  )
}

export default BagItem