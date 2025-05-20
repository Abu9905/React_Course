
import { CDN_URL } from "../utils/contants";

// ===== RestaurantCard =====//
const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRatingString} stars</h4>
      <h4>{info.costForTwo}</h4>
      <h4>{info.deliveryTime} mins</h4>
    </div>
  );
};
// ==== End of RestaurantCard =====//

export default RestaurantCard;