import { useState } from "react";

import InvoiceInfo from "./InvoiceInfo";
import ItemTable from "./ItemTable";
import Summary from "./Summary";
import ActionButtons from "./ActionButtons";

const CreateInvoides = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
  ]);

  return (
    <div className="space-y-6 p-6 flex flex-col items-end">
      <InvoiceInfo />

      <ItemTable items={items} setItems={setItems} />

      <Summary items={items} />

      <ActionButtons />
    </div>
  );
};

export default CreateInvoides;
