import { useState, useEffect } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import "./AddNewInventoryItemOutOfStock.scss";
import axios from "axios";


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


  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
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

    console.log("The new inventory will be created: ", dataToSend);

    try {
      const response = await axios.post('http://localhost:8080/api/inventories', dataToSend);

      if (response.status === 201) {
        console.log('Added to Inventory', response.data);
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
                      value={inventoryData.item_name}
                      onChange={handleChange}
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
                      value={inventoryData.description}
                      onChange={handleChange}
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
                        value={inventoryData.category}
                        onChange={handleChange}
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
                  <input className="AddInventory__input"
                    type="text"
                    id="quantity"
                    name="quantity"

                    value={inventoryData.quantity}
                    onChange={handleChange}
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
                      value={inventoryData.warehouse_id}
                      onChange={handleChange}
                    >
                      <option value="" disabled >Please select</option>
                      {warehouseList.map((warehouseOptions) => (
                        <option key={warehouseOptions.id} value={warehouseOptions.id} data-warehouse-id={warehouseOptions.id}>{warehouseOptions.name}</option>
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