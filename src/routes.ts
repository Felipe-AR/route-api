import { Router } from 'express'
import { RouteInMemoryRepository } from './repositories/route-in-memory-repository'
import { RouteController } from './controllers/route-controller'
import { RouteService } from './services/route-service'

const router = Router()

const routeRepository = new RouteInMemoryRepository()
const routeService = new RouteService(routeRepository)
const routeController = new RouteController(routeService)

router
  .get('/route', routeController.findAll.bind(routeController))
  .get('/route/group-by-category', routeController.findRoutesGroupedByCategories.bind(routeController))
  .get('/route/:id', routeController.find.bind(routeController))
  // .post('/route', routeController.create)
  // .put('/route/:id', routeController.save)
  // .delete('/route', routeController.remove)

export { router as routes }