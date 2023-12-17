import { useState, useEffect } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import "./AddNewInventoryItemOutOfStock.scss";
import axios from "axios";


export default function AddNewInventoryItemOutOfStock() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [quantity, setQuantity] = useState("0");

  const [categories, setCategories] = useState([]);
  const [warehouseList, setWarehouseList] = useState([]);

  const [isSelected, setIsSelected] = useState("stock");


  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  //--------------------------------------//

  useEffect(() => {
    const fetchData = axios.get("http://localhost:8080/api/inventories")
      .then((res) => {
        const uniqueCategories = [...new Set(res.data.map(item => item.category))];
        const uniqueWarehouses = [...new Set(res.data.map(item => item.warehouse_name))];
        setCategories(uniqueCategories);
        setWarehouseList(uniqueWarehouses);
      })
      .catch((err) => console.error(err));

    fetchData;
  }, []);

  // On submit - Add New Item
  const addNewItem = (e) => {
    e.preventDefault();
    console.log("The new inventory will be created: ");
  };

  // Handle cancel Button
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <section className='AddInventory'>
      <form className='AddInventory__main-container' onSubmit={addNewItem}>

        <div className="AddInventory__container">
          <NavLink to="/">
            <div className="AddInventory__back-icon">
              <img src={arrow_back} alt="back_button" />
            </div>
          </NavLink>
          <div className='AddInventory__title'>Add Inventory Item</div>
        </div>

        <div className="AddInventory__details-container">
          <div className='AddInventory__components-container'>
            <div className='AddInventory__subcontainer'>
              <div className='AddInventory__warehouse-container'>
                <h2 className='AddInventory__sub-title'>Item Details</h2>
                <div className='AddInventory__warehouse'>
                  <div>
                    <label htmlFor="item_name">Item Name</label>
                    <br />
                    <input className="AddInventory__input"
                      type="text"
                      id="item_name"
                      name="item_name"
                      placeholder="Item Name"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />

                  </div>
                  <div>
                    <label htmlFor="description">Description</label>
                    <br />
                    <textarea className="AddInventory__textarea"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Please enter a brief item description..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />

                  </div>
                  <div>
                    <label htmlFor="category">Category</label>
                    <br />

                    <div className="AddInventory__dropdown">
                      <select
                        id="category"
                        name="category"
                        className="AddInventory__dropdownSelect"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="" disabled>Please select</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                  </div>

                </div>
              </div>
              <div className="AddInventory__availability-container">
                <h2 className='AddInventory__sub-title'>Item Availability</h2>
                <div className="AddInventory__status">
                  <label htmlFor="status">Status</label>
                  <br />

                  <span className="radio_button">
                    <input
                      className="AddInventory__radio AddInventory__stock"
                      type="radio"
                      id="inStock"
                      name="stock"
                      value="stock"
                      checked={isSelected === "stock"}
                      onChange={() => setIsSelected("stock")}
                    />
                    <label htmlFor="stock" className={`label ${isSelected === "stock" ? 'label_active' : ''}`}>In Stock</label>
                  </span>

                  <span className="radio_button">
                    <input
                      className="AddInventory__radio AddInventory__stock"
                      type="radio"
                      id="outofStock"
                      name="stock"
                      value="outofstock"
                      checked={isSelected === "outofstock"}
                      onChange={() => setIsSelected("outofstock")}
                    />
                    <label htmlFor="stock" className={`label ${isSelected === "outofstock" ? 'label_active' : ''}`}>Out of Stock</label>
                  </span>
                </div>

                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <br />
                  <input className="AddInventory__input"
                    type="text"
                    id="quantity"
                    name="quantity"

                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />

                </div>

                <div>
                  <label htmlFor="warehouse">Warehouse</label>
                  <br />
                  <div className="AddInventory__dropdown">
                    <select
                      id="warehouse"
                      name="warehouse"
                      className="AddInventory__dropdownSelect"
                      value={warehouse}
                      onChange={(e) => setWarehouse(e.target.value)}
                    >
                      <option value="" disabled >Please select</option>
                      {warehouseList.map((warehouseOptions) => (
                        <option key={warehouseOptions} value={warehouseOptions}>{warehouseOptions}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className='AddInventory__button-container'>
          <button className='AddInventory__cancel-btn' type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className='AddInventory__add-btn' type="submit" >
            + Add Item
          </button>
        </div>


      </form>


    </section>
  );
}