import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightGrey;
`;

const ListWrapper = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: 700;
`;

export default function List({ items, title }) {
  return (
    <>
      <Title>{title}</Title>
      <ListWrapper>
        {items.map((item, i) => (
          <ListItem key={i}>
            <Label>{item.label}</Label>{" "}
            {item.value ? item.value : "Not Specified"}
          </ListItem>
        ))}
      </ListWrapper>
    </>
  );
}
