import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Actions from '../components/Actions';
import Comment from '../components/Comment';

const PostPage = () => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);
  const text =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab at,nostrum ratione tenetur atque placeat, excepturi officiis explicabosoluta sit facilis assumenda, cumque iure quis repellendus saepe eligendi minus laboriosam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab at,nostrum ratione tenetur atque placeat, excepturi officiis explicabosoluta sit facilis assumenda, cumque iure quis repellendus saepe eligendi minus laboriosam!';
  return (
    <Link
      to="#"
      className="max-w-screen-md mx-auto bg-white p-4 mt-24 flex flex-col gap-3"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <img
            src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <h2 className="text-base font-semibold">Zoubair Hattab</h2>
        </div>
        <div className="flex items-center gap-1">
          <p>1H</p>
          <IoIosMore size={15} />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-center"></div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600 leading-6">
            {!show && text?.length > 150 ? (
              <>
                {text.slice(0, 150)}
                <span onClick={() => setShow(true)} className="text-indigo-500">
                  Read More
                </span>
              </>
            ) : (
              text
            )}{' '}
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
            alt=""
            className="w-full h-[250px] object-cover"
          />
        </div>

        <Actions like={like} setLike={setLike} />
        <div className="flex items-center gap-2 py-2">
          <p className="text-gray-600 text-[14px]">356 Flowers</p>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <p className="text-gray-600 text-[14px]">Replies</p>
        </div>
        <div className="border border-gray-200"></div>
        <div className="flex items-center justify-between py-3">
          <p className="text-gray-400 text-lg ">
            ✋ Get the app to like ,reply and post
          </p>
          <button className="bg-gray-200 p-2 rounded-md px-4">Get</button>
        </div>
        <div className="border border-gray-200"></div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </Link>
  );
};

export default PostPage;
