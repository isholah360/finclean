import "./hero.css";

function Hero() {
  return (
    <div className="bg-black hero-com">
      <div className="text-white hero-tet">
        <h1>Get Clean Clothes, Anywhere, Anytime, with Fincclean.</h1>
        <div className="request">Request for laundry, hop in, and go.</div>
          <button className="req-button">Request</button>
      </div>
      <div className="hero-img">
        <img className="" src="assets/hero.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
