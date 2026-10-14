import React from "react";
import Storie from "./Storie";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faFacebook, faFacebookMessenger, } from '@fortawesome/free-brands-svg-icons';
import {faClockRotateLeft, faBookmark, faTv, faUser, faBars} from '@fortawesome/free-solid-svg-icons'



export default function Menupage() {
  let LinkMenu = [
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 m-2 text-blue-300"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>{" "}
          Pipi
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 m-2 text-blue-300"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
          Trouver vos ami(e)s
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          {" "}
          <FontAwesomeIcon icon={faFacebook} className="size-4 m-2 text-blue-600" />{" "}
          Bienvenue
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          {" "}
          <FontAwesomeIcon icon={faClockRotateLeft} className="size-4 m-2 text-blue-600"/>
          Souvenirs
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
         <FontAwesomeIcon icon={faBookmark} className="size-4 m-2 text-blue-600"/>
          Enregistrements
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 m-2 text-emerald-700"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z" />
          </svg>
          Groupes
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          <FontAwesomeIcon icon={faTv} className="size-4 m-2 text-blue-600" />
          Vidéo{" "}
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 m-2  text-amber-700"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M4.5 7c.681 0 1.3-.273 1.75-.715C6.7 6.727 7.319 7 8 7s1.3-.273 1.75-.715A2.5 2.5 0 1 0 11.5 2h-7a2.5 2.5 0 0 0 0 5ZM6.25 8.097A3.986 3.986 0 0 1 4.5 8.5c-.53 0-1.037-.103-1.5-.29v4.29h-.25a.75.75 0 0 0 0 1.5h.5a.754.754 0 0 0 .138-.013A.5.5 0 0 0 3.5 14H6a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .112-.013c.045.009.09.013.138.013h.5a.75.75 0 1 0 0-1.5H13V8.21c-.463.187-.97.29-1.5.29a3.986 3.986 0 0 1-1.75-.403A3.986 3.986 0 0 1 8 8.5a3.986 3.986 0 0 1-1.75-.403Z" />
          </svg>
          Marketplace
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 m-2"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          Fils{" "}
        </>
      ),
      link: "/",
    },
    {
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 m-2"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
            <path
              fillRule="evenodd"
              d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
              clipRule="evenodd"
            />
          </svg>
          Evenements{" "}
        </>
      ),
      link: "/",
    },
    { name: <>Menu </>, link: "/" },
    { name: <>Menu </>, link: "/" },
    { name: <> Menu </>, link: "/" },
  ];

  return (
    <>
      <aside className="cursor-pointer h-full relative overflow-hidden">
        <div className="relative">
        <div className="fixed ">
        <div className="overflow-y-scroll h-96 m-0">
          <ul className="pl-9 md:pl-0 ">
            {LinkMenu.map((link) => (
              <li className="font-semibold md:my-0 flex items-center space-x-3 p-2 mt-4  hover:bg-gray-100 rounded-lg cursor-pointer">
                <a href="" className="flex text-sm items-center">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          </div>
        </div>
        </div>
      </aside>
    </>
  );
}
