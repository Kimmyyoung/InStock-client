import "./InventoryList.scss";
import delete_icon from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

const InventoryList = ({ item }) => {
  const { item_name, category, status, quantity } = item;

  return (
    <div>
      <div className="inventory__list">
        <div id="item_name" className="inventory__item inventory__item-icon">
          {item_name}
        </div>
        <div id="category" className="inventory__item">
          {category}
        </div>
        <div id="status" className="inventory__item">
          {status}
        </div>
        <div id="qty" className="inventory__item">
          {quantity}
        </div>
        <div id="warehouse_name" className="inventory__item">
          <div>Warehouse Name</div>
        </div>
        <div className="inventory__item">
          <img className="delete_icon" src={delete_icon} alt="delete icon" />
          <img className="edit_icon" src={edit} alt="edit icon" />
        </div>
      </div>

      <div className="inventory__list-mobile">
        <div className="inventory__row1-mobile">
          <div className="inventory__block1">
            <div className="inventory__title-mobile">Inventory Item</div>
            <div id="item_name" className="inventory__item-mobile">
              {item_name}
            </div>
          </div>
          <div className="inventory__block2">
            <div className="inventory__title-mobile">Status</div>
            <div id="status_mobile" className="inventory__item-mobile">
              {status}
            </div>
          </div>
        </div>
        <div className="inventory__row2-mobile">
          <div className="inventory__block3">
            <div className="inventory__title-mobile">Category</div>
            <div id="category_mobile" className="inventory__item-mobile">
              {category}
            </div>
          </div>
          <div className="inventory__block4">
            <div className="inventory__title-mobile">Qty</div>
            <div id="qty_mobile" className="inventory__item-mobile">
              {quantity}
            </div>
          </div>
        </div>

        <div className="inventory__row3-mobile">
          <div className="inventory__block5">
            <div className="inventory__title-mobile">Warehouse</div>
            <div id="warehouse_name_mobile" className="inventory__item-mobile">
              <div>Warehouse Name</div>
            </div>
          </div>
        </div>

        <div className="inventory__row4-mobile">
          <img className="delete_icon" src={delete_icon} alt="delete icon" />
          <img className="edit_icon" src={edit} alt="edit icon" />
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
