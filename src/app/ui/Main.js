import FavoriteCarrousel from "./FavoriteCarrousel";
import BestSellerCarousel from "./BestSellerCarousel";

export default function Main() {
  return (
    <div className="container-fluid p-0">
      <FavoriteCarrousel />
      <BestSellerCarousel />
    </div>
  );
}
