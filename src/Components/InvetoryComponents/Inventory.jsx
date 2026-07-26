import InventoryHeader from "./Inventoryheader";
import Searchfilter from "./Searchfilter"
import Productlist from "./InventoryList"
const Inventory = () => {
    return(
        <>
            <InventoryHeader/>
            <Searchfilter/>
            <Productlist/>
        </>
    )
}

export default Inventory