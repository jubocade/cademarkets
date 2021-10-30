import {React, useEffect} from 'react';
import '../styles/Homepage.css';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setTopCoins} from '../redux/actions/actions';
import { Link } from 'react-router-dom';
const Homepage = () => {
    const topCoins = useSelector(state => state.setTopCoinsReducer.payload);
    const dispatch = useDispatch();

   const fetchData = async () => {
       const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false').catch(err => console.log('This is an error', err)).then(response => dispatch(setTopCoins(response.data)));
   }

  useEffect(() => {
      fetchData();
  }, []);

  setInterval(fetchData, 300000);
    return (
        <div className="homepage">
            <section className="section-one">
                <h1>Buy and Sell Crypto Instantly!</h1>
                <Link to="/register">
                    <button className="register-button-homepage">
                        Register Now
                    </button>
                </Link>
            </section>

            <section className="section-two">
                <div className="top-coins-container">
                    {
                        topCoins ? (
                            topCoins.map(coin => (
                                <Link to={`/coin/${coin.id}`} key={coin.id}>
                                    <div className="coin-container">
                                        <h3>{coin.name}</h3>
                                        <div className="coin-image-container">
                                            <img src={coin.image} alt={`${coin.name} image`} />
                                        </div>
                                        <h1>${coin.current_price.toLocaleString()}</h1>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="loader"> Loading... </div>
                        )

                    }
                </div>
            </section>
        </div>
    )
}

export default Homepage;
