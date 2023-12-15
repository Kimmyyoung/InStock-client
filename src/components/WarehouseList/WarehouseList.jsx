
// icons 
import './WarehouseList.scss';
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import './DeletionModal.scss';

Modal.setAppElement('#root');

const DeletionModal = ({ isOpen, onRequestClose, onDelete, city }) => {
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
      // overlayClassName={{
      //   base: 'deletion-modal__overlay',
      //   afterOpen: 'deletion-modal__overlay',
      //   beforeClose: 'deletion-modal__overlay',
      // }}
    >
      <div>
        <div className='deletion-modal__close-button-box'>
          <button onClick={onRequestClose} className="deletion-modal__close-btn">
            X
          </button>
        </div>
        <h2>Delete {city} Warehouse?</h2>
        <p className='deletion-modal__message'>Please confirm that you'd like to delete {city} from the list of warehouses. You won't be able to undo this action.</p>
        <div className='deletion-modal__button-box'>
          <button className='deletion-modal__button-cancel' onClick={onRequestClose}>Cancel</button>
          <button className='deletion-modal__button-delete' onClick={onDelete}>Delete</button>
        </div>
      </div>
    </Modal>
  );
};

const WarehouseList = ({warehouse}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteWarehouse = () => {
    console.log("warehouse deleted");
  }

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
              onRequestClose={() => setIsModalOpen(false)}
              onDelete={deleteWarehouse}
              city={warehouse.city}
            />
          </div>
    </>
  )
}

export default WarehouseList