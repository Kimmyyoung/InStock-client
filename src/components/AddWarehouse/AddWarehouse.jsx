import { useState } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import "./AddWarehouse.scss";
import axios from "axios";

const AddWarehouse = () => {
    const navigate = useNavigate();
    const hasError = true; 
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

    // Handle add warehouse Button
    const handleAddWarehouse = async (e) => {
        e.preventDefault();
        console.log("Values: ", warehouseDetails);
        //Validation still required
        try {
            const response = await axios.post('http://localhost:8080/warehouses', warehouseDetails);

            if (response.status === 201) {
                console.log('Added Warehouse', response.data);
                navigate("/");
            } else {
                console.error('Error adding warehouse:', response.data);
            }
        } catch (error) {
            console.error('Error adding warehouse:', error.message);
        }
    };

    return (
        <section className='AddWarehouse'>
            <form className='AddWarehouse__main-container' onSubmit={handleAddWarehouse} >
                <div className="AddWarehouse__container">
                    <NavLink to="/">
                        <div className="AddWarehouse__back-icon">
                            <img src={arrow_back} alt="back_button" />
                        </div>
                    </NavLink>
                    <div className='AddWarehouse__title'>Add New Warehouse</div>
                </div>

                {/* Warehouse Details & Contact Details */}
                <div className="AddWarehouse__details-container">

                    <div className='AddWarehouse__components-container' >

                        <div className='AddWarehouse__subcontainer'>
                            <div className='AddWarehouse__warehouse-container'>
                                <h2 className='AddWarehouse__sub-title'>Warehouse Details</h2>
                                <div className='AddWarehouse__warehouse'>
                                    <div>
                                        <label htmlFor="warehouseName">Warehouse Name</label>
                                        <br />
                                        <input className="AddWarehouse__input"
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
                                        <input className="AddWarehouse__input"
                                            type="text"
                                            id="streetAddress"
                                            name="address"
                                            placeholder="Street Address"
                                            value={warehouseDetails.address}
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
                                        <label htmlFor="city">City</label>
                                        <br />
                                        <input className="AddWarehouse__input"
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="City"
                                            value={warehouseDetails.city}
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
                                        <label htmlFor="country">Country</label>
                                        <br />
                                        <input className="AddWarehouse__input AddWarehouse__input--last"
                                            type="text"
                                            id="country"
                                            name="country"
                                            placeholder="Country"
                                            value={warehouseDetails.country}
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
                                </div>
                            </div>
                            <div className="AddWarehouse__contact-container">
                                <h2 className='AddWarehouse__sub-title'>Contact Details</h2>
                                <div>
                                    <label htmlFor="contactName">Contact Name</label>
                                    <br />
                                    <input className="AddWarehouse__input"
                                        type="text"
                                        id="contactName"
                                        name="contact_name"
                                        placeholder="Contact Name"
                                        value={warehouseDetails.contact_name}
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
                                    <label htmlFor="position">Position</label>
                                    <br />
                                    <input className="AddWarehouse__input"
                                        type="text"
                                        id="position"
                                        name="contact_position"
                                        placeholder="Position"
                                        value={warehouseDetails.contact_position}
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
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <br />
                                    <input className="AddWarehouse__input"
                                        type="text"
                                        id="phoneNumber"
                                        name="contact_phone"
                                        placeholder="Phone Number"
                                        value={warehouseDetails.contact_phone}
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
                                    <label htmlFor="email">Email</label>
                                    <br />
                                    <input className="AddWarehouse__input AddWarehouse__input--last"
                                        type="email"
                                        id="email"
                                        name="contact_email"
                                        placeholder="Email"
                                        value={warehouseDetails.contact_email}
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
                            </div>

                        </div>

                    </div>

                </div>

                <div className='AddWarehouse__button-container'>
                    <button className='AddWarehouse__cancel-btn' type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className='AddWarehouse__add-btn' type="submit" >
                        + Add Warehouse
                    </button>
                </div>
            </form>
        </section>

    )
}

export default AddWarehouse