import React from 'react'

// icons 
import delete_icon from '../../assets/icons/delete_outline-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';
import './WarehouseList.scss';

const WarehouseList = ({ props }) => {
  const { warehouse_name, address, contact_name, contact_phone, contact_email } = props;

  return (
    <>
    <div className="">
      <div className="list flex-mob-row">

        <div className="list__items list_items_name flex-mob-col">
          <p className="title forMob">Warehousename</p>
          <p className="list__items_p name">{warehouse_name}</p>
          <p className="title forMob">address</p>
          <p className="list__items_p">{address}</p>
        </div>

        <div className="list__items flex-mob-col">
          <p className="title forMob">contact</p>
          <p>{contact_name}</p>

          <p className="title forMob">contact information</p>

          <div className="list__contact_info">
            <p className="list__contact_phone">{contact_phone}</p>
            <p>{contact_email}</p>
          </div>
        </div>


          <div className="icon-container hideMob">
            <img src={delete_icon} alt="delete icon" />
            <img src={edit} alt="edit icon" />
          </div>
      </div>

      <div className="mob_icon forMob">
              <img src={delete_icon} alt="delete icon" />
            <img src={edit} alt="edit icon" />
      </div>
    </div>
    </>
  )
}

export default WarehouseList