import './InventoryItemDetails.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// icon
import EditIcon from '../../assets/Icons/edit-24px.svg';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';


export default function InventoryItemDetails() {

    const [isMobile, setIsMobile ] = useState(false);
    const [ isOutOfStock, setIsOutOfStock ] = useState(false);

    const { id } = useParams();
    const [inventory, setInventory] = useState({});


    useEffect(()=>{
      const fetchData = () => {
        axios.get('http://localhost:8080/api/inventories/' + id)
        .then((res)=> {
          setInventory(res.data);
          setIsOutOfStock(res.data.quantity === 0);
        })
        .catch((err) => {console.error(err)})
      }

      fetchData();
    }, [id])


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
        <div className="inventory__container">
          <div className="inventory__top">

            <div className="inventory__top__right">
              <img src={ArrowBack} className="inventory__top__back" />
              <h1 className="inventory__name">
              {inventory.item_name}
              </h1>
            </div>


            <div className="inventory__topright">
              <Link to={`/editInventory/${id}`} className="inventory__button">
                <img src={EditIcon} className="inventory__button__icons" />
                {isMobile? '' : 'Edit'}
              </Link>
            </div>

          </div>

         {/* details  */}
         <div className="detail">

        <div className="detail__right">
            <div className="block">
              <p className="detail__title">item description:</p>
              <p>
              {inventory.description}
              </p>
            </div>

            <div className="block">
              <p className="detail__title">
              category:
              </p>
              <p>{inventory.category}</p>
            </div>
        </div>

        <div className="detail__left">
          <div className="flex-row">     
          
              <div className="block">
                <p className="detail__title">status:</p>
                <p className={`${isOutOfStock ? 'detail__outofstock' : 'detail__stock'}`}>{inventory.status}</p>
              </div>


              <div className="block">
                <p className="detail__title">quantity:</p>
                <p>{inventory.quantity}</p>
              </div>
        </div>


            <div className="block">
              <p className="detail__title">warehouse:</p>
              <p>Manhattan</p>
            </div>

            </div>

         </div>
      </div>
    </>
    );
  }