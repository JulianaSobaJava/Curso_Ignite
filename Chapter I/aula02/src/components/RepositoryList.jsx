import { Counter } from "./Counter";
import RepositoryItem from "./RepositoryItem";

const repository = {
  name: "Unform",
  link: "https://github.com/JulianaSobaJava",
  descrition: "Form in React Js",
};

export default function RepositoryList() {
  return (
    <section class="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
      <Counter />
    </section>
  );
}
