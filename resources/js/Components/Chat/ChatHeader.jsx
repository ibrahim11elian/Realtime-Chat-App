import { Link } from "@inertiajs/react";
import React, { memo, useState } from "react";

function ChatHeader({ name }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
            <Link
                as="a"
                href="/profile"
                className="hover:bg-blue-400 rounded-md p-1"
            >
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle
                            cx="12"
                            cy="6"
                            r="4"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                        ></circle>{" "}
                        <path
                            d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        ></path>{" "}
                    </g>
                </svg>
            </Link>
            <span className=" capitalize">Chat App - {name}</span>
            <div className="relative inline-block text-left">
                <button
                    id="setting"
                    className="hover:bg-blue-400 rounded-md p-1"
                    onClick={() => setIsOpen(() => !isOpen)}
                >
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                        </g>
                    </svg>
                </button>
                <div
                    id="dropdown-content"
                    className={` ${
                        isOpen ? "" : "hidden"
                    }  absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg p-2`}
                >
                    <Link
                        as="a"
                        href="/"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                        >
                            <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z"></path>
                            <path
                                fillRule="evenodd"
                                d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Home
                    </Link>
                    <Link
                        as="a"
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"></path>
                        </svg>
                        Dashboard
                    </Link>
                    <Link
                        as="a"
                        href="/logout"
                        method="post"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                        >
                            <path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16zm299.31-11.31-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z"></path>
                        </svg>
                        Logout
                    </Link>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                    >
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            className="mr-2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g id="Warning / Info">
                                    {" "}
                                    <path
                                        id="Vector"
                                        d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>{" "}
                                </g>{" "}
                            </g>
                        </svg>
                        More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default memo(ChatHeader);
