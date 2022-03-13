import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/JulianaSobaJava/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((err) => console.log("erro", err));
  }, []);

  console.log("repositories", repositories);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
