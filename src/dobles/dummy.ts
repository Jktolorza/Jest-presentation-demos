export class Box {
    capacity: number
    shape: string
    length: number
    width: number
    height: number
}

export class Caja {
    capacidad: number
    forma: string
    largo: number
    ancho: number
    alto: number
}

export function mapBox(input: Box): Caja {
    const cajita = new Caja()
    cajita.capacidad = input.capacity
    cajita.forma = input.shape
    cajita.largo = input.length
    cajita.ancho = input.width
    cajita.alto = input.height
    return cajita
}