import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getBooks } from "../../utils";

const ReadBook = () => {
    const books = useLoaderData();
    const [bookData, setBookData] = useState([])
    useEffect(()=>{
        const storagBook = getBooks();
        if(books.length > 0) {
            const bookItem = [];
            for(const id of storagBook){
                // console.log(id)
                const book = books.find(b => b.bookId == id);
                if (book) {
                    bookItem.push(book);
                }
            }
            setBookData(bookItem);
        }
    },[])
    return (
        <div>
            {
                bookData.map((bookitem, idx) => <div key={idx}>
                    <div className="lg:flex items-center border-2 my-2 p-5">
                        <div className="bg-[#f3f3f3]  p-5 rounded-lg">
                            <img className="w-[200px] h-[200px] mx-auto" src={bookitem.image} alt="" />
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-semibold">{bookitem.bookName}</h2>
                            <p className="text-base"><span className="font-semibold">By: </span>{bookitem.author}</p>
                            <div className="lg:flex justify-between items-center gap-5">
                                <h5 className="text-base font-semibold">Tag:</h5>
                                {
                                    bookitem.tags.map(tag => <div key={tag}>
                                        <p className="text-green-500"># <span>{tag}</span></p>
                                    </div>)
                                }
                                <h5 className="flex items-center gap-2"><CiLocationOn /> <span className="text-base font-semibold">Year of Publishing:</span> {bookitem.yearOfPublishing}</h5>
                            </div>
                            <div className="my-2">
                                <p className="flex items-center gap-2"><FaUsers></FaUsers> <span className="text-base font-semibold">Publisher:</span> {bookitem.author}</p>
                                <p className="flex items-center gap-2"><RiPagesLine></RiPagesLine> <span className="text-base font-semibold">Page:</span> {bookitem.totalPages}</p>
                            </div>
                            <div className="lg:flex gap-5">
                                <button className="btn text-blue-500 bg-blue-200">Category: {bookitem.category}</button>
                                <button className="btn text-orange-500 bg-orange-200">Rating: {bookitem.rating}</button>
                                <Link to ={`/viewbook/${bookitem.bookId}`} className="btn text-white bg-green-500">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ReadBook;