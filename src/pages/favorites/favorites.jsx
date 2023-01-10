import Navbar from "../../components/Navbar/Navbar";
import React from "react";


import { useDispatch, useSelector } from "react-redux/es";
import { clearFavorites, removeProductFromFavorites } from "../../components/redux/slice/favorites";
import "./favorites.css"
const Favorites = () => {
  const { products } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
       <h3>Delete all products:</h3>
       <button className="btn" onClick={() => dispatch(clearFavorites())}>Clear</button>
      <section className='table'>
<table>
        <thead>
            <tr className='class' >
                <td ><b>Rank</b></td>
                <td><b> Logo</b></td>
                <td><b>Coin Name</b></td>
                <td><b>Price</b></td>
                <td><b>Price Change</b></td>
                <td><b>Market Cap</b></td>
                <td ><b>Add to Favourite</b></td>

            </tr>
        </thead>
        <tbody>
            {products && products.map((products)=>{
                return (
                    <tr>
                        <td>{products.market_cap_rank}</td>
                        <td><img src={products.image} alt="" /></td>
                        <td>{products.name}</td>
                        <td>${products.current_price}</td>
                        <td>{products.price_change_24h}%</td>
                        <td>{products.market_cap}</td>
                        

                         <button className="btn_2"
                                       onClick={() => dispatch(removeProductFromFavorites(products.id))}
                                    >
                                       Remove
                                     </button>
                      
                        

                </tr>
                )
               
            })}
        </tbody>
    </table>
    </section>
      


        
    </div>
  );
};

export default Favorites;


// <h2>Favorites</h2>
//       <button onClick={() => dispatch(clearFavorites())}>Clear</button>

// <button
//               onClick={() => dispatch(removeProductFromFavorites(product.id))}
//             >
//               Remove
//             </button>
