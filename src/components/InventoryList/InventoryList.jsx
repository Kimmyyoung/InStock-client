// import "./InventoryList.scss";
// import delete_icon from "../../assets/icons/delete_outline-24px.svg";
// import edit from "../../assets/icons/edit-24px.svg";

// const InventoryList = ({ item }) => {
//   const { item_name, category, status, quantity } = item;

//   return (
//     <div>
//       <div className="inventory__list">
//         <div className="inventory__item inventory__item-icon warehouse__nameAndArrow ">
//           <p id="item_name" className="item__name">
//             {" "}
//             {item_name}
//           </p>
//           <img
//             src="/src/assets/Icons/chevron_right-24px.svg"
//             className="inventory__rightArrow"
//             alt="right arrow"
//           />
//         </div>

//         <div id="category" className="inventory__item">
//           <p className="category"> {category}</p>
//         </div>

//         <div id="status" className="inventory__item">
//           <p className="status"> {status}</p>
//         </div>
//         <div id="qty" className="inventory__item">
//           <p className="qty">{quantity}</p>
//         </div>
//         <div id="warehouse_name" className="inventory__item">
//           <div>Warehouse Name</div>
//         </div>
//         <div className="inventory__item inventory__item--move">
//           <img className="delete_icon" src={delete_icon} alt="delete icon" />
//           <img className="edit_icon" src={edit} alt="edit icon" />
//         </div>
//       </div>

//       <div className="inventory__list-mobile">


// <div className="inventory__row1-mobile">
//   <div className="left-column">
//     <div className="inventory__block1">
//       <div className="inventory__title">INVENTORY ITEM</div>
//       <div id="item_name" className="inventory__item">
//         {item_name}
//       </div>
//     </div>

//     <div className="inventory__block2">
//       <div className="inventory__title">CATEGORY</div>
//       <div id="category_mobile" className="inventory__item">
//       <p className="category"> {category}</p>
//       </div>
//     </div>
//   </div>

//   <div className="right-column">
//     <div className="inventory__block3">
//       <div className="inventory__title">STATUS</div>
//       <div id="status_mobile" className="inventory__item">
//       <p className="status"> {status}</p>
//       </div>
//     </div>

//     <div className="inventory__block4">
//       <div className="inventory__title">QTY</div>
//       <div id="qty_mobile" className="inventory__item">
//       <p className="qty">{quantity}</p>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="inventory__row1-mobile">
//   <div className="left-column">
  
//   </div>

//   <div className="right-column">
//     <div className="inventory__block5">
//       <div className="inventory__title">WAREHOUSE</div>
//       <div id="warehouse_name_mobile" className="inventory__item">
//         <div>Warehouse Name</div>
//       </div>
//     </div>
//   </div>
// </div>





//         <div className="inventory__row4-mobile">
//           <img className="delete_icon" src={delete_icon} alt="delete icon" />
//           <img className="edit_icon" src={edit} alt="edit icon" />
//         </div>



//       </div>
//     </div>
//   );
// };

// export default InventoryList;



import "./InventoryList.scss";
import delete_icon from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

const InventoryList = ({ item }) => {
  const { item_name, category, status, quantity } = item;

  // Determine the appropriate CSS classes based on the item's status
  const statusClass = status === "In Stock" ? "status-instock" : "status-outofstock";

  return (
    <div>
      <div className="inventory__list">
        <div className={`inventory__item inventory__item-icon warehouse__nameAndArrow ${statusClass}`}>
          <p id="item_name" className="item__name">
            {item_name}
          </p>
          <img
            src="/src/assets/Icons/chevron_right-24px.svg"
            className="inventory__rightArrow"
            alt="right arrow"
          />
        </div>

        <div id="category" className="inventory__item">
          <p className="category">{category}</p>
        </div>

        <div id="status" className="inventory__item">
          <p className={`status ${statusClass}`}>{status}</p>
        </div>
        <div id="qty" className="inventory__item">
          <p className="qty">{quantity}</p>
        </div>
        <div id="warehouse_name" className="inventory__item">
          <div>Warehouse Name</div>
        </div>
        <div className="inventory__item inventory__item--move">
          <img className="delete_icon" src={delete_icon} alt="delete icon" />
          <img className="edit_icon" src={edit} alt="edit icon" />
        </div>
      </div>

      <div className="inventory__list-mobile">
        <div className="inventory__row1-mobile">
          <div className="left-column">
            <div className="inventory__block1">
              <div className="inventory__title">INVENTORY ITEM</div>
              <div id="item_name" className="inventory__item">
                {item_name}
              </div>
            </div>

            <div className="inventory__block2">
              <div className="inventory__title">CATEGORY</div>
              <div id="category_mobile" className="inventory__item">
                <p className="category">{category}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="inventory__block3">
              <div className="inventory__title">STATUS</div>
              <div id="status_mobile" className="inventory__item">
                <p className={`status ${statusClass}`}>{status}</p>
              </div>
            </div>

            <div className="inventory__block4">
              <div className="inventory__title">QTY</div>
              <div id="qty_mobile" className="inventory__item">
                <p className="qty">{quantity}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="inventory__row1-mobile">
          <div className="left-column"></div>

          <div className="right-column">
            <div className="inventory__block5">
              <div className="inventory__title">WAREHOUSE</div>
              <div id="warehouse_name_mobile" className="inventory__item">
                <div>Warehouse Name</div>
              </div>
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
