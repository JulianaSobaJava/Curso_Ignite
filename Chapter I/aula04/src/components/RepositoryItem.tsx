interface RepositoryItemProps{
  repository:{
    name: string;
    description: string;
    html_url:string;
  }
}


export default function RepositoryItem(props : RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "Sem Descrição"}</p>
      <a href={props.repository.html_url}>Acessar Repositório</a>
    </li>
  );
}
