
// icons 
import './WarehouseList.scss';

import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";

import { Link } from 'react-router-dom';

const WarehouseList = ({warehouse}) => {

  const delHandle = () => {
    console.log("delete handled");
  };

  return (
    <>
    <div className="warehouse" key={warehouse.id}>
            <div className="warehouse__text">
              <div className="warehouse__left">
                <Link
                  to={`/warehouses/${warehouse.id}`}
                  className="warehouse__link"
                >
                  <div className="warehouse__nameAndArrow">
                    <p className="warehouse__name">{warehouse.warehouse_name}</p>

                    <img
                      src={rightArrow}
                      className="warehouse__rightArrow"
                      alt="right arrow"
                    />
                  </div>
                </Link>
                <p className="warehouse__address">
                  {warehouse.address}, {warehouse.city}, {warehouse.country}
                </p>
              </div>
              <div className="warehouse__right">
                <p className="warehouse__contact">{warehouse.contact_name}</p>
                <p className="warehouse__contactinfo">
                  <span>{warehouse.contact_phone}</span>
                  <span>{warehouse.contact_email}</span>
                </p>
              </div>
            </div>
            <div className="warehouse__icons">
              <img
                onClick={() => delHandle(warehouse.name, warehouse.id)} 
                src={deleteIcon}
                alt="delete icon"
                className="warehouse__deleteicon"
              />
              <Link to={`editWarehouse/${warehouse.id}`}>
                <img
                  src={editIcon}
                  alt="edit icon"
                  className="warehouse__editicon"
                />
              </Link>
            </div>
          </div>
    </>
  )
}

export default WarehouseList