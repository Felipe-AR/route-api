import { Route } from "../models/route";
import { RouteViewModel } from "./route-view-model";

export class RoutesByCategoryViewModel {
  static toHTTP(groupedRoutesByCategory: Map<String, Array<Route>>) {
    return Array.from(groupedRoutesByCategory.entries()).map(
      ([category, routes]) => {
        return {
          category: category,
          routes: routes.map(RouteViewModel.toHTTP),
        };
      }
    );
  }
}
