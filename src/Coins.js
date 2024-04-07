import axios from 'axios';
import React, { useEffect, useState } from "react";


export default function Coins() {
    const[coins, setcoins] = useState();
    useEffect(() =>{
        axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then((res) => setcoins(res.data))
      .catch((err) => console.log(err));
      console.log("After useEffect-Coins will be updated with data");

      console.log(coins);
    
    },[]);

  return (
    <div>
        <h1 className='bg-secondary text-white text-center mt-4'  > Coin Data</h1>
        <div className="row">

<div className="col-md-12">

  <table class="table">

    <thead>

      <tr > 
      <th scope="col">Image</th>

        <th scope="col">ID</th>

        <th scope="col">SYMBOL</th>

        <th scope="col">NAME</th>
        

      </tr>

    </thead>

    <tbody>

      {coins ? (

        coins.map((coins) => (

          <tr key={coins.id}>

<td>
            <img src={coins.image} alt={coins.name} style={{ width: '50px', height: '50px' }} />
            </td>

            <td>{coins.id}</td>

            <td>{coins.symbol}</td>

            <td>{coins.name}</td>

            

          </tr>

        ))

      ) : (

        <tr>

          <td><div class="spinner-border" role="status">

            <span class="visually-hidden">Loading...</span>

          </div></td>

          <td>Loading...</td>

        </tr>

      )}

    </tbody>

  </table>

</div>

</div>

</div>

);

}


   
   
   
  

