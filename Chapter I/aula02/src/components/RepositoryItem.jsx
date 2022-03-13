import React from "react";

// import { Container } from './styles';

export default function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>Acessar Repositório</a>
    </li>
  );
}
