import { Cardinality } from './Cardinality'
import { DirectionNotValidError } from './RoverErrors'

/**
 * Representa la dirección en la que está orientado el rover.
 */
export class Direction {
	private _cardinality: Cardinality

	/**
	 * Orden de las direcciones para facilitar giros a la izquierda y derecha.
	 */
	private static readonly ORDER = [
		Cardinality.North,
		Cardinality.East,
		Cardinality.South,
		Cardinality.West,
	]

	/**
	 * Crea una nueva instancia de `Direction`.
	 * @param cardinality - Dirección cardinal inicial (N, E, S, W).
	 * @throws {DirectionNotValidError} Si la dirección proporcionada no es válida.
	 */
	constructor(cardinality: Cardinality) {
		this._cardinality = cardinality
		this.ensureValidDirection()
	}

	/**
	 * Verifica que la dirección actual sea válida.
	 * @throws {DirectionNotValidError} Si la dirección no está en la lista de cardinalidades válidas.
	 */
	private ensureValidDirection(): void {
		if (!Object.values(Cardinality).includes(this._cardinality)) {
			throw new DirectionNotValidError()
		}
	}

	/**
	 * Gira la dirección 90° a la izquierda (en sentido antihorario).
	 * @returns Una nueva instancia de `Direction` con la dirección actualizada.
	 */
	public turnLeft(): Direction {
		const newIndex = (Direction.ORDER.indexOf(this._cardinality) + 3) % 4
		return new Direction(Direction.ORDER[newIndex])
	}

	/**
	 * Gira la dirección 90° a la derecha (en sentido horario).
	 * @returns Una nueva instancia de `Direction` con la dirección actualizada.
	 */
	public turnRight(): Direction {
		const newIndex = (Direction.ORDER.indexOf(this._cardinality) + 1) % 4
		return new Direction(Direction.ORDER[newIndex])
	}

	/**
	 * Obtiene la dirección cardinal actual.
	 * @returns La dirección cardinal actual (N, E, S, W).
	 */
	public cardinality(): Cardinality {
		return this._cardinality
	}

	/**
	 * Representación en cadena de la dirección.
	 * @returns Una cadena con la dirección cardinal actual.
	 */
	public toString(): string {
		return this._cardinality
	}
}
