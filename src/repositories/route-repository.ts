import { Route, RouteProperties } from "../models/route"

export interface RouteRepository {
  find(ra: string): Promise<Route | null>
  findAll(): Promise<Array<Route>>
  create(route: Route): Promise<Route>
  save(ra: string, route: Partial<RouteProperties>): Promise<void>
  remove(ra: string): Promise<void>
}