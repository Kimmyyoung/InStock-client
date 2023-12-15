import InventoryList from "../../components/InventoryList/InventoryList";
import searchIcon from "./../../../src/assets/Icons/search-24px.svg";

const Inventory = () => {
  const fakeData = [
    {
      id: 1,
      warehouse_id: 1,
      item_name: "Television",
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: "Electronics",
      status: "In Stock",
      quantity: 500,
    },
    {
      id: 2,
      warehouse_id: 1,
      item_name: "Gym Bag",
      description:
        "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
      category: "Gear",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 3,
      warehouse_id: 1,
      item_name: "Hoodie",
      description:
        "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
      category: "Apparel",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 4,
      warehouse_id: 1,
      item_name: "Keychain",
      description:
        "Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.",
      category: "Accessories",
      status: "In Stock",
      quantity: 2000,
    },
    {
      id: 5,
      warehouse_id: 1,
      item_name: "Shampoo",
      description: "Natural shampoo made from 99% biodegradable ingredients.",
      category: "Health",
      status: "In Stock",
      quantity: 4350,
    },
    {
      id: 6,
      warehouse_id: 1,
      item_name: "Phone Charger",
      description:
        "This USB-C phone charger features fast charging for the latest devices.",
      category: "Electronics",
      status: "In Stock",
      quantity: 10000,
    },
    {
      id: 7,
      warehouse_id: 1,
      item_name: "Tent",
      description:
        "Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.",
      category: "Gear",
      status: "In Stock",
      quantity: 800,
    },
    {
      id: 8,
      warehouse_id: 1,
      item_name: "Winter Jacket",
      description:
        "Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. breathable layers without a ton of vents and perforations.",
      category: "Apparel",
      status: "Out of Stock",
      quantity: 0,
    },
 
  ];

  return (
    <main className="inventory">
      <div className="inventory__wrap">
        <div className="inventory__header">
          <div className="inventory__header-title-wrap">
            <h1 className="inventory__header-title">Inventory</h1>
          </div>

          <div className="inventory__header-search">
            <div className="inventory__input-wrap">
              <input
                className="inventory__input"
                type="text"
                placeholder="Search..."
              />
              <span
                className="inventory__search-icon"
                style={{ backgroundImage: `url(${searchIcon})` }}
              ></span>
            </div>

            <button type="button">+ Add New Item</button>
          </div>
        </div>

        <div className="inventory__content">
          <div className="inventory__row">
            <div id="1" className="inventory__title">
             <span> INVENTORY ITEM</span>
              <img src="/src/assets/Icons/sort-24px.svg" alt="sort arrow" className="inventory__sortArrow"></img>
            </div>
            <div id="2" className="inventory__title">
            <span>CATEGORY</span>
             <img src="/src/assets/Icons/sort-24px.svg" alt="sort arrow" className="inventory__sortArrow"></img>
            </div>
            <div id="3" className="inventory__title">
             <span>STATUS</span>
             <img src="/src/assets/Icons/sort-24px.svg" alt="sort arrow" className="inventory__sortArrow"></img>
            </div>
            <div id="3" className="inventory__title">
            <span> QTY</span>
             <img src="/src/assets/Icons/sort-24px.svg" alt="sort arrow" className="inventory__sortArrow"></img>
            </div>
            <div id="5" className="inventory__title">
           <span>WAREHOUSE</span>
            <img src="/src/assets/Icons/sort-24px.svg" alt="sort arrow" className="inventory__sortArrow"></img>
            </div>
            <div id="6" className="inventory__title-last">
            ACTIONS
            </div>
          </div>

          {fakeData.map((item) => (
            <InventoryList key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Inventory;




