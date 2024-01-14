import "./InventoryList.scss";
import { useState } from "react";
import delete_icon from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import './DeletionModal.scss';

import axios from 'axios';

Modal.setAppElement('#root');

const DeletionModal = ({ isOpen, onRequestClose, onDelete, item }) => {

  // couldn't target this with the css so this was the best i could figure out on how to change the background color
  const modalStyle = {
    overlay: {
      backgroundColor: '#13182cc7',
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
        <h2 className='deletion-modal__title'>Delete {item} Inventory Item?</h2>
        <p className='deletion-modal__message'>Please confirm that you’d like to delete {item} from the inventory list. You won’t be able to undo this action.</p>
        <div className='deletion-modal__button-box'>
          <button className='deletion-modal__button-cancel' onClick={onRequestClose}>Cancel</button>
          <button className='deletion-modal__button-delete' onClick={onDelete}>Delete</button>
        </div>
      </div>
      
    </Modal>
  );
};

const InventoryList = ({ inventory, setDeleteInventory }) => {
  const { id, item_name, category, status, quantity, warehouse_name } = inventory;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteInventoryItem = async () => {

    try {
      const deleteRes = await axios.delete(`http://localhost:8080/api/inventories/${inventory.id}`)
    } catch (err) {
      console.log("Json error deleting data: ", err);
    }
  
  }

  const handleDelete = async () => {
    try {
      await deleteInventoryItem();
      setIsModalOpen(false);
      setDeleteInventory(Math.random() * 100);
    } catch (err) {
      console.error("Error deleting Inventory Item:", err);
    }
  };

  const statusClass =
    status === "In Stock" ? "status-instock" : "status-outofstock";

  return (
    <div >
      <div className="inventory__list" key={id}>
        <div className="inventory__item inventory__item-icon warehouse__nameAndArrow ">
          <Link to={`/inventory/${id}`} className="inventory__item-link">
            <p id="item_name" className="item__name">
              {item_name}
            </p>
            <img
              src="/src/assets/Icons/chevron_right-24px.svg"
              className="inventory__rightArrow"
              alt="right arrow"
            />
          </Link>
        </div>

        <div id="category" className="inventory__item">
          <p className="category"> {category}</p>
        </div>

        <div id="status" className="inventory__item">
          <p className={`status ${statusClass}`}>{status}</p>
        </div>
        <div id="qty" className="inventory__item">
          <p className="qty">{quantity}</p>
        </div>
        <div id="warehouse_name" className="inventory__item">
          <div>{warehouse_name}</div>
        </div>
        <div className="inventory__item inventory__item--move">
          <img onClick={() => setIsModalOpen(true)} className="delete_icon" src={delete_icon} alt="delete icon" />
          <Link to={`/editInventory/${id}`} className="edit_icon-link">
            <img className="edit_icon" src={edit} alt="edit icon" />
          </Link>
        </div>
      </div>

      {/* Mobile  */}

      <div className="inventory__list-mobile inventory__list-mobile--warehouse">
        <div className="inventory__row1-mobile">
          <div className="left-column">
            <div className="inventory__block1">
              <div className="inventory__title">INVENTORY ITEM</div>
              <div id="item_name" className="inventory__item">
                {item_name}
              </div>
            </div>

            <div className="inventory__block2">
              <div className="inventory__title">CATEGORY</div>
              <div id="category_mobile" className="inventory__item">
                <p className="category"> {category}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="inventory__block3">
              <div className="inventory__title">STATUS</div>
              <div id="status_mobile" className="inventory__item">
                <p className={`status ${statusClass}`}>{status}</p>
              </div>
            </div>

            <div className="inventory__block4">
              <div className="inventory__title">QTY</div>
              <div id="qty_mobile" className="inventory__item">
                <p className="qty">{quantity}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="inventory__row1-mobile">
          <div className="left-column"></div>

          <div className="right-column">
            <div className="inventory__block5">
              <div className="inventory__title">WAREHOUSE</div>
              <div id="warehouse_name_mobile" className="inventory__item">
                <div>{warehouse_name}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="inventory__row4-mobile">
          <img
            onClick={() => setIsModalOpen(true)}
            className="delete_icon"
            src={delete_icon}
            alt="delete icon"    
          />
          <img className="edit_icon" src={edit} alt="edit icon" />
        </div>
      </div>
      <DeletionModal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        onDelete={handleDelete}
        item={inventory.item_name}
      />
    </div>
  );
};

export default InventoryList;
