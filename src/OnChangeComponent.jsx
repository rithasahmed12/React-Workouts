import React,{useState} from 'react';

function MyNewComponent(){
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment,setComment] = useState('');
    const [payment,setPayment] = useState('');
    const [shipping,setShipping] = useState('')


    function handeleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handeleNameChange} />
            <p>Name: {name}</p>

            <input type='number' value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment}  onChange={handlePaymentChange}>
                <option value='' >Select an option</option>
                <option value='visa' >Visa</option>
                <option value='Mastercard' >Mastercard</option>
                <option value='Giftcard' >Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up" 
                checked={shipping === 'Pick up'}
                onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery" 
                checked={shipping === 'Delivery'}
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyNewComponent