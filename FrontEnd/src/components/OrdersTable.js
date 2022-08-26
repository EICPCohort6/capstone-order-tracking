import { Table } from "reactstrap";

const OrdersTable = (props) => {
  const { customerOrders } = props;
  console.log("hey", customerOrders);
  return (
    <div>
      <h1>Orders Table</h1>

      <Table>
          <thead>
            <tr>
            <th>#</th>
              <th>Customer Id</th>
            <th>Order Id</th>
            <th>Order Status Code</th>
            <th>Total Order Price</th>
              <th>Order Notes</th>
              <th>Time Stamp</th>
            </tr>
          </thead>
          <tbody>
            {customerOrders.map((order, index) => (
            <tr>
              <th scope="row">{index}</th>
              <td>{order.customerId}</td>
              <td>{order.orderId}</td>
              <td>{order.orderStatus}</td>
              <td>{order.total}</td>
              <td>{order.orderNotes}</td>
              <td>{order.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  );
};


export default OrdersTable;
