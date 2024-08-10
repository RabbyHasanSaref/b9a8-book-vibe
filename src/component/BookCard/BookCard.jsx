import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { image, bookName, author, rating, tags, category, bookId } = book;
    // console.log(book)
    return (
        <Link to = {`/viewbook/${bookId}`}>
            <div className="border-2 w-[300px] h-[400px] my-2 p-2 space-y-5 rounded-lg cursor-pointer shadow-lg">
                <div className="p-2 bg-[#f3f3f3] rounded-lg">
                    <img className="h-[210px] w-[250px] mx-auto rounded-2xl" src={image} alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-5 text-green-500 text-sm font-semibold">
                        <a>{tags[0]}</a>
                        <a>{tags[1]}</a>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-base font-bold">{bookName}</h2>
                        <p ><span className="text-sm font-medium">By :</span> {author}</p>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-t-2 border-dashed my-5 py-1">
                        <p>{category}</p>
                        <p className="flex items-center gap-2"><span className="text-sm font-semibold">{rating}</span> <CiStar /></p>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default BookCard;