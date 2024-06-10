import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="the-footer-path">
        <div className="date-up-register">
          <img className="finclogo" src="assets/fin.png" alt="" />
          <div className="subscribeto-dateup">Subscribe for our daily news</div>
          <div className="little-content">
            <form action="" method="post">
              <input type="email" name="" id="" placeholder="Email" />
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
        <div className="other-secton">
          <div className="date-up-comm">
            <p>Services</p>
            <div className="date-com-list">
              {" "}
              <>Laundry services</>
            </div>
            <div className="date-com-list">Laundry services</div>
            <div className="date-com-list">Wash & Iron Service</div>
            <div className="date-com-list">Dry Cleaning Service</div>
            <div className="date-com-list">Ironing Service</div>
            <div className="date-com-list">Clothe Alteration</div>
            <div className="date-com-list">Commercial cleaning</div>
            <div className="date-com-list">Mobile Cleaning</div>
          </div>
          <div className="date-up-pages">
            <p>Pages</p>
            <div className="date-com-list">Home</div>
            <div className="last">About Us</div>
            <div className="date-com-list">Category</div>
            <div className="date-com-list">Contact</div>
            <div className="date-com-list">
              <span>Feature </span>
            </div>
          </div>
          <div className="date-up-social">
            <p>FOLLOW US</p>
            <div className="media-logo">
              <img src="assets/ins.png" alt="" />
              <div className="smedia">Finnclean_community</div>
            </div>
            <div className="media-logo">
              <img src="assets/fb.png" alt="" />
              <div className="smedia">Finnclean</div>
            </div>
            <div className="media-logo">
              <img src="asset/linkedin.png" alt="" />
              <div className="smedia">Finnclean</div>
            </div>
            <div className="media-logo">
              <img src="assets/twi.png" alt="twitter" />
              <div className="smedia">Finnclean</div>
            </div>
            <div className="media-logo">
              <img src="assets/u.png" alt="youtube" />
              <div className="smedia">Finnclean_tv</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
