import { useLoaderData } from "react-router";
import delay from "../util/delay";
import { MainHeading } from "./styled-elements";

const Books = () => {
  const { bookCount, authors } = useLoaderData();

  return (
    <div>
      <MainHeading>Books</MainHeading>
      <p>
        <strong>Available Books: </strong>
        {bookCount}
      </p>
      <p>
        <strong>Authors:</strong> {authors}
      </p>
    </div>
  );
};

async function loader() {
  const bookCount = delay(10, 1000);
  const authors = delay("Codelicks", 2000);

  return {
    bookCount: await bookCount,
    authors: await authors,
  };
}

export const booksRoute = { element: <Books />, loader };
