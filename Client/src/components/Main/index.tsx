import Home from "../Home/Home";
import Left from "../Left/Left";
import Nav from "../Navbar/Nav";
import Request from "../Request";
import Right from "../Right/Right";
import image5 from "../../assets/shimwa.jpg";

const Main = () => {
  return (
    <div>
      <nav className="z-50 pb-4 sticky top-0">
        <Nav />
      </nav>
      <main className="container flex flex-wrap">
        <div className="w-full lg:w-1/4">
          <Left />
        </div>
        <div className="w-full lg:w-1/2">
          <Home />
        </div>
        <div className="w-full lg:w-1/4">
          <div className="shadow-lg shadow-slate-500">
            <Right>
              <Request url={image5} name="El Kim" msg="4 Mutual Friends" />
            </Right>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
