import { useState, useEffect } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate, useParams } from 'react-router-dom';
import "./EditIventoryOutOfStock.scss";
import axios from "axios";


export default function EditInventory() {
  const [ itemName, setItemName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ warehouse, setWarehouse ] = useState("");
  const [ quantity, setQuantity ] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState({ id: '', name: '' });

  const [ categories, setCategories ] = useState([]);
  const [ warehouseList, setWarehouseList ] = useState([]);

  const [ isSelected, setIsSelected ] = useState(""); 


  const [ error, setError ] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      const fetchData = axios.get(`http://localhost:8080/api/inventories/${id}`)
      .then((res) => { 
        const inventory = res.data;

        setItemName(inventory.item_name);
        setDescription(inventory.description);
        setCategory(inventory.category);
        setWarehouse(inventory.warehouse_name);
        setQuantity(inventory.quantity);
        setSelectedWarehouse({ id: inventory.warehouse_id, name: inventory.warehouse_name });
        if(inventory.status === "In Stock") {
          setIsSelected("stock");
        }else {
          setIsSelected("outofstock");
        }
      })
      .catch((err) => { 
        console.error(err);
      });
   
      fetchData;
  }, [id]);


  useEffect(() => {
    const fetchData = axios.get("http://localhost:8080/api/inventories")
      .then((res) => {
        const uniqueCategories = [...new Set(res.data.map(item => item.category))];
        const uniqueWarehouses = [...new Set(res.data.map(item => `${item.warehouse_id}-${item.warehouse_name}`))]
        .map(warehouse => {
          const [id, name] = warehouse.split('-');
          return { id, name };
        });
        
        setCategories(uniqueCategories);
        setWarehouseList(uniqueWarehouses);
      })
      .catch((err) => console.error(err));
  
    fetchData;
  }, []);


  // Update


  const updateData = (e) => {
    e.preventDefault();
    const status = isSelected === "stock" ? "In Stock" : "Out of Stock";
    const updateQuantity = isSelected === "stock" ? 100 : 0;
        
    if(itemName.length < 3) {
      setError("Item name must be less than 20 characters.");
      return;
    }
    
    if(description.length < 10) {
      setError("Description must be less than 100 characters.");
      return;
    }

    if(category === "Category") {
      setError("Please select a category.");
      return;
    }

    if(selectedWarehouse.name === "Warehouse") {
      setError("Please select a warehouse.");
      return;
    }


  
    axios.put(`http://localhost:8080/api/inventories/${id}`, {
      item_name: itemName,
      description: description,
      category: category,
      warehouse_id: selectedWarehouse.id, 
      status: status,
      quantity: updateQuantity,
    })
    .then((res) => {
      console.log(res);
      navigate(`/inventory/${id}`);
    })
    .catch((err) => {
      // backend validation
      if(err.response.status === 400) {
        setError("Bad request. Please check your input.");
        console.log('Backend validation');
      }
      console.error(err);
    });
  };

  return (
    <section className='EditInventory'>
      <form className='EditInventory__main-container' onSubmit={updateData}>

        <div className="EditInventory__container">
            <div className="EditInventory__back-icon" onClick={()=> navigate('/inventory')}>
              <img src={arrow_back} alt="back_button" />
            </div>
          <div className='EditInventory__title'>Edit Inventory Item</div>
        </div>

        <div className="EditInventory__details-container">
          <div className='EditInventory__components-container'>
            <div className='EditInventory__subcontainer'>
              <div className='EditInventory__warehouse-container'>
                <h2 className='EditInventory__sub-title'>Item Details</h2>
                <div className='EditInventory__warehouse'>
                  <div>
                    <label htmlFor="warehouseName">Item Name</label>
                    <br />
                    <input className="EditInventory__input"
                      type="text"
                      id="item_name"
                      name="item_name"
                      value={itemName}
                      onChange={(e)=>setItemName(e.target.value)}
                    />
                  
                  </div>
                  <div>
                    <label htmlFor="streetAddress">Description</label>
                    <br />
                    <textarea className="EditInventory__textarea"
                      type="text"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}      
                    />
                  
                  </div>
                  <div>
                    <label htmlFor="city">Category</label>
                    <br />

                    <div className="EditInventory__dropdown">
                    <select
                      id="category"
                      name="category"
                      className="EditInventory__dropdownSelect"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >                          
                          {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                      </select>
                    </div>

                  </div>
               
                </div>
              </div>
              <div className="EditInventory__contact-container">
                <h2 className='EditInventory__sub-title'>Item Availability</h2>
                <div className="EditInventory__status">
                  <label htmlFor="contactName">Status</label>
                  <br />

                  <span className="radio_button">
                  <input
                    className="EditInventory__radio EditInventory__stock"
                    type="radio"
                    id="stock"
                    name="stock"
                    value="stock" 
                    checked={isSelected === "stock"}
                    onChange={() => setIsSelected("stock")}
                  />
                  <label htmlFor="stock" className={`label ${isSelected === "stock" ? 'label_active' : ''}`}>In Stock</label>
                  </span>

                  <span className="radio_button">
                  <input
                    className="EditInventory__radio EditInventory__stock"
                    type="radio"
                    id="stock"
                    name="stock"
                    value="stock" 
                    checked={isSelected === "outofstock"}
                    onChange={() => setIsSelected("outofstock")}
                  />
                  <label htmlFor="stock" className={`label ${isSelected === "outofstock" ? 'label_active' : ''}`}>Out of Stock</label>
                  </span>
                </div>
                <div>
                  <label htmlFor="position">Warehouse</label>
                  <br />
                  <div className="EditInventory__dropdown">
                  <select
                      id="warehouse"
                      name="warehouse"
                      className="EditInventory__dropdownSelect"
                      value={selectedWarehouse.name}
                      onChange={(e) => {
                        const selectedWarehouseObject = warehouseList.find(warehouse => warehouse.name === e.target.value);
                        setSelectedWarehouse(selectedWarehouseObject);
                      }}
                    >
                      {warehouseList.map((warehouse) => (
                        <option key={warehouse.id} value={warehouse.name}>{warehouse.name}</option>
                      ))}
                    </select>
                    </div>
                    {error && <p className="EditInventory__error">{error}</p>}
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className='EditInventory__button-container'>
          <button className='EditInventory__cancel-btn' type="button" onClick={()=> navigate('/inventory')}>
            Cancel
          </button>
          <button className='EditInventory__save-btn' type="submit" >
            Save
          </button>
        </div>


      </form>


    </section>
  );
}

