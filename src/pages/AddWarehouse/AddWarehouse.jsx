import { useState } from 'react';
import arrow_back from "../../assets/Icons/arrow_back-24px.svg";
import { NavLink } from 'react-router-dom';
import "./AddWarehouse.scss";

const AddWarehouse = () => {
    const [warehouseDetails, setWarehouseDetails] = useState({
        warehouseName: '',
        streetAddress: '',
        city: '',
        country: '',
        contactName: '',
        position: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWarehouseDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // Handle cancel Button
    const handleCancel = () => {
        console.log('Cancelled');
    };

    // Handle add warehouse Button
    const handleAddWarehouse = () => {
        console.log('Added Warehouse', warehouseDetails);
    };

    return (
        <section className='AddWarehouse'>
            <div className="AddWarehouse__container">
                <NavLink to="/">
                    <div className="AddWarehouse__back-icon">
                        <img src={arrow_back} alt="back_button" />
                    </div>
                </NavLink>
                <div className='AddWarehouse__title'>Add New Warehouse</div>
            </div>

            {/* Warehouse Details */}
            <div className="AddWarehouse__details-container">

                <div className='AddWarehouse__main-container'>

                    <form className='AddWarehouse__components-container'>
                        <div className='AddWarehouse__subcontainer'>
                            <div className='AddWarehouse__warehouse-container'>
                                <h2 className='AddWarehouse__sub-title'>Warehouse Details</h2>
                                <div className='AddWarehouse__warehouse'>
                                    <div>
                                        <label htmlFor="warehouseName">Warehouse Name</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="warehouseName"
                                            name="warehouseName"
                                            placeholder="Warehouse Name"
                                            value={warehouseDetails.warehouseName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="streetAddress">Street Address</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="streetAddress"
                                            name="streetAddress"
                                            placeholder="Street Address"
                                            value={warehouseDetails.streetAddress}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city">City</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="City"
                                            value={warehouseDetails.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country">Country</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            placeholder="Country"
                                            value={warehouseDetails.country}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="AddWarehouse__contact-container">
                                <h2 className='AddWarehouse__sub-title'>Contact Details</h2>
                                <div>
                                    <label htmlFor="contactName">Contact Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        placeholder="Contact Name"
                                        value={warehouseDetails.contactName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="position">Position</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="position"
                                        name="position"
                                        placeholder="Position"
                                        value={warehouseDetails.position}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={warehouseDetails.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <br />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={warehouseDetails.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </div>


                        <div className='AddWarehouse__button-container'>
                            <button className='AddWarehouse__cancel-btn' type="button" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className='AddWarehouse__add-btn' type="button" onClick={handleAddWarehouse}>
                                + Add Warehouse
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </section>

    )
}

export default AddWarehouse