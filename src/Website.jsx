function Website() {
  return (
    <div className="website p-5 container">
      <h1>An entreprise template to ramp up your company website</h1>

      <div className="row mt-5 centre">
        <div className="col-3">
          <button type="button" className="bg-white text-dark rounded px-5">
            Your email adresse
          </button>
        </div>
        <div className="col-3">
          <button type="button" className=" text-dark rounded px-3 bg-success">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Website;
