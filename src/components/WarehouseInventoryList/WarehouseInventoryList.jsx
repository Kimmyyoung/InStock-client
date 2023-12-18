import "./WarehouseInventoryList.scss"
import delete_icon from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

const WarehouseInventoryList = ({ inventory }) => {
  const { item_name, category, status, quantity } = inventory;

  const statusClass =
    status === "In Stock" ? "status-instock" : "status-outofstock";

  return (
    <div >
      <div className="warehouse-inventory__list" key={inventory.id}>
        <div className="warehouse-inventory__item inventory__item-icon warehouse-inventory__nameAndArrow ">
          <Link to={`/inventory/${inventory.id}`} className="warehouse-inventory__item-link">
            <p id="item_name" className="item__name">
              {item_name}
            </p>
            <img
              src="/src/assets/Icons/chevron_right-24px.svg"
              className="warehouse-inventory__rightArrow"
              alt="right arrow"
            />
          </Link>
        </div>

        <div id="category" className="warehouse-inventory__item">
          <p className="category"> {category}</p>
        </div>

        <div id="status" className="warehouse-inventory__item">
          <p className={`status ${statusClass}`}>{status}</p>
        </div>
        <div id="qty" className="warehouse-inventory__item">
          <p className="qty">{quantity}</p>
        </div>
        <div className="warehouse-inventory__item warehouse-inventory__item--move">
          <img className="delete_icon" src={delete_icon} alt="delete icon" />
          <img className="edit_icon" src={edit} alt="edit icon" />
        </div>
      </div>

      {/* Mobile  */}

      <div className="warehouse-inventory__list-mobile warehouse-inventory__list-mobile">
        <div className="warehouse-inventory__row1-mobile">
          <div className="left-column">
            <div className="warehouse-inventory__block1">
              <div className="warehouse-inventory__title">INVENTORY ITEM</div>
              <div id="item_name" className="warehouse-inventory__item">
                {item_name}
              </div>
            </div>

            <div className="warehouse-inventory__block2">
              <div className="warehouse-inventory__title">CATEGORY</div>
              <div id="category_mobile" className="warehouse-inventory__item">
                <p className="category"> {category}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="warehouse-inventory__block3">
              <div className="warehouse-inventory__title">STATUS</div>
              <div id="status_mobile" className="inventory__item">
                <p className={`status ${statusClass}`}>{status}</p>
              </div>
            </div>

            <div className="warehouse-inventory__block4">
              <div className="warehouse-inventory__title">QTY</div>
              <div id="qty_mobile" className="warehouse-inventory__item">
                <p className="qty">{quantity}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="warehouse-inventory__row1-mobile">
          <div className="left-column"></div>


        </div>

        <div className="warehouse-inventory__row4-mobile">
          <img className="delete_icon" src={delete_icon} alt="delete icon" />
          <img className="edit_icon" src={edit} alt="edit icon" />
        </div>
      </div>
    </div>
  );
};

export default WarehouseInventoryList;