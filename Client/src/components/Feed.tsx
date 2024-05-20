import React from 'react';
import like from "../assets/shimwa.jpg";

const Feed = ({ post }) => {
  return (
    <div className="m-5 bg-white">
      <div className="middle bg-white rounded-lg p-4 my-4 text-sm shadow-md">
        <div className="head flex justify-between">
          <div className="user flex gap-4">
            <div className="profile-picture">
              <img src={like} alt="Profile" className="w-10 h-10 rounded-full" />
            </div>
            <div className="info">
              <h3 className="text-base font-bold">Lana Rose</h3>
              <small className="text-xs text-gray-500">Dubai, 15 MINUTES AGO</small>
            </div>
          </div>
          <span className="edit">
            <i className="uil uil-ellipsis-h text-lg"></i>
          </span>
        </div>
        <div className="photo mt-4">
          <img src={post} alt="Photo" className="rounded-lg overflow-hidden" />
        </div>
        <div className="action-buttons flex justify-between items-center text-lg mt-4">
          <div className="interaction-buttons flex gap-4">
            <span>
              <i className="uil uil-heart text-xl"></i>
            </span>
            <span>
              <i className="uil uil-comment-dots text-xl"></i>
            </span>
            <span>
              <i className="uil uil-share-alt text-xl"></i>
            </span>
          </div>
          <div className="bookmark">
            <span>
              <i className="uil uil-bookmark-full text-xl"></i>
            </span>
          </div>
        </div>
        <div className="liked-by mt-4 flex items-center">
          <span>
            <img src={like} alt="Liked by" className="w-8 h-8 rounded-full" />
          </span>
          <span>
            <img src={like} alt="Liked by" className="w-8 h-8 rounded-full" />
          </span>
          <span>
            <img src={like} alt="Liked by" className="w-8 h-8 rounded-full" />
          </span>
          <p className="ml-2 text-sm">
            Liked by <b>Ernest Achiever</b> and <b>2,323 others</b>
          </p>
        </div>
        <div className="caption mt-2">
          <p className="text-sm">
            <b>Lena Rose</b> Lorem ipsum dolor sit amet.
            <span className="harsh-tag text-primary">#lifestyle</span>
          </p>
        </div>
        <div className="comments text-gray-500 mt-2 text-sm">View all 100 comments</div>
      </div>
    </div>
  );
};

export default Feed;
