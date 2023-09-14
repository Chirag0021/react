import React , { useState } from 'react';


function Shoping()
{
    const Itemname = [
        {
            id:1, name:'Airpods',price:10,quantity:1
        },
        {
            id:2, name:'Phone',price:50,quantity:1
        },
        {
            id:3, name:'Airdots',price:30,quantity:1
        }
    ];

    const [cartitem , setitem] = useState([]);
    const [incrementValue, setIncrementValue] = useState(1);

    const addtocart = (item) =>
    {
        const itemduplicate = cartitem.find((cartitem) => cartitem.id == item.id)
        if(itemduplicate)
        {
            quantity : itemduplicate.quantity+incrementValue;
            console.log(item.id,itemduplicate.quantity);
            alert('You add duplicate thing plz increment quantity');
        }
        else{
                setitem([...cartitem,item]);
        }
        
    };


    return(
        <div>
                <h1>Shooping Cart</h1>
                <div className='Item-list'>
                    <h2>available items</h2>
                    <ul>
                        {Itemname.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price} - {item.quantity} 
                                <button onClick={() => addtocart(item)}>Add to cart</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <Cart cartitem={cartitem} setitem={setitem}/>
                <div>
        <label>
          Increment Value:
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(parseInt(e.target.value))}
          />
        </label>
      </div>
        </div>
    );

}

function Cart({cartitem,setitem}) {
//     const [counter,setcounter] = useState(0);
// const Increment = () =>
// {
//     setcounter(counter+1);
// }
const incrementQuantity = (itemId) => {
    const updatedCartItems = cartitem.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
   
    setitem(updatedCartItems);
  };
    return(
        <div className='cart'>
            <h2>Shooping Cart</h2>
            <ul>
                {cartitem.map((item,index) =>(
                    <li key={index}>
                        {item.name} - ${item.price}  - {item.quantity}<br />
                        
                        <button onClick={incrementQuantity} >Increment</button>
                    </li>
                ))}
            </ul>
            </div>
    );
}

export default Shoping;