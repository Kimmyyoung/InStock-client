import { useState, useEffect } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import "./EditIventoryOutOfStock.scss";
import axios from "axios";
import errorIcon from "../../assets/Icons/error-24px.svg";


export default function EditInventory() {
  const [ itemName, setItemName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ warehouse, setWarehouse ] = useState("");
  const [ isStock, setIsStock ] = useState(false);
  const [ isOutOfStock, setIsOutOfStock ] = useState(false);
  const [ error, setError ] = useState("");
  const [ warehouseList, setWarehouseList ] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  // useEffect(() => {
  //   try {
  //     const fetc
  //   }
  // }, [params]);


  return (
    <section className='EditInventory'>
      <form className='EditInventory__main-container'  >

        <div className="EditInventory__container">
          <NavLink to="/">
            <div className="EditInventory__back-icon">
              <img src={arrow_back} alt="back_button" />
            </div>
          </NavLink>
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
                      <select id="dropdown" name="dropdown" className="EditInventory__dropdownSelect">
                        <option value="option1">option1</option>
                        <option value="option2">option1</option>
                        <option value="option3">option1</option>
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
                  <input className="EditInventory__radio EditInventory__stock"
                    type="radio"
                    id="stock"
                    name="stock"
                    value={isStock}
                    onChange={(e)=>setIsStock(e.target.value)}
                  />
                  <label htmlFor="stock">In Stock</label>
                  </span>

                  <span className="radio_button">
                  <input className="EditInventory__radio EditInventory__outofstock"
                    type="radio"
                    id="outofstock"
                    name="outofstock"
                    value={isOutOfStock}
                    onChange={(e)=>setIsOutOfStock(e.target.value)}
                  />
                  <label htmlFor="outofstock">Out of Stock</label>
                  </span>
                </div>
                <div>
                  <label htmlFor="position">Warehouse</label>
                  <br />
                  <div className="EditInventory__dropdown">
                      <select id="dropdown" name="dropdown" className="EditInventory__dropdownSelect">
                        <option value="option1">option1</option>
                        <option value="option2">option1</option>
                        <option value="option3">option1</option>
                      </select>
                    </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className='EditInventory__button-container'>
          <button className='EditInventory__cancel-btn' type="button" >
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

