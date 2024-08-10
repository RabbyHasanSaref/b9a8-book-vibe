import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const getBooks = () => {

    const storageBook = localStorage.getItem('books');
    if (storageBook) {
        return JSON.parse(storageBook);
    }
    return [];
}

// save data
export const saveBooks = book => {
    const books = getBooks();
    const isExist = books.find(b => b === book);
    if (!isExist) {
        toast('you have applied read successfully')
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books))
    }
    else{
        toast.error("you have already read the book")
    }
}




export const getBooksWish = () => {

    const storageBookWish = localStorage.getItem('booksWish');
    if (storageBookWish) {
        return JSON.parse(storageBookWish);
    }
    return [];
}

// save data
export const saveBooksWish = bookWish => {
    const booksWishs = getBooksWish();
    const isExist = booksWishs.find(b => b === bookWish);
    if (!isExist) {
        toast('you have applied read successfully')
        booksWishs.push(bookWish);
        localStorage.setItem('booksWish', JSON.stringify(booksWishs))
    }
    else{
        toast.error("you have already read the book")
    }
}
