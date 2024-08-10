import { createBrowserRouter } from "react-router-dom";
import Root from '../root/Root.jsx';
import Home from '../pages/Home/Home.jsx';
import ListedBooks from '../pages/Books/ListedBooks.jsx';
import PagestoRead from '../pages/Reads/PagestoRead.jsx';
import ViewBook from "../pages/Books/ViewBook.jsx";
import ReadBook from "../component/ReadBook/ReadBook.jsx";
import WishlistBook from "../component/WishlistBook/WishlistBook.jsx";
import Latest from "../pages/LatestBook/Latest.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Error from "../component/NotFound/Error.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/viewbook/:id",
        element: <ViewBook></ViewBook>,
        loader: () => fetch('../book.json'),
      },

      {
        path: "/listbooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBook></ReadBook>,
            loader: () => fetch('../book.json'),
          },

          {
            path: "wishlist",
            element: <WishlistBook></WishlistBook>,
            loader: () => fetch('../book.json'),
          },
        ]
      },
      
      {
        path: "/pagestoread",
        element: <PagestoRead></PagestoRead>,
        loader: () => fetch('../book.json'),
      },

      {
        path: "/latest",
        element: <Latest></Latest>,
        loader: () => fetch('../book.json'),
      },

      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);