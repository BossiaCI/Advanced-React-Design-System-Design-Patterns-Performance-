import { useLoaderData } from "react-router";
import delay from "../util/delay";
import { MainContainer, MainHeading } from "./styled-elements";

const Main = () => {
  const data = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>Main - {data}</MainHeading>
    </MainContainer>
  );
};

async function loader() {
  return await delay("Fetched Data", 1000);
}

export const mainRoute = { element: <Main />, loader };
