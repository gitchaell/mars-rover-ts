import { Cardinality } from './Cardinality'
import {
	DirectionNotValidError,
	PlateauDimensionNotValidError,
	PositionNotValidError,
} from './RoverErrors'

/**
 * Representa la posición del rover en el plateau y maneja su movimiento.
 */
export class Position {
	private _x: number
	private _y: number

	/**
	 * Crea una nueva instancia de `Position`.
	 * @param x - Coordenada X inicial.
	 * @param y - Coordenada Y inicial.
	 * @param xMax - Límite máximo en el eje X del plateau.
	 * @param yMax - Límite máximo en el eje Y del plateau.
	 * @throws {PlateauDimensionNotValidError} Si los límites del plateau son inválidos.
	 * @throws {PositionNotValidError} Si la posición inicial está fuera de los límites.
	 */
	constructor(
		x: number,
		y: number,
		readonly xMax: number,
		readonly yMax: number
	) {
		this._x = x
		this._y = y
		this.ensureValidLimits()
		this.ensureValidPosition()
	}

	/**
	 * Verifica que los límites del plateau sean válidos.
	 * @throws {PlateauDimensionNotValidError} Si los límites son negativos o no numéricos.
	 */
	private ensureValidLimits(): void {
		if (
			isNaN(this.xMax) ||
			isNaN(this.yMax) ||
			this.xMax < 0 ||
			this.yMax < 0
		) {
			throw new PlateauDimensionNotValidError()
		}
	}

	/**
	 * Verifica que la posición inicial sea válida dentro de los límites del plateau.
	 * @throws {PositionNotValidError} Si la posición está fuera de los límites o no es numérica.
	 */
	private ensureValidPosition(): void {
		if (
			isNaN(this._x) ||
			isNaN(this._y) ||
			this._x < 0 ||
			this._y < 0 ||
			this._x > this.xMax ||
			this._y > this.yMax
		) {
			throw new PositionNotValidError()
		}
	}

	/**
	 * Mueve la posición según la dirección cardinal especificada.
	 * @param cardinality - Dirección en la que se moverá el rover.
	 * @returns Una nueva instancia de `Position` con la nueva ubicación.
	 * @throws {DirectionNotValidError} Si la dirección no es válida.
	 */
	moveTo(cardinality: Cardinality): Position {
		switch (cardinality) {
			case Cardinality.North:
				return this.goNorth()
			case Cardinality.East:
				return this.goEast()
			case Cardinality.South:
				return this.goSouth()
			case Cardinality.West:
				return this.goWest()
			default:
				throw new DirectionNotValidError()
		}
	}

	/**
	 * Mueve el rover una unidad hacia el norte, si no excede los límites.
	 * @returns Una nueva posición o la misma si no puede moverse.
	 */
	private goNorth(): Position {
		if (this._y < this.yMax) {
			return new Position(this._x, this._y + 1, this.xMax, this.yMax)
		}
		return this
	}

	/**
	 * Mueve el rover una unidad hacia el sur, si no excede los límites.
	 * @returns Una nueva posición o la misma si no puede moverse.
	 */
	private goSouth(): Position {
		if (this._y > 0) {
			return new Position(this._x, this._y - 1, this.xMax, this.yMax)
		}
		return this
	}

	/**
	 * Mueve el rover una unidad hacia el oeste, si no excede los límites.
	 * @returns Una nueva posición o la misma si no puede moverse.
	 */
	private goWest(): Position {
		if (this._x > 0) {
			return new Position(this._x - 1, this._y, this.xMax, this.yMax)
		}
		return this
	}

	/**
	 * Mueve el rover una unidad hacia el este, si no excede los límites.
	 * @returns Una nueva posición o la misma si no puede moverse.
	 */
	private goEast(): Position {
		if (this._x < this.xMax) {
			return new Position(this._x + 1, this._y, this.xMax, this.yMax)
		}
		return this
	}

	/**
	 * Obtiene la coordenada X actual.
	 * @returns La coordenada X del rover.
	 */
	public x(): number {
		return this._x
	}

	/**
	 * Obtiene la coordenada Y actual.
	 * @returns La coordenada Y del rover.
	 */
	public y(): number {
		return this._y
	}

	/**
	 * Representación en cadena de la posición.
	 * @returns Una cadena con la posición en formato "x y".
	 */
	public toString(): string {
		return `${this._x} ${this._y}`
	}
}
