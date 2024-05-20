import React from "react";
import RightItem from "./RightItem";
import Button from "./Button";

const Request = ({ url, name, msg }) => {
  return (
    <div>
      <div className="shadow-lg shadow-slate-500">
        <div className="messages bg-white rounded-lg p-4 flex flex-col overflow-y-auto mb-4">
          <h2>Requests</h2>
          <div className="mb-4">
            <RightItem img={url} msg={msg} name={name} />
            <div className="flex items-center gap-4">
              <Button bg="bg-blue-500" text="Accept" />
              <Button bg="bg-blue-600" text="Decline" />
            </div>
            <div>
              <RightItem img={url} msg={msg} name={name} />
              <div className="flex items-center gap-4">
                <Button bg="bg-blue-500" text="Accept" />
                <Button bg="bg-blue-600" text="Decline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
