import React, {useState } from "react";

const OrdersPage = () => {
    const [orderId, setOrderId] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const [customerId, setCustomerId] = useState(null);
    const [total, setTotal] = useState(0);
    const [orderNotes, setOrderNotes] = useState(null)

    const handleSubmit = () => {
        const orderObject = {
            orderId,
            orderStatus,
            customerId,
            total,
            orderNotes,
            timestamp: Date.now()
        }
        console.log(orderObject);
        const orderString = JSON.stringify(orderObject);
        alert("Order was submitted with the following details: " + orderString)
    }
    return (
      <>
        <h1>JJ</h1>
<div>
<div class="field">
  <label class="label">Order Id</label>
  <div class="control">
    <input class="input" type="text" value={orderId} onChange={(event) => {
        setOrderId(event.target.value)
    }} placeholder="Text input" />
  </div>
</div>
<div class="field">
  <label class="label">Order status</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" value={orderStatus} onChange={(event) => {
        setOrderStatus(event.target.value)
    }} />
  </div>
</div>
<div class="field">
  <label class="label">Customer Id</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" value={customerId} onChange={(event) => {
        setCustomerId(event.target.value)
    }}  />
  </div>
</div>
<div class="field">
  <label class="label">Total</label>
  <div class="control">
    <input class="input" type="text" placeholder="Total Amount" value={total} onChange={(event) => {
        setTotal(event.target.value)
    }} />
  </div>
</div>

<div class="field">
  <label class="label">Order Notes</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea" value={orderNotes} onChange={(event) => {
        setOrderNotes(event.target.value)
    }} />
  </div>
</div>

<div class="control">
  <button class="button is-primary" onClick={() => handleSubmit()}>Submit</button>
</div>

</div>
      </>
    );
  };
  
  export default OrdersPage;