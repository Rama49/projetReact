import imgval1 from "./imgval1.png";
import imgval2 from "./imgval2.png";
import Image from "./Image.png";

function Values() {
  return (
    <div className="valu my-5 p-5 container-fluid ">
      <h3>Our Values</h3>
      <p>
        Conversion angel investor entrepreneur first mover advantage Handshake
        infographic mass market crowdfunding iteration .traction stock user
        experience deployment beta innovator incubator focus
      </p>
      <div className="row mb-3">
        <div className="col-lg-2 col-md-3 col-sm-3">
          <img src={imgval1} />
        </div>
        <div className="col-lg-8 col-md-7 col-sm-7">
          <h1>We are commited</h1>
          <p>Conversion angel investor entrepreneur first mover advantage. </p>
          <p> Handshake infographic mass market crowdfunding iteration.</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-2 col-md-3 col-sm-3">
          <img src={imgval2} />
        </div>
        <div className="col-lg-8 col-md-7 col-sm-7">
          <h1>We are responsive</h1>
          <p>Conversion angel investor entrepreneur first mover advantage.</p>
          <p> Handshake infographic mass market crowdfunding iteration.</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-2 col-md-3 col-sm-3">
          <img src={Image} />
        </div>
        <div className="col-lg-8 col-md-7 col-sm-7">
          <h1>We aim for progress</h1>
          <p>Conversion angel investor entrepreneur first mover advantage.</p>
          <p> Handshake infographic mass market crowdfunding iteration.</p>
        </div>
      </div>
    </div>
  );
}
export default Values;
