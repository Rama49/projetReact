import Rect1 from "./Rect1.png";
import Rect2 from "./Rect2.png";
import Rect3 from "./Rect3.png";
import Rect4 from "./Rect4.png";
import Rect5 from "./Rect5.png";

function Carte() {
  return (
    <div className="row centere mb-5 container-fluid">
      <div className="col-lg-3 col-12">
        <img src={Rect1} alt="photo" className="image img-fluid mb-5" />
        <img src={Rect2} alt="photo" className="image img-fluid  mb-5" />
      </div>
      <div className="col-lg-4 col-12">
        <img src={Rect3} alt="photo" className="image img-fluid mb-5" />
      </div>
      <div className="col-lg-3 col-12">
        <img src={Rect4} alt="photo" className="image img-fluid mb-5" />
        <img src={Rect5} alt="photo" className="image img-fluid " />
      </div>
    </div>
  );
}
export default Carte;
