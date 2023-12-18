
// icons 
import './WarehouseList.scss';
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './DeletionModal.scss';

import axios from 'axios';

Modal.setAppElement('#root');

const DeletionModal = ({ isOpen, onRequestClose, onDelete, warehouse_name }) => {

  // couldn't target this with the css so this was the best i could figure out on how to change the background color
  const modalStyle = {
    overlay: {
      backgroundColor: '#13182cc7',
      border: '2px solid #2E66E5',
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation"
      className={{
        base: 'deletion-modal',
        afterOpen: 'deletion-modal__content',
        beforeClose: 'deletion-modal__content',
      }}
      ClassName={{
        base: 'deletion-modal__overlay',
        afterOpen: 'deletion-modal__overlay',
        beforeClose: 'deletion-modal__overlay',
      }}
      style={modalStyle}
    >
      <div>
        <div className='deletion-modal__close-button-box'>
          <button onClick={onRequestClose} className="deletion-modal__close-btn">
            X
          </button>
        </div>
        <h2 className='deletion-modal__title'>Delete {warehouse_name} Warehouse?</h2>
        <p className='deletion-modal__message'>Please confirm that you'd like to delete {warehouse_name} from the list of warehouses. You won't be able to undo this action.</p>
        <div className='deletion-modal__button-box'>
          <button className='deletion-modal__button-cancel' onClick={onRequestClose}>Cancel</button>
          <button className='deletion-modal__button-delete' onClick={onDelete}>Delete</button>
        </div>
      </div>
      
    </Modal>
  );
};

const WarehouseList = ({warehouse, setDeleteWarehouse}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteWarehouse = async () => {

    try {
      const deleteRes = await axios.delete(`http://localhost:8080/api/warehouses/${warehouse.id}`)
    } catch (err) {
      console.log("Json error deleting data: ", err);
    }
  
  }

  const handleDelete = async () => {
    try {
      await deleteWarehouse();
      setIsModalOpen(false);
      setDeleteWarehouse(Math.random() * 100);
    } catch (err) {
      console.error("Error deleting warehouse:", err);
    }
  };


  return (
    <>
    <div className="warehouse" key={warehouse.id}>
            <div className="warehouse__text">
              <div className="warehouse__left">
                <Link
                  to={`/warehouse/${warehouse.id}`}
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
                onClick={() => setIsModalOpen(true)} 
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
            <DeletionModal
              isOpen={isModalOpen}
              onRequestClose={() => {
                setIsModalOpen(false);
              }}
              onDelete={handleDelete}
              warehouse_name={warehouse.warehouse_name}
            />
          </div>
    </>
  )
}

export default WarehouseList