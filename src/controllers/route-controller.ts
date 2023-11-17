import { Request, Response } from "express";
import { RouteViewModel } from "../view-models/route-view-model";
import { RouteService } from "../services/route-service";
import { RoutesByCategoryViewModel } from "../view-models/routes-by-category-view-model";

export class RouteController {
  constructor(private routeService: RouteService) {
    this.routeService = routeService
  }

  async find(
    request: Request,
    response: Response,
  ): Promise<Response<RouteViewModel>> {
    try {
      const { id } = request.params
      const route = await this.routeService.find(id)
      return response.status(200).json(RouteViewModel.toHTTP(route))
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }

  async findAll(_: Request, response: Response): Promise<Response<Array<RouteViewModel>>> {
    try {
      const routes = await this.routeService.findAll()
      return response.status(200).json(routes.map(RouteViewModel.toHTTP))
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }

  async findRoutesGroupedByCategories(_: Request, response: Response): Promise<Response<Array<RoutesByCategoryViewModel>>> {
    try {
      console.log('[#] Requisição: ' + new Date())

      const routesGroupedByCategories = await this.routeService.findRoutesGroupByCategory()
      return response.status(200).json(RoutesByCategoryViewModel.toHTTP(routesGroupedByCategories))
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }

  async create(): Promise<any> {}
  async save(): Promise<any> {}
  async remove(): Promise<any> {}
} 