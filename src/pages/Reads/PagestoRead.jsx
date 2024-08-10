import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getBooks } from "../../utils";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagestoRead = () => {
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const pageRead = useLoaderData();
    //    console.log(pageRead)
    const [pageReads, setPageReads] = useState([]);
    useEffect(() => {
        const storagPage = getBooks();
        if (pageRead.length > 0) {
            const readList = []
            for (const id of storagPage) {
                const reads = pageRead.find(read => read.bookId == id)
                // console.log(reads)
                if (reads) {
                    readList.push(reads)
                }
            }
            setPageReads(readList)
            // console.log(readList)
        }
    }, [])
    console.log(pageReads)
    const { bookName, totalPages } = pageRead;

    return (
        <div className="container mx-auto lg:px-14 px-5 my-10">
            <div className="h-[100px] flex justify-center items-center my-10 bg-[#f3f3f3] rounded-lg">
                <h2 className="text-center text-2xl font-bold">Page To Read</h2>
            </div>
            <ResponsiveContainer height={500}>
            <BarChart
                    width={500}
                    height={500}
                    data={pageReads}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {pageRead.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagestoRead;