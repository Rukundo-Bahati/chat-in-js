interface Props {
  url: string;
  text: string;
}

const Story = ({ url, text }: Props) => {
  return (
    <div>
      <div className="story p-4 rounded-lg flex flex-col justify-between items-center text-white text-sm relative overflow-hidden bg-slate-500 w-30xl h-48">
        <div className="profile-picture">
          <img
            src={url}
            alt="profile-picture"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <p className="name">{text}</p>
        <div className="before absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default Story;
