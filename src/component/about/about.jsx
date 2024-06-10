import "./sign.css";

function About() {
  return (
    <div className="bg-white hero-com sign-sect">
      <div className="hero-img">
        <img className="" src="assets/wash.jpeg" alt="" />
      </div>
      <div className="text-blck hero-tet sign-up">
        <h1>Laundry on your time, earnings on your terms.</h1>
        <div className="request">
          Make cash on your timetable with Fincclen laundry services—or both.
          Utilize your own washer or select from our laundry partners.
        </div>
        <div className="req-button-sign">
         <button className="req-button">Get started</button>
         <div className="signup">
         Already have an account? Sign in
         </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
