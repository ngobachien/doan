import React from "react";
import "./Inspiration.css";

const Inspiration = () => (
  <section className="inspiration-section">
    <div className="inspiration-content">
      <h2 className="inspiration-title">INSPIRATION FOR THE NEW GENERATION</h2>
      <p className="inspiration-desc">
        More than a decade ago, the Billiards industry in Vietnam was still underdeveloped. Billiards was known by the prejudiced names "evil game" or "useless hobby". But in recent years, Billiards has developed rapidly and strongly, attracting millions of people across the country. The glorious victory of player Duong Quoc Hoang in 2018 defeating American star Shane Van Boening - a monument in the world Billiard pool village with a full collection of the most prestigious titles, has further fueled the passion for Billiards among young people.
      </p>
    </div>
    <div className="inspiration-img-wrap">
      <img
        src="./images/about/moi.png"
        alt="Inspiration for the new generation"
        className="inspiration-img"
      />
    </div>
  </section>
);

export default Inspiration;