import React, { useState } from 'react';
import { IoIosMore, IoMdHeart, IoMdMore } from 'react-icons/io';
import { FiMessageCircle } from 'react-icons/fi';
import { FaRetweet } from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Actions from './Actions';
const UserPost = () => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);
  const text =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab at,nostrum ratione tenetur atque placeat, excepturi officiis explicabosoluta sit facilis assumenda, cumque iure quis repellendus saepe eligendi minus laboriosam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab at,nostrum ratione tenetur atque placeat, excepturi officiis explicabosoluta sit facilis assumenda, cumque iure quis repellendus saepe eligendi minus laboriosam!';
  return (
    <Link
      to="#"
      className="max-w-screen-md mx-auto bg-white p-4 mt-4 flex gap-4"
    >
      <div className="flex flex-col items-center">
        <img
          src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="border border-gray-300 h-full my-1"></div>
        <div class="flex -space-x-4 rtl:space-x-reverse">
          <img
            class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
            alt=""
          />
          <img
            class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
            alt=""
          />

          <a
            class="flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +99
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-semibold">Zoubair Hattab</h2>
          </div>
          <div className="flex items-center gap-1">
            <p>1H</p>
            <IoIosMore size={15} />
          </div>
        </div>
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
        <div className="flex items-center gap-2">
          <p className="text-gray-600 text-[14px]">356 Flowers</p>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <p className="text-gray-600 text-[14px]">Replies</p>
        </div>
      </div>
    </Link>
  );
};

export default UserPost;
