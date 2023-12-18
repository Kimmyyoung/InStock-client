import { useEffect, useState } from "react";
import axios from "axios";
import "./WarehouseDetails.scss";
import "./Inventory.scss";
import { Link, useParams } from "react-router-dom";
import arrowBack from './../../assets/Icons/arrow_back-24px.svg'
import editIcon from './../../assets/Icons/edit-24px.svg'
import Inventory from "./../Inventory/Inventory";


const warehouseDetails = () => {

  const params = useParams();

  const [isMobile, setIsMobile ] = useState(false);
  const [warehouseDetails, setWarehouseDetails] = useState({});

  useEffect(() => {

    const id = params.warehouseId;

    const fetchWarehouse = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/warehouses/${id}`)
        console.log("the response is: ", response.data);
        setWarehouseDetails(response.data);
      } catch (err) {
        console.log("error fetching warehouse data: ", err);
      }
    }

    fetchWarehouse(id);

  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
      window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]); 

  return (

    <>

    <div className="warehouse__container">
      <div className="warehouse__top">
        <div className="warehouse__title-box">
          <h1 className="warehouse__title"><Link to="/"><img src={arrowBack}/></Link>{warehouseDetails.city}</h1>
          <div className="warehouse__title-icon-frame">
            {/* <Link to={`/editWarehouse/:${params}`}>
              <img className="warehouse__title-icon" src={editIcon}/>
            </Link> */}
            <Link to={`/editWarehouse/:${params}`} className="warehouse__button">
                <img src={editIcon} className="warehouse__button__icons" />
                {isMobile? '' : 'Edit'}
            </Link>
              {/* <p className="warehouse__title-icon-text">Edit</p> */}
          </div>
        </div>
        <div className="warehouse__topright">

          <article className="details__info">
    

            <div className="details__address">
              <p className="details__address-title">Warehouse Address:</p>
              <div className="details__address-places-box">
                <p className="details__address-info">{warehouseDetails.address} </p>
                <p className="details__address-info">{warehouseDetails.city}, </p>
                <p className="details__address-info">{warehouseDetails.country}</p>
              </div>
            </div>

            <article className="details__info-contact">
              <div className="details__info-comm">
                <p className="details__info-title">Contact name: </p>
                <p className="details__info-contact-details">{warehouseDetails.contact_name}</p>
                <p className="details__info-contact-details">{warehouseDetails.contact_position}</p>
              </div>
              <div className="details__info-comm">
                <p className="details__info-title">Contact information: </p>
                <p className="details__info-contact-details">{warehouseDetails.contact_phone}</p>
                <p className="details__info-contact-details">{warehouseDetails.contact_email}</p>
              </div>
            </article>

          </article>

        </div>
      </div>

      <Inventory/>

      </div>
    </>

  )

}

export default warehouseDetails;