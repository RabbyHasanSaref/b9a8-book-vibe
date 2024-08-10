import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleRating = () => {
        console.log('Hello World')
    }
    // console.log(books)
    return (
        <div className="container mx-auto lg:px-14 px-5">
            <div className="h-[100px] flex justify-center items-center my-10 bg-[#f3f3f3] rounded-lg">
                <h2 className="text-center text-2xl font-bold">Books</h2>
            </div>
            {/* sort by */}
            <div className="flex justify-center items-center my-10">
                <details className="dropdown">
                    <summary className="m-1 btn flex items-center bg-green-500 text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[180px]">
                        <li onClick={handleRating}><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </details>
            </div>

            <div className=" flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <NavLink
                    to={``}
                    onClick={() => setTabIndex(0)}
                    rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}  dark:border-gray-600 dark:text-gray-600`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </NavLink>
                <NavLink
                    to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    rel="noopener noreferrer" href="#" className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </NavLink>
            </div>
            <div className="my-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;
