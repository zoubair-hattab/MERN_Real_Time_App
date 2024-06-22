import React from 'react';
import { FaHeart, FaRegHeart, FaRetweet } from 'react-icons/fa6';
import { FiMessageCircle } from 'react-icons/fi';
import { IoMdHeart, IoMdSend } from 'react-icons/io';
const Actions = ({ like, setLike }) => {
  return (
    <div className="flex items-center gap-2">
      {like ? (
        <FaHeart size={25} color="red" onClick={() => setLike(false)} />
      ) : (
        <FaRegHeart size={25} onClick={() => setLike(true)} />
      )}
      <FiMessageCircle size={25} />
      <IoMdSend size={25} />
      <FaRetweet size={25} />
    </div>
  );
};

export default Actions;
