import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks, saveBooksWish } from "../../utils";

const ViewBook = () => {
    const itemBook = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const bookData = itemBook.find(book => book.bookId === idInt);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookData;

    // read button 
    const handleReadBtn = () => {
        saveBooks(id)
    }

    const handleWishBtn = () => {
        saveBooksWish(id)
    }

    return (
        <div className="lg:flex justify-center my-10 lg:p-0 p-5">
            <div className="lg:w-[570px] h-[500px] bg-[#f3f3f3] flex items-center rounded ">
                <img className="mx-auto w-[400px] h-[400px]" src={image} alt="" />
            </div>
            <div className="lg:w-[590px]  p-5">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">{bookName}</h2>
                    <p className="text-base"><span className="font-semibold">By :</span> {author}</p>
                    <hr />
                    <p className="text-base font-semibold">{category}</p>
                    <hr />
                </div>
                <div>
                    <p className="text-base"><span className="font-semibold">Review : </span> {review}</p>
                </div>
                <div className="flex items-center gap-5 my-2">
                    <h5 className="text-base font-semibold">Tag</h5>
                    <p className="text-green-500"># {tags[0]}</p>
                    <p className="text-green-500"># {tags[1]}</p>
                </div>
                <hr />
                <div className="flex items-center gap-10">
                    <div className="text-base">
                        <h5>Number of Pages:</h5>
                        <h5>Publisher:</h5>
                        <h5>Year of Publishing:</h5>
                        <h5>Rating:</h5>
                    </div>
                    <div className="text-base font-semibold my-1">
                        <h5>{totalPages}</h5>
                        <h5>{publisher}</h5>
                        <h5>{yearOfPublishing}</h5>
                        <h5>{rating}</h5>
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-2">
                    <button onClick={handleReadBtn} className="btn bg-white border-2 border-black w-[150px]">Read</button>
                    <button onClick={handleWishBtn} className="btn bg-blue-500 border-blue-500 border-2 text-white w-[150px]">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ViewBook;