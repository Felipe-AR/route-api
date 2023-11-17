import { randomUUID } from 'crypto'

export interface RouteProperties {
  path: string
  title: string
  label?: string
  shortedLabel?: string
  icon: string
  order?: string
  category: string
  rules: string[]
}

export class Route {
  public readonly id: string
  private properties: RouteProperties

  constructor(properties: RouteProperties, id?: string) {
    this.id = id ?? randomUUID()
    this.properties = properties
  }

  get path(): string {
    return this.properties.path
  }

  set path(path: string) {
    this.properties.path = path
  }

  get title(): string {
    return this.properties.title
  }

  set title(title: string) {
    this.properties.title = title
  }

  get label(): string | undefined {
    return this.properties.label
  }

  set label(label: string) {
    this.properties.label = label
  }

  get shortedLabel(): string | undefined {
    return this.properties.shortedLabel
  }

  set shortedLabel(shortedLabel: string) {
    this.properties.shortedLabel = shortedLabel
  }

  get icon(): string {
    return this.properties.icon
  }

  set icon(icon: string) {
    this.properties.icon = icon
  }

  get order(): string | undefined {
    return this.properties.order
  }

  set order(order: string) {
    this.properties.order = order
  }

  get category(): string {
    return this.properties.category
  }

  set category(category: string) {
    this.properties.category = category
  }

  get rules(): Array<string> {
    return this.properties.rules
  }

  set rules(rules: Array<string>) {
    this.properties.rules = rules
  }

  toObject(): RouteProperties {
    return {
      path: this.properties.path,
      title: this.properties.title,
      label: this.properties.label,
      shortedLabel: this.properties.shortedLabel,
      icon: this.properties.icon,
      order: this.properties.order,
      category: this.properties.category,
      rules: this.properties.rules,
    }
  }
}