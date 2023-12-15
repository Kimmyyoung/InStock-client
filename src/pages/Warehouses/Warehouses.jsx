import "./Warehouses.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import sortArrow from "../../assets/Icons/sort-24px.svg";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import axios from "axios";


const Home = () => {
  const [deleteWarehouse, setDeleteWarehouse] = useState([""]); 
  const [sort, setSort] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [ warehouses, setWarehouses ] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8080/warehouses');
      setWarehouses(result.data);
    }

    fetchData();
  }, []);


  console.log(warehouses);

  const sortData = (e) => {
    // will apply later
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
          <Link to="/warehouses/add" className="warehouse__button">
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

      {warehouses
        .map((warehouse) => (
          <WarehouseList key={warehouse.id} warehouse={warehouse} />
        ))}

    </div>
    </>
  )
}

export default Home