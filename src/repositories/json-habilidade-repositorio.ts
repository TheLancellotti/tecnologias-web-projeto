import { promises as fs } from "fs";
import path from "path";
import { Habilidade } from "@/model/habilidade-model";
import { HabilidadeRepository } from "./habilidade-repository";

export class JsonHabilidadeRepositorio implements HabilidadeRepository {
  async findAll(): Promise<Habilidade[]> {
    const filePath = path.join(process.cwd(), "db/seed/habilidades.json");
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);
    return json.habilidades as Habilidade[];
  }
}
