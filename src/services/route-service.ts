import { CreateRouteForm } from "../forms/create-route-form";
import { UpdateRouteForm } from "../forms/update-route-form";
import { Route } from "../models/route";
import { RouteRepository } from "../repositories/route-repository";

export class RouteService {
  constructor(private routeRepository: RouteRepository) {
    this.routeRepository = routeRepository
  }

  async find(id: string): Promise<Route> {
    const route = await this.routeRepository.find(id)
    if (!route) throw new Error('This route does not exist.')
    return route
  }

  async findAll(): Promise<Array<Route>> {
    const routes = await this.routeRepository.findAll()
    return routes
  }

  async findRoutesGroupByCategory() {
    const routes = await this.routeRepository.findAll()

    const routesGroupedByCategory = routes.reduce((previous, current) => {
      const routesByCategory = previous.get(current.category) || []
      return previous.set(current.category, [...routesByCategory, current])
    }, new Map<string, Array<Route>>)
    return routesGroupedByCategory
  }

  async create(form: CreateRouteForm): Promise<Route> {
    const route = new Route(form)
    const createdRoute = await this.routeRepository.create(route)
    return createdRoute
  }

  async save(id: string, form: UpdateRouteForm): Promise<void> {
    await this.routeRepository.save(id, form)
  }

  async remove(id: string): Promise<void> {
    await this.routeRepository.remove(id)
  }
}