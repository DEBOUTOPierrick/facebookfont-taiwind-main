import React from "react";
import Storie from "./Storie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faThumbsUp,
  faHeart,
  faFaceLaugh,
  faComment,
  faShare,
  faX,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Actuality() {
  let Linkpage = [
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-5 mr-2 text-red-500"
          >
            <path d="M3 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3ZM15 4.75a.75.75 0 0 0-1.28-.53l-2 2a.75.75 0 0 0-.22.53v2.5c0 .199.079.39.22.53l2 2a.75.75 0 0 0 1.28-.53v-6.5Z" />
          </svg>
          Vidéo en direct
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-5 mr-2 text-green-400"
          >
            <path
              fillRule="evenodd"
              d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              clipRule="evenodd"
            />
          </svg>
          Photo / vidéo
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-5 mr-2 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5Zm.005 4.245a.75.75 0 0 0-1.06 0 2.75 2.75 0 0 1-3.89 0 .75.75 0 0 0-1.06 1.06 4.25 4.25 0 0 0 6.01 0 .75.75 0 0 0 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          Humeur / Activité{" "}
        </>
      ),
      link: "/",
    },
  ];
  return (
    <>
      <main className="">
        {/* Zone de publication */}

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex">
            <img
              src="/img/face.png"
              alt=""
              srcset=""
              className="mr-2 w-11 h-11"
            />
            <input
              type="text"
              placeholder="Quoi de neuf ?"
              className="p-2 border w-11/12 bg-gray-200 rounded-full outline-none"
            />
          </div>
          <div className="p-2 m-2 border-t-2 border-gray-200">
            <ul className="flex md:pl-0">
              {Linkpage.map((link) => (
                <li className=" w-full flex font-semibold mr-2">
                  <a href="" className="text-sm w-full flex text-gray-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Stories */}
        <div className="flex space-x-3 w-3/4 mt-5">
          <Storie image="/img/1.jpg" name="Cree une story" />
          {/* <Storie image="/img/2.jpg" name="Ami 1" />
          <Storie image="/img/3.jpg" name="Ami 2" /> */}
        </div>

        {/* Exemple de post */}
        <div className="bg-white rounded-lg shadow-md mt-4">
          <div class="relative">
            <div class="absolute top-0 right-0 size-16 mt-5">
              <FontAwesomeIcon
                icon={faEllipsis}
                className="text-gray-500 mx-2 font-semibold size-4 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faX}
                className="text-gray-500 font-semibold size-4 cursor-pointer"
              />
            </div>
          </div>
          {/* immage */}
          <div className="p-1">
            <div className="flex">
              <div className="">
                <img
                  src="/img/1.jpg"
                  alt=""
                  className="rounded-full mx-2 size-14"
                />
              </div>
              <div>
                <div className="flex w-full">
                  <p className="font-semibold text-lg">Vintage Kitchens </p>
                  <a href="" className="mx-6 text-blue-500 font-semibold">
                    Suivre
                  </a>
                </div>
                <div className="flex">
                  <p className="text-sm font-semibold text-gray-500">
                    Publication recommandée 6 frevrier, 14:27
                  </p>
                  <FontAwesomeIcon
                    icon={faGear}
                    className="mx-1 text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="mx-3">
            Art nouveau frensh muller vase ...{" "}
            <span className="font-bold">En voir plus</span>
          </p>
          <div className="bg-gray-500 w-full ">
            <img src="/img/2.jpg" alt="" className="w-full h-full" />
          </div>
          <div className="m-2">
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="sm"
              className="border border-white rounded-full p-1 text-white bg-blue-600"
            />
            <FontAwesomeIcon
              icon={faHeart}
              size="sm"
              className="border border-white bg-pink-500 rounded-full p-1 text-white"
            />
            <FontAwesomeIcon
              icon={faFaceLaugh}
              size="sm"
              className="border  bg-yellow-500 rounded-full p-1 text-white border-white"
            />
            <div className="float-end">
              <FontAwesomeIcon
                icon={faComment}
                size="sm"
                className="border border-white rounded-full p-1 text-gray-500"
              />
            </div>
          </div>
          <div className="p-2 m-2 border-t-2 border-gray-200">
            <ul className="flex w-full">
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                J'aime
              </li>
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faComment}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                Commenter
              </li>
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                Envoyer
              </li>
              
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faShare}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                Patarger
              </li>
            </ul>
          </div>
        </div>

        {/* Exemple de post */}
        
        {/* Exemple de post */}
        <div className="bg-white rounded-lg shadow-md mt-4">
          <div class="relative">
            <div class="absolute top-0 right-0 size-16 mt-5">
              <FontAwesomeIcon
                icon={faEllipsis}
                className="text-gray-500 mx-2 font-semibold cursor-pointer size-4"
              />
              <FontAwesomeIcon
                icon={faX}
                className="text-gray-500 font-semibold size-4 cursor-pointer"
              />
            </div>
          </div>
          {/* immage */}
          <div className="p-1">
            <div className="flex">
              <div className="">
                <img
                  src="/img/2.jpg"
                  alt=""
                  className="rounded-full mx-2 size-14"
                />
              </div>
              <div>
                <div className="flex w-full">
                  <p className="font-semibold text-lg">Vintage Kitchens </p>
                  <a href="" className="mx-6 text-blue-500 font-semibold">
                    Suivre
                  </a>
                </div>
                <div className="flex">
                  <p className="text-sm font-semibold text-gray-500">
                    Publication recommandée 6 frevrier, 14:27
                  </p>
                  <FontAwesomeIcon
                    icon={faGear}
                    className="mx-1 text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="mx-3">
        Le lion rois de la juongle. Quaerat nihil minus earum ipsa aspernatur magnam eius obcaecati animi, 
        adipisci, nobis quo reprehenderit dolor saepe. {" "}
            <span className="font-bold">En voir plus</span>
          </p>
          <div className="bg-gray-500 w-full ">
            <img src="/img/4.jpg" alt="" className="" />
          </div>
          <div className="m-2">
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="sm"
              className="border border-white rounded-full p-1 text-white bg-blue-600"
            />
            <FontAwesomeIcon
              icon={faHeart}
              size="sm"
              className="border border-white bg-pink-500 rounded-full p-1 text-white"
            />
            <FontAwesomeIcon
              icon={faFaceLaugh}
              size="sm"
              className="border  bg-yellow-500 rounded-full p-1 text-white border-white"
            />
            <div className="float-end">
              <FontAwesomeIcon
                icon={faComment}
                size="sm"
                className="border border-white rounded-full p-1 text-gray-500"
              />
            </div>
          </div>
          <div className="p-2 m-2 border-t-2 border-gray-200">
            <ul className="flex w-full">
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                J'aime
              </li>
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faComment}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                Commenter
              </li>
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                Envoyer
              </li>
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                Envoyer
              </li>
              <li className="hover:bg-gray-300 px-3.5 p-1 rounded-lg mr-0.5 font-semibold text-sm text-gray-500">
                <FontAwesomeIcon
                  icon={faShare}
                  className="mr-1 text-gray-400 font-semibold size-5"
                />
                Patarger
              </li>
            </ul>
          </div>
        </div>

        {/* Exemple de post */}
        

      </main>
    </>
  );
}
