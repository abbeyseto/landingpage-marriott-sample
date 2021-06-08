import React from 'react';
import { ReactComponent as Logo } from "../../assets/brandLogo.svg";
import { hotelBrands } from "../../components/utils/hotelBrands.js";
function index(props) {
    return (
        <div className="brands">
        <Logo className="App-logo" />
        <div>
          {hotelBrands &&
            hotelBrands.map((group, key) => {
              return (
                <div key={key} className="brand-type">
                  <p>{group.category}</p>
                  <ul className="list">
                    {group.hotels.map((hotel) => {
                      return (
                        <li>
                          <img
                            className="brand-images"
                            src={hotel.image}
                            alt={hotel.hotelname}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    );
}

export default index;