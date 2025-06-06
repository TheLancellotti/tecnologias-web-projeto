import { JsonHabilidadeRepositorio } from "@/repositories/json-habilidade-repositorio";

export default async function DetalhesPage() {
  const repo = new JsonHabilidadeRepositorio();
  const habilidades = await repo.findAll();

  return (
    <div style={{ padding: "2rem", backgroundColor: "#0d0d0d", color: "#fff" }}>
      <h1>Habilidades do Jack Sparrow</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {habilidades.map((hab) => (
          <li key={hab.id} style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{hab.titulo}</h2>
            <p style={{ color: "#ccc" }}>{hab.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
