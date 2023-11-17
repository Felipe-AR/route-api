import { Route } from "../models/route";

export class RouteViewModel {
  static toHTTP(route: Route) {
    return {
      id: route.id,
      path: route.path,
      title: route.title,
      label: route.label,
      shortedLabel: route.shortedLabel,
      icon: route.icon,
      order: route.order,
      category: route.category,
    }
  }
}