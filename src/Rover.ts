import { Cardinality } from './Cardinality'
import { Command } from './RoverCommand'
import { Direction } from './RoverDirection'
import { CommandNotValidError } from './RoverErrors'
import { Position } from './RoverPosition'

/**
 * Representa un Rover que puede moverse en un plateau siguiendo comandos específicos.
 */
export class Rover {
	private position: Position
	private direction: Direction

	/**
	 * Crea una nueva instancia de un Rover.
	 * @param x - Posición inicial en el eje X.
	 * @param y - Posición inicial en el eje Y.
	 * @param cardinality - Dirección inicial del rover (N, S, E, W).
	 * @param plateauWidth - Ancho del plateau donde se mueve el rover.
	 * @param plateauHeight - Altura del plateau donde se mueve el rover.
	 */
	constructor(
		readonly x: number,
		readonly y: number,
		readonly cardinality: Cardinality,
		readonly plateauWidth: number,
		readonly plateauHeight: number
	) {
		this.position = new Position(x, y, plateauWidth, plateauHeight)
		this.direction = new Direction(cardinality)
	}

	/**
	 * Ejecuta una lista de comandos para mover el rover.
	 * @param commands - Lista de comandos a ejecutar (L, R, M).
	 * @throws {CommandNotValidError} Si un comando no es válido.
	 */
	public execute(commands: Command[]): void {
		for (let command of commands) {
			switch (command) {
				case Command.Left:
					this.turnLeft()
					break
				case Command.Right:
					this.turnRight()
					break
				case Command.Move:
					this.move()
					break
				default:
					throw new CommandNotValidError()
			}
		}
	}

	/**
	 * Gira el rover 90° a la izquierda.
	 */
	private turnLeft(): void {
		this.direction = this.direction.turnLeft()
	}

	/**
	 * Gira el rover 90° a la derecha.
	 */
	private turnRight(): void {
		this.direction = this.direction.turnRight()
	}

	/**
	 * Mueve el rover una unidad en la dirección actual.
	 */
	private move(): void {
		this.position = this.position.moveTo(this.direction.cardinality())
	}

	/**
	 * Devuelve la representación en cadena de la posición y dirección actual del rover.
	 * @returns Una cadena con la posición y dirección del rover (ejemplo: "1 2 N").
	 */
	public toString(): string {
		return `${this.position.toString()} ${this.direction.toString()}`
	}
}
