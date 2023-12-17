import { useState, useEffect } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import "./EditWarehouse.scss";
import axios from "axios";
import { validatePhoneNumber, validateEmail } from '../../utils/validation';
import errorIcon from "../../assets/Icons/error-24px.svg";

export default function EditWarehouse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [warehouseDetails, setWarehouseDetails] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_position: '',
    contact_phone: '',
    contact_email: '',
  });

  const [hasError, setHasError] = useState({
    warehouse_name: false,
    address: false,
    city: false,
    country: false,
    contact_name: false,
    contact_position: false,
    contact_phone: false,
    contact_email: false,
  });

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
        setWarehouseDetails(response.data);
      } catch (error) {
        console.error('Error fetching warehouse details:', error.message);
      }
    };

    fetchWarehouseDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle cancel Button
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  // Handle Save Edit Warehouse Button
  const handleEditWarehouse = async (e) => {
    e.preventDefault();

    // Create a new object without the 'id' property
    const { id, created_at, updated_at, ...updatedDetails } = warehouseDetails;

    console.log("Values: ", updatedDetails);
    //Validation still required
    const errors = {};
    if (!warehouseDetails.warehouse_name || warehouseDetails.warehouse_name.trim() === '') {
      errors.warehouse_name = true;
    }

        // Validate address
    if (!warehouseDetails.address || warehouseDetails.address.trim() === '') {
      errors.address = true;
    }

        // Validate city
    if (!warehouseDetails.city || warehouseDetails.city.trim() === '') {
      errors.city = true;
    }

        // Validate country
    if (!warehouseDetails.country || warehouseDetails.country.trim() === '') {
      errors.country = true;
    }

        // Validate contact_name
    if (!warehouseDetails.contact_name || warehouseDetails.contact_name.trim() === '') {
      errors.contact_name = true;
    }

        // Validate contact_position
    if (!warehouseDetails.contact_position || warehouseDetails.contact_position.trim() === '') {
      errors.contact_position = true;
    }
        // Validate contact_phone
    if (!warehouseDetails.contact_phone || !validatePhoneNumber(warehouseDetails.contact_phone)) {
      errors.contact_phone = true;
    }
        // Validate contact_email
    if (!warehouseDetails.contact_email || !validateEmail(warehouseDetails.contact_email)) {
      errors.contact_email = true;
    }

    setHasError(errors);
    const hasValidationError = Object.values(errors).some((error) => error);

    if (hasValidationError) {
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8080/warehouses/${id}`, updatedDetails);

      if (response.status === 200) {
        console.log('Edited Warehouse', response.data);
        navigate("/");
      } else {
        console.error('Major error editing warehouse:', response.data);
      }
    } catch (error) {
      console.error('Error editing warehouse:', error.message);
    }
  };

  return (
    <section className='EditWarehouse'>
      <form className='EditWarehouse__main-container' onSubmit={handleEditWarehouse} >

        <div className="EditWarehouse__container">
          <NavLink to="/">
            <div className="EditWarehouse__back-icon">
              <img src={arrow_back} alt="back_button" />
            </div>
          </NavLink>
          <div className='EditWarehouse__title'>Edit Warehouse</div>
        </div>

        {/* Warehouse Details & Contact Details*/}
        <div className="EditWarehouse__details-container">

          <div className='EditWarehouse__components-container'>

            <div className='EditWarehouse__subcontainer'>
              <div className='EditWarehouse__warehouse-container'>
                <h2 className='EditWarehouse__sub-title'>Warehouse Details</h2>
                <div className='EditWarehouse__warehouse'>
                  <div>
                    <label htmlFor="warehouseName">Warehouse Name</label>
                    <br />
                    <input className="EditWarehouse__input"
                      type="text"
                      id="warehouseName"
                      name="warehouse_name"
                      placeholder="Warehouse Name"
                      value={warehouseDetails.warehouse_name}
                      onChange={handleChange}
                    />
                    {/* Error Validation */}
                    {hasError && (
                      <span className='EditWarehouse__error'>
                        <img src={errorIcon} alt="Error Icon" className="EditWarehouse__error-icon" />
                        <span className="EditWarehouse__error-text">This field is required</span>
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="streetAddress">Street Address</label>
                    <br />
                    <input className="EditWarehouse__input"
                      type="text"
                      id="streetAddress"
                      name="address"
                      placeholder="Street Address"
                      value={warehouseDetails.address}
                      onChange={handleChange}
                    />
                    {/* Error Validation */}
                    {/* {hasError && (
                      <span className='EditWarehouse__error'>
                        <img src={errorIcon} alt="Error Icon" className="EditWarehouse__error-icon" />
                        <span className="EditWarehouse__error-text">This field is required</span>
                      </span>
                    )} */}
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <br />
                    <input className="EditWarehouse__input"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      value={warehouseDetails.city}
                      onChange={handleChange}
                    />
                    {/* Error Validation */}
                    {/* {hasError && (
                      <span className='EditWarehouse__error'>
                        <img src={errorIcon} alt="Error Icon" className="EditWarehouse__error-icon" />
                        <span className="EditWarehouse__error-text">This field is required</span>
                      </span>
                    )} */}
                  </div>
                  <div>
                    <label htmlFor="country">Country</label>
                    <br />
                    <input className="EditWarehouse__input EditWarehouse__input--last"
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Country"
                      value={warehouseDetails.country}
                      onChange={handleChange}
                    />
                    {/* Error Validation */}
                    {/* {hasError && (
                      <span className='EditWarehouse__error'>
                        <img src={errorIcon} alt="Error Icon" className="EditWarehouse__error-icon" />
                        <span className="EditWarehouse__error-text">This field is required</span>
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="EditWarehouse__contact-container">
                <h2 className='EditWarehouse__sub-title'>Contact Details</h2>
                <div>
                  <label htmlFor="contactName">Contact Name</label>
                  <br />
                  <input className="EditWarehouse__input"
                    type="text"
                    id="contactName"
                    name="contact_name"
                    placeholder="Contact Name"
                    value={warehouseDetails.contact_name}
                    onChange={handleChange}
                  />
                  {/* Error Validation */}
                  {/* {hasError && (
                      <span className='EditWarehouse__error'>
                        <img src={errorIcon} alt="Error Icon" className="EditWarehouse__error-icon" />
                        <span className="EditWarehouse__error-text">This field is required</span>
                      </span>
                    )} */}
                </div>
                <div>
                  <label htmlFor="position">Position</label>
                  <br />
                  <input className="EditWarehouse__input"
                    type="text"
                    id="position"
                    name="contact_position"
                    placeholder="Position"
                    value={warehouseDetails.contact_position}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <br />
                  <input className="EditWarehouse__input"
                    type="text"
                    id="phoneNumber"
                    name="contact_phone"
                    placeholder="Phone Number"
                    value={warehouseDetails.contact_phone}
                    onChange={handleChange}
                  />
                  {/* Error Validation */}
                  {/* {hasError && (
                      <span className='EditWarehouse__error'>
                        <img src={errorIcon} alt="Error Icon" className="EditWarehouse__error-icon" />
                        <span className="EditWarehouse__error-text">This field is required</span>
                      </span>
                    )} */}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input className="EditWarehouse__input EditWarehouse__input--last"
                    type="email"
                    id="email"
                    name="contact_email"
                    placeholder="Email"
                    value={warehouseDetails.contact_email}
                    onChange={handleChange}
                  />
                  {/* Error Validation */}
                  {/* {hasError && (
                      <span className='EditWarehouse__error'>
                        <img src={errorIcon} alt="Error Icon" className="EditWarehouse__error-icon" />
                        <span className="EditWarehouse__error-text">This field is required</span>
                      </span>
                    )} */}
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className='EditWarehouse__button-container'>
          <button className='EditWarehouse__cancel-btn' type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className='EditWarehouse__save-btn' type="submit" >
            Save
          </button>
        </div>


      </form>


    </section>
  );
}

