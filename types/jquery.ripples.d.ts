interface JQuery {
  ripples(options?: {
    imageUrl?: string
    dropRadius?: number
    perturbance?: number
    resolution?: number
    interactive?: boolean
    crossOrigin?: string
  }): JQuery
  ripples(methodName: 'destroy'): void
  ripples(methodName: 'drop', x: number, y: number, radius?: number, strength?: number): void
}
