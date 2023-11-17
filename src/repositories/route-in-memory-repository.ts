import { Route, RouteProperties } from "../models/route";
import { RouteRepository } from "./route-repository";

const routes: Route[] = [
  new Route({
    category: "Início",
    title: "Dashboard",
    path: "dashboard",
    icon: "house",
    rules: [],
  }),
  new Route({
    category: "Início",
    title: "Registro de Ponto",
    path: "ponto-eletronico",
    icon: "user-check",
    rules: [],
  }),
  new Route({
    category: "Início",
    title: "Eventos",
    path: "eventos",
    icon: "calendar-check",
    rules: [],
  }),
  new Route({
    category: "Aluno",
    title: "Acesso ao Moodle",
    path: "moodle",
    icon: "arrow-up-right-from-square",
    rules: [],
  }),
  new Route({
    category: "Aluno",
    title: "Horário de Aulas",
    path: "horario-de-aulas",
    icon: "school",
    rules: [],
  }),
  new Route({
    category: "Aluno",
    title: "Notas e Faltas",
    path: "notas-faltas",
    icon: "table-list",
    rules: [],
  }),
  new Route({
    category: "Aluno",
    title: "Pesquisas PIC/PIBIC/PIBIT",
    path: "pesquisas-academicas",
    icon: "microscope",
    rules: [],
  }),
  new Route({
    category: "Aluno",
    title: "Monografia",
    path: "monografia",
    icon: "graduation-cap",
    rules: [],
  }),
  new Route({
    category: "Aluno",
    title: "Atividades Complementares",
    path: "atividades-complementares",
    icon: "award",
    rules: [],
  }),
  new Route({
    category: "Financeiro",
    title: "Boleto Bancário",
    path: "boleto",
    icon: "barcode",
    rules: [],
  }),
];

export class RouteInMemoryRepository implements RouteRepository {
  private routes: Map<string, Route> = new Map<string, Route>();

  constructor() {
    for (let route of routes) {
      this.routes.set(route.id, route);
    }
  }

  async find(id: string): Promise<Route | null> {
    const route = this.routes.get(id);
    if (!route) return null;
    return route;
  }

  async findAll(): Promise<Array<Route>> {
    const routes = Array.from(this.routes.values());
    return routes;
  }

  async create(route: Route): Promise<Route> {
    this.routes.set(route.id, route);
    return route;
  }

  async save(
    id: string,
    updatedRoute: Partial<RouteProperties>
  ): Promise<void> {
    const route = await this.find(id);
    if (!route) throw new Error("This route does not exist");
    this.routes.set(
      route.id,
      new Route({ ...route.toObject(), ...updatedRoute }, route.id)
    );
  }

  async remove(id: string) {
    const route = await this.find(id);
    if (!route) throw new Error("This route does not exist.");
    this.routes.delete(id);
  }
}
