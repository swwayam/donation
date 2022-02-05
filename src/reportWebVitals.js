<h1>U.S. Wildfires Tracker</h1>
      <form action="/location" method="post">
        <input
          type="text"
          class="zip-code"
          name="zip-code"
          placeholder="Zip code"
        />
      </form>

      <div class="home-split">
        <div class="ongoing-blazes board">
          <h3>Ongoing blazes</h3>
          <p class="info">Updated on January 28</p>
          <div class="divider"></div>
          <br />

          <p>wildfire</p>
        </div>

        <div class="prepare-now board">
          <h3>Prepare now</h3>
          <p class="info">
            Stay prepared with our informative
            <br />
            guides & checklists
          </p>
          <div class="divider"></div>
          <br />
          <br />
          <div class="grid-container">
            <a href="/emergency-kit">
              <div class="prepare-item red">
                <img src="../static/resources/images/supply-kit.png" />
                <p>Build an emergency kit</p>
              </div>
            </a>
            <a href="/emergency-plan">
              <div class="prepare-item orange">
                <img src="../static/resources/images/emergency-plan.png" />
                <p>Make an emergency plan</p>
              </div>
            </a>
            <a href="/agriculture">
              <div class="prepare-item green">
                <img src="../static/resources/images/agriculture.png" />
                <p>Protect agriculture</p>
              </div>
            </a>
            <a href="/child-safety">
              <div class="prepare-item yellow">
                <img src="../static/resources/images/child-safety.png" />
                <p>Keep children safe</p>
              </div>
            </a>
            <a href="/pet-safety">
              <div class="prepare-item coral">
                <img src="../static/resources/images/pet-safety.png" />
                <p>Keep pets safe</p>
              </div>
            </a>
            <a href="/prepare-for-evacuation">
              <div class="prepare-item blue">
                <img src="../static/resources/images/prepare-evacuation.png" />
                <p>Prepare to evacuate</p>
              </div>
            </a>
            <a href="/evacuation">
              <div class="prepare-item purple">
                <img src="../static/resources/images/evacuation.png" />
                <p>Learn how to evacuate</p>
              </div>
            </a>
            <a href="/returning-home">
              <div class="prepare-item magenta">
                <img src="../static/resources/images/returning-home.png" />
                <p>Plan for returning home</p>
              </div>
            </a>
          </div>
        </div>
      </div>
