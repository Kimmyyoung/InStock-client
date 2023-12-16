

// export default inventor_list;
import InventoryList from "../../components/InventoryList/InventoryList";
import searchIcon from "./../../../src/assets/Icons/search-24px.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import sortArrow from "../../assets/Icons/sort-24px.svg";
import { useParams } from "react-router-dom"; 

import './inventory.scss';

const inventor_list = () => {
  const [inventories, setInventories] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/inventories/');
        result.data.find((inventory) => inventory.id === id);

        setInventories(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

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
    <main className="inventory_list">
      <div className="inventory_list__wrap">
       
      <div className="inventory_list__categories">
        <div className="inventory_list__categoryAndArrow inventory_list__categoryAndArrow-sort">
          <span className="inventory_list__category " onClick={sortData}>
            WAREHOUSE
          </span>
          <img
            src={sortArrow}
            alt="sort arrow"
            className="inventory_list__sortArrow"
          />
        </div>
        <div className="inventory_list__categoryAndArrow inventory_list__categoryAndArrow-sort">
          <span className="inventory_list__category" onClick={sortData}>
            ADDRESS
          </span>
          <img
            src={sortArrow}
            className="inventory_list__sortArrow"
            alt="sort arrow"
          />
        </div>
        <div className="inventory_list__categoryAndArrow">
          <span className="inventory_list__category">CONTACT NAME</span>
        </div>
        <div className="inventory_list__categoryAndArrow">
          <span className="inventory_list__category">CONTACT INFORMATION</span>
        </div>
        <span className="inventory_list__category--right">ACTIONS</span>
      </div>

          {inventories.slice(0, 8).map((inventoryList) => (
            <InventoryList key={inventoryList.id} inventory={inventoryList} />
          ))}
   
        </div>

    </main>
  );
};

export default inventor_list;
