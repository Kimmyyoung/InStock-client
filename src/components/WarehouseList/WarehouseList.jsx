import React from 'react'

// icons 
import delete_icon from '../../assets/icons/delete_outline-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';
import './WarehousList.scss';

const WarehouseList = ({ props }) => {
  const { warehouse_name, address, contact_name, contact_phone, contact_email } = props;

  return (
    <tr className="list">
        <td className="list__name" id="name">{warehouse_name} > </td>
        <td id="address">{address}</td>

    

        <td id="contact">{contact_name}</td>
        <td id="contact-info">
          <span>{contact_phone}</span>
          <br />
          <span>{contact_email}</span>
        </td>


      <td className="list__actions" id="actions">
        <div className="icon-container">
        <img src={delete_icon} alt="delete icon" />
        <img src={edit} alt="edit icon" />
        </div>
      </td>
  </tr>
  )
}

export default WarehouseList