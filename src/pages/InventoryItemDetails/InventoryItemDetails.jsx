import './InventoryItemDetails.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// icon
import EditIcon from '../../assets/Icons/edit-24px_white.svg';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';


export default function InventoryItemDetails() {

    const [isMobile, setIsMobile ] = useState(false);
    const [ isOutOfStock, setIsOutOfStock ] = useState(false);

    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const navigate = useNavigate();


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

      <div className="inventoryItem">
        <div className="inventoryItem__container">
          <div className="inventoryItem__top">

            <div className="inventoryItem__top__right" onClick={()=> navigate('/inventory')}>
              <img src={ArrowBack} className="inventoryItem__top__back" />
              <h1 className="inventoryItem__name">
              {inventory.item_name}
              </h1>
            </div>


            <div className="inventoryItem__topright">
              <Link to={`/editInventory/${id}`} className="inventoryItem__button">
                <img src={EditIcon} className="inventoryItem__button__icons" />
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
      </div>
    </>
    );
  }