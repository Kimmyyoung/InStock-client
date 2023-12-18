import { useState, useEffect } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import "./AddNewInventoryItemOutOfStock.scss";
import axios from "axios";
import validator from 'validator';

export default function AddNewInventoryItemOutOfStock() {
  const [inventoryData, setInventoryData] = useState({
    item_name: "",
    description: "",
    category: "",
    warehouse_id: "",
    quantity: "0",
    status: "stock",
  });

  const [categories, setCategories] = useState([]);
  const [warehouseList, setWarehouseList] = useState([]);
  const [isSelected, setIsSelected] = useState("stock");

  const navigate = useNavigate();

  const [hasError, setHasError] = useState({
    item_name: false,
    description: false,
    category: false,
    warehouse_id: false,
    quantity: false
  });
  //--------------------------------------//

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/inventories");
        const uniqueCategories = [...new Set(res.data.map((item) => item.category))];
        setCategories(uniqueCategories);

        // Create a Set to store unique warehouses
        const uniqueWarehousesSet = new Set();
        const uniqueWarehouses = res.data
          .map((item) => ({
            id: item.warehouse_id,
            name: item.warehouse_name,
          }))
          .filter((warehouse) => {
            if (uniqueWarehousesSet.has(warehouse.id)) {
              return false;
            }
            uniqueWarehousesSet.add(warehouse.id);
            return true;
          });

        setWarehouseList(uniqueWarehouses);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'warehouse') {
      const warehouse_id = e.target.options[e.target.selectedIndex].dataset.warehouseId;
      setInventoryData((prevDetails) => ({
        ...prevDetails,
        warehouse_id,
      }));
    } else {
      setInventoryData((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  // On submit - Add New Item
  const addNewItem = async (e) => {
    e.preventDefault();

    const dataToSend = {
      warehouse_id: inventoryData.warehouse_id,
      item_name: inventoryData.item_name,
      description: inventoryData.description,
      category: inventoryData.category,
      status: isSelected === 'stock' ? 'In Stock' : 'Out of Stock',
      quantity: inventoryData.quantity,
    };

  
    const errors = {};
    if (validator.isEmpty(inventoryData.item_name)) {
      errors.item_name = true;
    }
    if (validator.isEmpty(inventoryData.description)) {
      errors.description = true;
    }
    if (validator.isEmpty(inventoryData.category)) {
      errors.category = true;
    }
    if (validator.isEmpty(inventoryData.warehouse_id)) {
      errors.warehouse_id = true;
    }
    if (validator.isEmpty(inventoryData.quantity) || !validator.isNumeric(inventoryData.quantity)) {
      errors.quantity = true;
    }

    setHasError(errors);
    const hasValidationError = Object.values(errors).some((error) => error);

    if (hasValidationError) {
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/inventories', dataToSend);

      if (response.status === 201) {
        alert('A new record has been added to Inventory', response.data);
        navigate("/inventory");
      } else {
        console.error('Error adding to inventory:', response.data);
      }
    } catch (error) {
      console.error('Major Error adding to inventory:', error.message);
    }

  };

  // Handle cancel Button
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/inventory");
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
              <div className='AddInventory__itemDetails-container'>
                <h2 className='AddInventory__sub-title'>Item Details</h2>
                <div className='AddInventory__warehouse'>
                  <div>
                    <label htmlFor="item_name">Item Name</label>
                    <br />
                    <input className={`AddInventory__input ${hasError.item_name ? 'AddInventory__input--error' : ''}`}
                      type="text"
                      id="item_name"
                      name="item_name"
                      placeholder="Item Name"
                      value={inventoryData.item_name}
                      onChange={handleChange}
                    />
                    {/* Error Validation */}
                    {hasError.item_name && (
                      <span className='AddInventory__error'>
                        <img src={errorIcon} alt="Error Icon" className="AddInventory__error-icon" />
                        <span className="AddInventory__error-text">This field is required</span>
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="description">Description</label>
                    <br />
                    <textarea className={`AddInventory__textarea ${hasError.description ? 'AddInventory__textarea--error' : ''}`}
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Please enter a brief item description..."
                      value={inventoryData.description}
                      onChange={handleChange}
                    />
                    {/* Error Validation */}
                    {hasError.description && (
                      <span className='AddInventory__error'>
                        <img src={errorIcon} alt="Error Icon" className="AddInventory__error-icon" />
                        <span className="AddInventory__error-text">This field is required</span>
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="category">Category</label>
                    <br />

                    <div>
                      <select
                        id="category"
                        name="category"
                        className={`AddInventory__dropdownSelect ${hasError.category ? 'AddInventory__dropdownSelect--error' : ''}`}
                        value={inventoryData.category}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Please select</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      {/* Error Validation */}
                      {hasError.category && (
                        <span className='AddInventory__error'>
                          <img src={errorIcon} alt="Error Icon" className="AddInventory__error-icon" />
                          <span className="AddInventory__error-text">This field is required</span>
                        </span>
                      )}

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
                    <label htmlFor="inStock" className={`label ${isSelected === "stock" ? 'label_active' : ''}`}>In Stock</label>
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
                    <label htmlFor="outofStock" className={`label ${isSelected === "outofstock" ? 'label_active' : ''}`}>Out of Stock</label>
                  </span>
                </div>

                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <br />
                  <input className={`AddInventory__input ${hasError.quantity ? 'AddInventory__input--error' : ''}`}
                    type="text"
                    id="quantity"
                    name="quantity"

                    value={inventoryData.quantity}
                    onChange={handleChange}
                  />
                  {/* Error Validation */}
                  {hasError.quantity && (
                    <span className='AddInventory__error'>
                      <img src={errorIcon} alt="Error Icon" className="AddInventory__error-icon" />
                      <span className="AddInventory__error-text">This field is required and must be a number</span>
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="warehouse">Warehouse</label>
                  <br />
                  <div>
                    <select
                      id="warehouse"
                      name="warehouse"
                      className={`AddInventory__dropdownSelect ${hasError.warehouse_id ? 'AddInventory__dropdownSelect--error' : ''}`}
                      value={inventoryData.warehouse_id}
                      onChange={handleChange}
                    >
                      <option value="" disabled >Please select</option>
                      {warehouseList.map((warehouseOptions) => (
                        <option key={warehouseOptions.id} value={warehouseOptions.id} data-warehouse-id={warehouseOptions.id}>{warehouseOptions.name}</option>
                      ))}</select>
                    {/* Error Validation */}
                    {hasError.warehouse_id && (
                      <span className='AddInventory__error'>
                        <img src={errorIcon} alt="Error Icon" className="AddInventory__error-icon" />
                        <span className="AddInventory__error-text">This field is required</span>
                      </span>
                    )}

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