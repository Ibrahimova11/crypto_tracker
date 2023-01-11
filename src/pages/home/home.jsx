import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es";
import { getProducts } from "../../components/service/getProducts";
import { addProductToFavorites } from "../../components/redux/slice/favorites";
import Footer from "../../components/Footer/Footer";
import "./home.css";

export const Home = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="total">
        <section className="table">
          <table>
            <thead>
              <tr className="class">
                <td>
                  <b>Rank</b>
                </td>
                <td>
                  <b>Logo</b>
                </td>
                <td>
                  <b>Coin Name</b>
                </td>
                <td>
                  <b>Price</b>
                </td>
                <td>
                  <b>Price Change</b>
                </td>
                <td>
                  <b>Market Cap</b>
                </td>
                <td>
                  <b>Add to Favourite</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((products, index) => {
                  return (
                    <tr key={index} className="table_row">
                      <td>{products.market_cap_rank}</td>
                      <td>
                        <img src={products.image} alt="" />
                      </td>
                      <td>{products.name}</td>
                      <td>${products.current_price}</td>
                      <td>{products.price_change_24h}%</td>
                      <td>{products.market_cap}</td>
                      <td>
                        <button
                          className="btn_1"
                          onClick={() => {
                            dispatch(addProductToFavorites(products));
                          }}
                        >
                          Add to Favorite
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
