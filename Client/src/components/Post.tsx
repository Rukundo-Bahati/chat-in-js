import user from "../assets/shimwa.jpg";
import Button from "./Button";

const Post = () => {
  return (
    <div>
      <form className="create-post bg-white p-4 rounded-lg m-5">
        <div className="create-post-contents grid grid-cols-12 gap-4">
          <div className="profile-picture col-span-1">
            <img
              src={user}
              alt="profile-picture"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="middle col-span-11">
            <div className="upper flex items-center bg-light py-1 px-4 rounded-lg mb-4">
              <input
                type="text"
                placeholder="What's on your Mind?, Diana"
                id="create-post"
                className="flex-grow bg-transparent text-white outline-none"
                style={{ backgroundColor: 'hsl(252, 30%, 95%)' }} // Custom background color
              />
              <Button text="Post" bg="bg-blue-600" /> {/* Using custom button style */}
            </div>
            <div className="lower flex items-center justify-between">
              <div className="video">
                <a href="#">Live video</a>
              </div>
              <div className="photo">
                <a href="#">photo/video</a>
              </div>
              <div className="activity">
                <a href="#">Feeling/Activity</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Post;
