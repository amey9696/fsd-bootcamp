import React from 'react';
import './App.css';

function App() {
  return (
    <>

      <div class="box1" id="heading">
        <h1>Today</h1>
      </div>

      <div class="box">
        <form>
          <div class="item">
            <div class="round">
              <input type="checkbox" id="checkbox" />

              <label for="checkbox"></label>
            </div>
            <p>Welcome here</p>
            <br />
          </div>
        </form>

        <form>
          <div class="item">
            <div class="round">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox"></label>
            </div>
            <p>Enjoy the party</p>
            <br />
          </div>
        </form>

        <form>
          <div class="item">
            <div class="round">
              <input type="checkbox" id="checkbox" />

              <label for="checkbox"></label>
            </div>
            <p>Codingyaan welcomes you</p>
            <br />
          </div>
        </form>

        <form>
          <div class="item">
            <div class="round">
              <input type="checkbox" id="checkbox" />

              <label for="checkbox"></label>
            </div>
            <p>PLS like</p>
            <br />
          </div>
        </form>

        <form>
          <div class="item">
            <div class="round">
              <input type="checkbox" id="checkbox" />

              <label for="checkbox"></label>
            </div>
            <p>HEY GUYS</p>
            <br />
          </div>
        </form>
        <form class="item">
          <input type="text" placeholder="new" />
          <hr />
          <button id="b" type="submit" ><span id="s2">+</span></button>
        </form>
      </div>
    </>
  );
}
export default App;