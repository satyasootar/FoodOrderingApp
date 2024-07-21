import { CARDIMG_URL } from "../utils/constants";

const RestroCard =(props) =>{
    const {resData} = props;
      
    const {name,cuisines,avgRating,costForTwo,deliveryTime} = resData.data;
     
    return(
        <div className="res-card">
            <img className="res-card-logo"  src={CARDIMG_URL}  alt="foodLogo" />
             <h3>{name}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{avgRating} stars</h4>
             <h4>₹{costForTwo / 100} FOR TWO</h4>
             <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestroCard;