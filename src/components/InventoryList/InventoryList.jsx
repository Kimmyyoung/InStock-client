import "./InventoryList.scss"

import delete_icon from '../../assets/icons/delete_outline-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';

const InventoryList = ({ item }) => {
  const { item_name, category, status, quantity } = item;

  return (
    <div className="inventory-row">
      <div className="inventory-row__item">{item_name}</div>
      <div className="inventory-row__item">{category}</div>
      <div className="inventory-row__item">{status}</div>
      <div className="inventory-row__item">{quantity}</div>
      <div className="inventory-row__item">
        {/* Warehouse Info */}
      </div>
      <div className="inventory-row__item">
        <img src={delete_icon} alt="delete icon" />
        <img src={edit} alt="edit icon" />
      </div>
    </div>
  );
};

export default InventoryList;
