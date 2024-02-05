// Main.js
import React from 'react';
import food from './resfood.jpg';
import greeksalad from './greeksalad.jpg';
import bruchetta from './bruchetta.svg';
import Lemon from './lemon.jpg';
import user1 from './Andrew.jpg';
import user2 from './daphne.jpg';
import user3 from './MEE.jpg';
import mario from './mario.jpg';
import adrian from './adrian.jpg';

function Main() {
  return (
    <main>
      <section className="main-section">
        <article className="main-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned <br />
            Mediterranean restaurant, <br />
            focused on traditional recipes <br />
            served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </article>
        <figure className="main-image">
          <img src={food} alt="Restaurant food" />
        </figure>
      </section>

      <section className="specials-section">
        <h2>This Week's Specials!</h2>
        <button>Online Menu</button>

        {/* Greek Salad */}
        <article className="greek-salad">
          <img src={greeksalad} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>$12.99</p>
          <p>The famous greek salad of <br />
             crispy lettuce, peppers, olives,<br />
             and our Chicago style feta<br />
             cheese, garnished with<br />
             crunchy garlic and rosemary<br />
             croutons.</p>
          <p>Order for Delivery</p>
        </article>

        {/* Bruchetta */}
        <article className="Bruchetta">
          <img src={bruchetta} alt="bruchetta" />
          <h3>Bruchetta</h3>
          <p>$ 5.99</p>
          <p>Our Bruchetta is made from<br />
             grilled bread that has been<br />
             smeared with garlic and<br />
             seasoned with salt and olive<br />
             oil</p>
          <p>Order for Delivery</p>
        </article>

        {/* Lemon Dessert */}
        <article className="Bruchetta">
          <img src={Lemon} alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>$ 5.00</p>
          <p>This comes straight from<br />
             grandma's recipe book, every<br />
             last ingredient has been<br />
             sourced abd is as authentic<br />
             as can be imagined.</p>
          <p>Order for Delivery</p>
        </article>
      </section>

      {/*  Our Testimonials */}
      <section className="testimonials-section">
        <h2>Our Testimonials</h2>

        {/* Testimonial 1 */}
        <article className="testimonial-card">
          <img src={user1} alt="User 1" />
          <p>
            Little Lemon is a true culinary gem!<br />
            From the inviting ambiance to the<br />
            exceptional dishes crafted with fresh,<br />
            local ingredients, every visit is a<br />
            delightful experience.
          </p>
          <div className="ratings">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p className="user-name">Andrew Ng</p>
        </article>

        {/* Testimonial 2 */}
        <article className="testimonial-card">
          <img src={user2} alt="User 2" />
          <p>
            Little Lemon is undeniably a culinary<br />
            treasure! thanks to the welcoming<br />
            ambiance and the exceptional dishes<br />
            skillfully crafted.
          </p>
          <div className="ratings">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <p className="user-name">Daphne Koller</p>
        </article>

        {/* Testimonial 3 */}
        <article className="testimonial-card">
          <img src={user3} alt="User 3" />
          <p>
          Little Lemon is a true culinary gem!<br />
          From the inviting ambiance to the<br />
          exceptional dishes crafted with fresh,<br />
          local ingredients, every visit is a<br />
          delightful experience.
          </p>
          <div className="ratings">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
          </div>
          <p className="user-name">Mohammed Fuseini</p>
        </article>
      </section>

       {/*About Little Lemon */}
       <section className="about-section">
        <article>
          <h2>About Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
          Little Lemon is owned by two Italian brothers,<br />
          Mario and Adrian, who moved to the United States<br />
          to pursue their shared dream of owning a restaurant.<br />
          To craft the menu, Mario relies on family recipes and<br />
          his experience as a chef in Italy. Adrian does all<br />
          the marketing for the restaurant and led the effort to<br />
          expand the menu beyond classic Italian to incorporate<br />
          additional cuisines from the Mediterranean region.<br />

          Little Lemon is a charming neighborhood bisto<br />
          that serves simple food and classic cocktail in a<br />
          lively but casual environment. The restaurant<br />
          features a locally-sourced menu with daily specials.

          </p>
        </article>
        <aside className="about-images">
          <figure>
            <img src={mario} alt=" " />
          </figure>
          <figure>
            <img src={adrian} alt=" " />
          </figure>
        </aside>
      </section>




    </main>
  );
}

export default Main;
