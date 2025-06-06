import { Habilidade } from "@/model/habilidade-model";

export interface HabilidadeRepository {
  findAll(): Promise<Habilidade[]>;
}
