class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
          <style>
          .hero {
            display: flex;
            align-items: center;
            min-height: 500px;
            width: 100%;
            text-align: center;
            background-image: url("./heros/hero-image_1.jpg");
            background-position: center;
            border-radius: 5px;
          }
          
          .hero_inner {
            margin: 0 auto;
            max-width: 800px;
          }
          
          .hero_title {
            color: #962824;
            font-weight: 700;
            font-size: 2.9em;
          }
          
          .hero_tagline {
            color: #fff;
            margin-top: 20px;
            font-size: 0.9em;
            font-weight: 400;
            padding-left: 1em;
            padding-right: 1em;
          }
          
  
            @media screen and (min-width: 768px) {
                .hero_title {
                    font-size: 2.7em;
                  }
                
                  .hero_tagline {
                    font-size: 1.2em;
                  }
                
              }
      
              @media screen and (min-width: 1024px) {
                .hero_title {
                    font-size: 3.1em;
                  }
                
                  .hero_tagline {
                    font-size: 1.1em;
                  }
              }
          </style>
  
          <div class="hero">
          <div class="hero_inner">
            <h1 class="hero_title">Where to eat?</h1>
            <p class="hero_tagline">
              you can find authentic food on streets. But, if you are feeling extra
              and wanting the luxurious ones, we have restaurants that offer fine
              dining and delicacies.
            </p>
          </div>
        </div>
        `;
  }
}

customElements.define('hero-bar', HeroBar);
