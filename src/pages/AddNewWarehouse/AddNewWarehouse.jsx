import "./AddNewWarehouse.scss";

import { useState } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { validatePhoneNumber, validateEmail } from '../../utils/validation';

const AddNewWarehouse = () => {


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
            const response = await axios.post('http://localhost:8080/api/warehouses', warehouseDetails);

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
                                        <input className={`AddWarehouse__input ${hasError.warehouse_name ? 'AddWarehouse__input--error' : ''}`}
                                            type="text"
                                            id="warehouseName"
                                            name="warehouse_name"
                                            placeholder="Warehouse Name"
                                            value={warehouseDetails.warehouse_name}
                                            onChange={handleChange}
                                        />
                                        {/* Error Validation */}
                                        {hasError.warehouse_name && (
                                            <span className='AddWarehouse__error'>
                                                <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                                <span className="AddWarehouse__error-text">This field is required</span>
                                            </span>
                                        )}



                                    </div>
                                    <div>
                                        <label htmlFor="streetAddress">Street Address</label>
                                        <br />
                                        <input className={`AddWarehouse__input ${hasError.address ? 'AddWarehouse__input--error' : ''}`}
                                            type="text"
                                            id="streetAddress"
                                            name="address"
                                            placeholder="Street Address"
                                            value={warehouseDetails.address}
                                            onChange={handleChange}
                                        />
                                        {/* Error Validation */}
                                        {hasError.address && (
                                            <span className='AddWarehouse__error'>
                                                <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                                <span className="AddWarehouse__error-text">This field is required</span>
                                            </span>
                                        )}

                                    </div>
                                    <div>
                                        <label htmlFor="city">City</label>
                                        <br />
                                        <input className={`AddWarehouse__input ${hasError.city ? 'AddWarehouse__input--error' : ''}`}
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="City"
                                            value={warehouseDetails.city}
                                            onChange={handleChange}
                                        />
                                        {/* Error Validation */}
                                        {hasError.city && (
                                            <span className='AddWarehouse__error'>
                                                <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                                <span className="AddWarehouse__error-text">This field is required</span>
                                            </span>
                                        )}


                                    </div>
                                    <div>
                                        <label htmlFor="country">Country</label>
                                        <br />
                                        <input className={`AddWarehouse__input AddWarehouse__input--last ${hasError.country ? 'AddWarehouse__input--error' : ''}`}
                                            type="text"
                                            id="country"
                                            name="country"
                                            placeholder="Country"
                                            value={warehouseDetails.country}
                                            onChange={handleChange}
                                        />
                                        {/* Error Validation */}
                                        {hasError.country && (
                                            <span className='AddWarehouse__error'>
                                                <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                                <span className="AddWarehouse__error-text">This field is required</span>
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
                                    <input className={`AddWarehouse__input ${hasError.contact_name ? 'AddWarehouse__input--error' : ''}`}
                                        type="text"
                                        id="contactName"
                                        name="contact_name"
                                        placeholder="Contact Name"
                                        value={warehouseDetails.contact_name}
                                        onChange={handleChange}
                                    />
                                    {/* Error Validation */}
                                    {hasError.contact_name && (
                                        <span className='AddWarehouse__error'>
                                            <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                            <span className="AddWarehouse__error-text">This field is required</span>
                                        </span>
                                    )}


                                </div>
                                <div>
                                    <label htmlFor="position">Position</label>
                                    <br />
                                    <input className={`AddWarehouse__input ${hasError.contact_position ? 'AddWarehouse__input--error' : ''}`}
                                        type="text"
                                        id="position"
                                        name="contact_position"
                                        placeholder="Position"
                                        value={warehouseDetails.contact_position}
                                        onChange={handleChange}
                                    />
                                    {/* Error Validation */}
                                    {hasError.contact_position && (
                                        <span className='AddWarehouse__error'>
                                            <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                            <span className="AddWarehouse__error-text">This field is required</span>
                                        </span>
                                    )}


                                </div>
                                <div>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <br />
                                    <input className={`AddWarehouse__input ${hasError.contact_phone ? 'AddWarehouse__input--error' : ''}`}
                                        type="text"
                                        id="phoneNumber"
                                        name="contact_phone"
                                        placeholder="Phone Number"
                                        value={warehouseDetails.contact_phone}
                                        onChange={handleChange}
                                    />
                                    {/* Error Validation */}
                                    {hasError.contact_phone && (
                                        <span className='AddWarehouse__error'>
                                            <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                            <span className="AddWarehouse__error-text">Please enter a valid phone number in the format +X (XXX) XXX-XXXX</span>
                                        </span>
                                    )}


                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <br />
                                    <input className={`AddWarehouse__input AddWarehouse__input--last ${hasError.contact_email ? 'AddWarehouse__input--error' : ''}`}
                                        type="email"
                                        id="email"
                                        name="contact_email"
                                        placeholder="Email"
                                        value={warehouseDetails.contact_email}
                                        onChange={handleChange}
                                    />
                                    {/* Error Validation */}
                                    {hasError.contact_email && (
                                        <span className='AddWarehouse__error '>
                                            <img src={errorIcon} alt="Error Icon" className="AddWarehouse__error-icon" />
                                            <span className="AddWarehouse__error-text">Invalid email format</span>
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

export default AddNewWarehouse