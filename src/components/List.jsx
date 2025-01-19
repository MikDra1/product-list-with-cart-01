import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

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
  useEffect(function () {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDesserts(json);
      });
  }, []);

  return (
    <ListContainer>
      {desserts.map((dessert) => (
        <ListItem key={dessert.name} dessert={dessert} />
      ))}
    </ListContainer>
  );
}

export default List;
