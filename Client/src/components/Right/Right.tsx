import image1 from "../../assets/bahati ai.jpeg";
import image2 from "../../assets/wee.jpg";
import image3 from "../../assets/wall (2).jpeg";
import image4 from "../../assets/_e74f01e6-c929-468c-bd18-ddbdf5d993d2.jpeg";
import image5 from "../../assets/wall (2).jpeg";
import RightItem from "../RightItem";
import Button from "../Button";
import SearchBar from "../SearchBar";

const Right = ({ className, children }) => {
  return (
    <div className={`main container right ${className} gap-4 sticky top-sticky-top-right h-screen+18rem w-110`}>
      {/* Upper Div */}
      <div className="messages bg-white rounded-lg p-4 flex flex-col">
        <div className="heading flex items-center justify-between mb-4">
          <h4>
            Messages <i className="uil uil-edit"></i>
          </h4>
        </div>

        <SearchBar />

        <div className="category flex justify-between mb-4 mt-2 font-bold">
          <h6 className="cursor-pointer px-2 py-1 border-b-4 border-transparent hover:border-dark active:border-dark">
            Primary
          </h6>
          <h6 className="cursor-pointer px-2 py-1 border-b-4 border-transparent hover:border-dark active:border-dark">
            General
          </h6>
          <h6 className="message-request cursor-pointer px-2 py-1 border-b-4 border-transparent hover:border-dark active:border-dark">
            Requests(7)
          </h6>
        </div>

        <div className="flex flex-col overflow-y-auto">
          {/* Example RightItems */}
          <RightItem img={image1} msg="Wake Up Bro!" name="Adam Quist" />
          <RightItem img={image2} msg="I received the money!" name="Francesca Delta" />
          <RightItem img={image3} msg="Ok" name="Jane Doe" />
          <RightItem img={image4} msg="2 new messages" name="Jane Daniella" />
          <RightItem img={image5} msg="All right" name="Juliet Markey" />
          <RightItem img={image1} msg="Birth Day tomorrow." name="Adam Quist" />
        </div>
      </div>

      {/* Children */}
      {children}
    </div>
  );
};

export default Right;
