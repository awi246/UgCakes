import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 150;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let finalPayment

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
  });
if(totalMRP!=0){
   finalPayment = totalMRP + CONVENIENCE_FEES;
}else{
  finalPayment=0;
}
  

  return (
 
      <div className="bag-summary">
        
     <div className="bag-details-container">
    <div className="price-header"> PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">रु{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">{totalMRP!=0? `रु150`: `रु0`}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">रु{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}

export default BagSummary