import Logo1 from "./Logo1.png";

function Footer() {
  return (
    <div className="row container-fluid my-5 p-5">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <img src={Logo1} className="logo" />
        <p>
          Social media validation business model canvas graphical user interface
          launch party creative facebook ipad twitter
        </p>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <h1>Landings</h1>
        <p>Home</p>
        <p>Products</p>
        <p>Services</p>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <h1>Company</h1>
        <p>
          Careers{" "}
          <button type="submit" className="btn">
            carrer
          </button>
        </p>
        <p>Services</p>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <h1>Ressources</h1>
        <p>Home</p>
        <p>Products</p>
        <p>Services</p>
      </div>
      <p>All rigths reserved</p>
    </div>
  );
}
export default Footer;
