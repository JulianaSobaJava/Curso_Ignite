import React from "react";

// import { Container } from './styles';

export default function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "Sem Descrição"}</p>
      <a href={props.repository.html_url}>Acessar Repositório</a>
    </li>
  );
}
