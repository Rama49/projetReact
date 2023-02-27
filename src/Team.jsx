import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

function Team() {
  return (
    <div className="container  my-5">
      <div className="row teame">
        <div className="col-9">
          <h5>Our Team</h5>
          <h1>The Leadership Team.</h1>
          <p>
            Conversion angel investor entrepeneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubatorfocus.
          </p>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
          <img src={img1} alt="photo1" className="img-fluid imagee" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
          <img src={img2} alt="photo1" className="img-fluid imagee" />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-5">
          <img src={img3} alt="photo1" className="img-fluid imagee" />
        </div>
      </div>
    </div>
  );
}
export default Team;
