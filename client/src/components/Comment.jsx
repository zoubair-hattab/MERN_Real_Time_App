import React, { useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import Actions from './Actions';

const Comment = () => {
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="flex  gap-2 w-full">
        <img
          src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <p>Zoubair Hattab</p>
            <div className="flex items-center gap-3">
              <p>1H</p>
              <IoMdMore />
            </div>
          </div>
          <p>This is a great app</p>
          <Actions like={like} setLike={setLike} />
        </div>
      </div>
      <div className="border border-gray-300 h-full "></div>
    </>
  );
};

export default Comment;
