import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import Spinner from "./Spinner";

const ListContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
  max-width: 60rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function List() {
  const [desserts, setDesserts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/data.json") // Use the correct path
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((json) => {
        setDesserts(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ListContainer>
      {desserts.map((dessert) => (
        <ListItem key={dessert.name} dessert={dessert} />
      ))}
    </ListContainer>
  );
}

export default List;
