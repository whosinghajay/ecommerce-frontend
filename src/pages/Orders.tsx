import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
  const [row, setRow] = useState<DataType[]>([
    {
      _id: "ajayyaja",
      amount: 121,
      quantity: 14334,
      discount: 12,
      status: <span className="red">Processing</span>,
      action: <Link to={"/order/ajayyaja"}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    row,
    "dashboard-product-box",
    "Orders",
    // true
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
