import { useEffect, useState } from "react";
import axios from "axios";
import "./WarehouseDetails.scss";
import { Link, useParams } from "react-router-dom";
import icon1 from "./../../assets/Icons/arrow_back-24px.svg";
import icon2 from "./../../assets/Icons/edit-24px-white.svg";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

const warehouseDetails = () => {
  const params = useParams();

  const [warehouseDetails, setWarehouseDetails] = useState({});
  const [inventories, setInventories] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    const id = params.warehouseId;

    const fetchWarehouse = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/warehouses/${id}`)
        console.log("the response is: ", response.data);
        setWarehouseDetails(response.data);
      } catch (err) {
        console.log("error fetching warehouse data: ", err);
      }
    };

    fetchWarehouse(id);

    // Fetch inventory data here
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/api/inventories/"
        );
        setInventories(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.warehouseId]);

  const sortData = (field) => {
    const sortedInventories = [...inventories].sort((a, b) => {
      if (sortAscending) {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    setInventories(sortedInventories);
    setSortAscending(!sortAscending);
  };

  return (
    <>
      <div className="warehouse__container warehouse__container--width">
        <div className="warehouse__top warehouse__top--width">
          <div className="warehouse__title-box">
            <h1 className="warehouse__title">
              <Link to="/">
                <img src={icon1} alt="Back" />
              </Link>
              {warehouseDetails.city}
            </h1>
            <div className="warehouse__title-icon-frame">
              <Link to={`/editWarehouse/:${params.warehouseId}`}>
                <img className="warehouse__title-icon" src={icon2} alt="Edit" />
              </Link>
              <p className="warehouse__title-icon-text">Edit</p>
            </div>
          </div>
          <div className="warehouse__topright">
            <article className="details__info details__info--border-bottom">
              <div className="details__address">
                <p className="details__address-title">Warehouse Address:</p>
                <div className="details__address-places-box">
                  <p className="details__address-info">
                    {warehouseDetails.address}{" "}
                  </p>
                  <p className="details__address-info">
                    {warehouseDetails.city},{" "}
                  </p>
                  <p className="details__address-info">
                    {warehouseDetails.country}
                  </p>
                </div>
              </div>
              <article className="details__info-contact">
                <div className="details__info-comm">
                  <p className="details__info-title">Contact name: </p>
                  <p className="details__info-contact-details">
                    {warehouseDetails.contact_name}
                  </p>
                  <p className="details__info-contact-details">
                    {warehouseDetails.contact_position}
                  </p>
                </div>
                <div className="details__info-comm">
                  <p className="details__info-title">Contact information: </p>
                  <p className="details__info-contact-details">
                    {warehouseDetails.contact_phone}
                  </p>
                  <p className="details__info-contact-details">
                    {warehouseDetails.contact_email}
                  </p>
                </div>
              </article>
            </article>

            <article className="warehouse-inventory ">
              <div className="warehouse-inventory__wrap ">
                <div className="warehouse-inventory__content">
                  <div className="warehouse-inventory__row">
                    <div id="1" className="warehouse-inventory__title">
                      <span onClick={() => sortData("item_name")}>
                        INVENTORY ITEM
                      </span>
                      <img
                        src="/src/assets/Icons/sort-24px.svg"
                        alt="sort arrow"
                        className="warehouse-inventory__sortArrow"
                      />
                    </div>
                    <div id="2" className="warehouse-inventory__title">
                      <span onClick={() => sortData("category")}>CATEGORY</span>
                      <img
                        src="/src/assets/Icons/sort-24px.svg"
                        alt="sort arrow"
                        className="warehouse-inventory__sortArrow"
                      />
                    </div>
                    <div id="3" className="warehouse-inventory__title">
                      <span onClick={() => sortData("status")}>STATUS</span>
                      <img
                        src="/src/assets/Icons/sort-24px.svg"
                        alt="sort arrow"
                        className="warehouse-inventory__sortArrow"
                      />
                    </div>
                    <div id="4" className="warehouse-inventory__title">
                      <span onClick={() => sortData("quantity")}>QTY</span>
                      <img
                        src="/src/assets/Icons/sort-24px.svg"
                        alt="sort arrow"
                        className="warehouse-inventory__sortArrow"
                      />
                    </div>
                    <div id="6" className="warehouse-inventory__title-last">
                      ACTIONS
                    </div>
                  </div>
                  {inventories.slice(0, 8).map((inventory) => (
                    <WarehouseInventoryList
                      key={inventory.id}
                      inventory={inventory}
                    />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default warehouseDetails;
