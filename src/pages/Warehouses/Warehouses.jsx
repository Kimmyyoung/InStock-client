<<<<<<< HEAD
import AddWarehouse from "../AddNewWarehouse/AddNewWarehouse";
=======
import "./Warehouses.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import sortArrow from "../../assets/Icons/sort-24px.svg";
>>>>>>> develop

const Home = () => {
  const [deleteWarehouse, setDeleteWarehouse] = useState([""]); 
  const [sort, setSort] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fakeData = [
    {
      id: 1,
      warehouse_name: 'Manhattan',
      address: '503 Broadway',
      city: 'New York',
      country: 'USA',
      contact_name: 'Parmin Aujla',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'paujla@instock.com',
    },
    {
      id: 2,
      warehouse_name: 'Washington',
      address: '33 Pearl Street SW',
      city: 'Washington',
      country: 'USA',
      contact_name: 'Greame Lyon',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'glyon@instock.com',
    },
    {
      id: 3,
      warehouse_name: 'Jersey',
      address: '300 Main Street',
      city: 'New Jersey',
      country: 'USA',
      contact_name: 'Brad MacDonald',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'bmcdonald@instock.com',
    },
    {
      id: 4,
      warehouse_name: 'SF',
      address: '890 Brannnan Street',
      city: 'San Francisco',
      country: 'USA',
      contact_name: 'Gary Wong',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'gwong@instock.com',
    },
    {
      id: 5,
      warehouse_name: 'Santa Monica',
      address: '520 Broadway',
      city: 'Santa Monica',
      country: 'USA',
      contact_name: 'Sharon Ng',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'sng@instock.com',
    },
    {
      id: 6,
      warehouse_name: 'Seattle',
      address: '1201 Third Avenue',
      city: 'Seattle',
      country: 'USA',
      contact_name: 'Daniel Bachu',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'dbachu@instock.com',
    },
    {
      id: 7,
      warehouse_name: 'Miami',
      address: '2650 NW 5th Avenue',
      city: 'Miami',
      country: 'USA',
      contact_name: 'Alana Thomas',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'athomas@instock.com',
    },
    {
      id: 8,
      warehouse_name: 'Boston',
      address: '215 Essex Street',
      city: 'Boston',
      country: 'USA',
      contact_name: 'Vanessa Mendoza',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'vmendoza@instock.com',
    },
  ]


  const sortData = (e) => {
    const delHandle = (name, id) => {
      setDeleteWarehouse([name, id]);
    };
    const newWarehouses = [...fakeData];

    const fieldName =
      e.target.innerText !== "" ? e.target.innerText : e.target.name;

    let field = "";

    switch (fieldName) {
      case "WAREHOUSE":
        field = "name";
        break;
      case "ADDRESS":
        field = "address";
        break;
    }

    if (!sort) {
      const compare = (a, b) => {
        if (a[field] < b[field]) {
          return -1;
        }
        if (a[field] > b[field]) {
          return 1;
        }
        return 0;
      };
      setSort(true);
      
      return;
    }

    if (sort) {
      const compare = (a, b) => {
        if (a[field] < b[field]) {
          return 1;
        }
        if (a[field] > b[field]) {
          return -1;
        }
        return 0;
      };
      setSort(false);
    }
  };


  return (
    <>
    <div className="warehouse__container">
    
      <div className="warehouse__top">
        <h1 className="warehouse__title">Warehouses</h1>
        <div className="warehouse__topright">
          <input
            type="text"
            className="warehouse__search"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
          <Link to="/warehouses/new" className="warehouse__button">
            + Add New Warehouse
          </Link>
        </div>
      </div>

      <div className="warehouse__categories">
        <div className="warehouse__categoryAndArrow warehouse__categoryAndArrow-sort">
          <span className="warehouse__category " onClick={sortData}>
            WAREHOUSE
          </span>
          <img
            src={sortArrow}
            alt="sort arrow"
            className="warehouse__sortArrow"
          />
        </div>
        <div className="warehouse__categoryAndArrow warehouse__categoryAndArrow-sort">
          <span className="warehouse__category" onClick={sortData}>
            ADDRESS
          </span>
          <img
            src={sortArrow}
            className="warehouse__sortArrow"
            alt="sort arrow"
          />
        </div>
        <div className="warehouse__categoryAndArrow">
          <span className="warehouse__category">CONTACT NAME</span>
        </div>
        <div className="warehouse__categoryAndArrow">
          <span className="warehouse__category">CONTACT INFORMATION</span>
        </div>
        <span className="warehouse__category--right">ACTIONS</span>
      </div>

      {fakeData
        .map((warehouse) => (
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
              <Link to={`edit-warehouse/${warehouse.id}`}>
                <img
                  src={editIcon}
                  alt="edit icon"
                  className="warehouse__editicon"
                />
              </Link>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default Home
