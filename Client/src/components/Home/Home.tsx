import Feed from "../Feed";
import Story from "../Story";
import img from "../../assets/shimwa.jpg";
import post1 from "../../assets/wallpaper.jpg";
import post2 from "../../assets/wallpaper3.jpg";
import post3 from "../../assets/wallpaper6.jpg";
import post4 from "../../assets/wallpaper9.jpg";
import post5 from "../../assets/wallpaper8.jpg";
import post6 from "../../assets/wallpaper4.jpg";
import post7 from "../../assets/SHOE-DESIGN.png";
import Post from "../Post";
import Theme from "../theme/Theme";

const Home = ({ className }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`flex gap-4 ${className} items-center`}>
        <Story url={img} text="Lirra James" />
        <Story url={img} text="Lirra James" />
        <Story url={img} text="Lirra James" />
        <Story url={img} text="Lirra James" />
        <Story url={img} text="Lirra James" />
      </div>

      <div className="post">
        <Post />
      </div>

      <div className="theme-container flex justify-center"> {/* Added Tailwind classes for centering */}
        {/* <Theme /> */}
      </div>

      <div className="middle">
        <Feed post={post1} />
        <Feed post={post2} />
        <Feed post={post3} />
        <Feed post={post4} />
        <Feed post={post5} />
        <Feed post={post6} />
        <Feed post={post7} />
      </div>
    </div>
  );
};

export default Home;
