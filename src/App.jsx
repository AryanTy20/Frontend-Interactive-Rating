import { useState } from "react";
import "./app.scss";

import { star, thankyou } from "../assets";

const App = () => {
  const [rating, setRating] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  return (
    <>
      <main className="main">
        {!showSubmit && (
          <div className="card">
            <div className="star">
              <img src={star} alt="" />
            </div>
            <div className="meta">
              <h2>How did we do?</h2>
              <p>
                Please let us know how we did with your support request . All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="rating-box">
              {[...new Array(5)].map((_, i) => (
                <p
                  className={i + 1 == rating ? "active" : ""}
                  key={i}
                  onClick={() => setRating(i + 1)}
                >
                  {i + 1}
                </p>
              ))}
            </div>
            <button onClick={() => setShowSubmit(true)}>Submit</button>
          </div>
        )}
        {showSubmit && (
          <div className="card2">
            <div className="poster">
              <img src={thankyou} alt="" />
            </div>
            <div className="rating-output">You selected {rating} out of 5</div>
            <h2>Thank you!</h2>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}

        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/AryanTy20">Aryan Tirkey</a>.
        </div>
      </main>
    </>
  );
};

export default App;
