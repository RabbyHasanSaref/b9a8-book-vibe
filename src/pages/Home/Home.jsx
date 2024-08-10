import { useEffect, useState } from "react";
import BookCard from "../../component/BookCard/BookCard";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [bookItem, setBookItem] = useState([])
    useEffect(() => {
        fetch('./book.json')
            .then(res => res.json())
            .then(data => setBookItem(data))
    }, [])
    return (
        <div className="container mx-auto lg:px-14 px-5">
            {/* banner open  */}
            <section className="bg-[#f3f3f3] rounded-lg my-10">
                <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm max-w-[700px]  lg:text-left space-y-5">
                        <h1 className="text-3xl font-bold leading-none lg:text-6xl">Books to freshen
                            <span className="dark:text-violet-600">up your bookshelf</span>
                        </h1>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink to = "/listbooks" rel="noopener noreferrer" href="#" className="px-8 py-3  rounded btn bg-green-500 text-base text-white">View The List</NavLink>

                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="../pngwing 1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            {/* banner end  */}

            {/* book card area  */}
            <div>
                <div className="mt-20 text-center text-2xl font-bold">
                    <h2>Books</h2>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:w-[1140px] w-[300px] mx-auto my-10">
                    {
                        bookItem.map(book => <BookCard key={book.booId} book={book}></BookCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;