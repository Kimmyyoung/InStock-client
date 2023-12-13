import React from 'react'

// icons 
import delete_icon from '../../assets/icons/delete_outline-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';
import './WarehousList.scss';

const WarehouseList = ({ props }) => {
  const { warehouse_name, address, contact_name, contact_phone, contact_email } = props;

  return (
    <tr className="list">
      <td className="list__name">{warehouse_name} > </td>
      <td>{address}</td>
      <td>{contact_name}</td>
      <td>
        <span>{contact_phone}</span>
        <br />
        <span>{contact_email}</span>
      </td>
      <td>
        <img src={delete_icon} alt="delete icon" />
        <img src={edit} alt="edit icon" />
      </td>
  </tr>
  )
}

export default WarehouseList