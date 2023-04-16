import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./kalachandLogo.png";
import schoolimg from "./akhs.jpg";
import school from "./ariadah-kalachand-high-school.webp";
import school2 from "./school2.jpg";
import school3 from "./school3.jpg";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} width="100px"></img>
            Ariadaha Kalachand High School
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col-auto">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="Header">
        <img src={schoolimg} width="1440px" className="schimg"></img>
        <div className="square"></div>
        <h2>Welcome to</h2>
        <h1>Ariadaha Kalachand High School</h1>
        <div className="square2"></div>
        <h5>
          For more than a century, Ariadaha Kalachand High School has been
          standing as an epitome of the aspirations of the people of
          Ariadaha-Dakshineswar in the northern suburb of Kolkata.The school
          overlooks the Feeder Road that connects Belghoria Railway Station on
          Sealdah-Ranaghat section with the Ariadaha Ferry Ghat on the riverbank
          of the Hooghly. The junction in front of the school branches out
          towards Dakshineswar Railway station and ultimately reaches out to the
          Dakshineswar Kali Temple. The school has produced a plethora of
          students who have been successful in their own fields and have
          contributed lots to the nation in their own way. They have all done
          the school proud.
        </h5>
      </div>
      <div className="cards">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-60">
              <img src={school} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Upcoming Events</h5>
                <p class="card-text">
                  AKHS is going to publish the annual magazine during the
                  forthcoming Reunion scheduled in 21 March 2021.AKHS organises,
                  like previous years, "Bijoya Sammelani"on Saturday the 19th of
                  October 2021 at the school premises.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-60">
              <img src={school2} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Foundation & History</h5>
                <p class="card-text">
                  AKHS was set up on 6th January, 1884 on the bank of the holy
                  river Ganga, being inspired by the ideals of Pandit Iswar
                  Chandra Vidyasagar and Reverened Krishnamohan Bandyopadhyay
                  and guided by the spirit of the ‘Young Bengal' against the
                  back drop of Bengal Renaissance.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-60">
              <img src={school3} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Praktani</h5>
                <p class="card-text">
                  PRAKTANI, an association of the school is housed within the
                  premises of the school for the ex- students to sip in the cup
                  of sweet memories of their school days !!!! and nurture an
                  emotional feeling of their companionship with the class mates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="footer">
        <h5>© 2021 Ariadaha Kalachand High School. All Rights Reserved.</h5>
      </div>
    </div>
  );
}

export default App;
