import { useLoaderData } from "react-router-dom";
import { CiStar } from "react-icons/ci";
const Latest = () => {
    const latestBook = useLoaderData()
    console.log(latestBook)
    return (
        <div className="container mx-auto lg:px-14 px-5">
            <div className="h-[100px] flex justify-center items-center my-10 bg-[#f3f3f3] rounded-lg">
                <h2 className="text-center text-2xl font-bold">Latest Books</h2>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:w-[1140px] w-[300px] mx-auto my-10">
                {
                    latestBook.map(latest => <div key={latest.bookId}>
                        <div className="border-2 w-[300px] h-[400px] my-2 p-2 space-y-5 rounded-lg cursor-pointer shadow-lg">
                            <div className="p-2 bg-[#f3f3f3] rounded-lg">
                                <img className="h-[210px] w-[250px] mx-auto rounded-2xl" src={latest.image} alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-5 text-green-500 text-sm font-semibold">
                                    <a>{latest.tags[0]}</a>
                                    <a>{latest.tags[1]}</a>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-base font-bold">{latest.bookName}</h2>
                                    <p ><span className="text-sm font-medium">By :</span> {latest.author}</p>
                                </div>
                                <div className="flex justify-between items-center gap-5 border-t-2 border-dashed my-5 py-1">
                                    <p>{latest.category}</p>
                                    <p className="flex items-center gap-2"><span className="text-sm font-semibold">{latest.rating}</span> <CiStar /></p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Latest;