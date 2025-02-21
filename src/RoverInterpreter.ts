import { Cardinality } from './Cardinality'
import { Command } from './RoverCommand'
import { InputNotValidError } from './RoverErrors'

/**
 * Clase encargada de interpretar las instrucciones de entrada para el rover.
 */
export class RoverInterpreter {
	/**
	 * Interpreta una entrada de texto y la convierte en una lista de instrucciones para el rover.
	 * @param input - Cadena de texto con la configuración del plateau, posiciones iniciales y comandos.
	 * @returns Un array de interpretaciones con la configuración del plateau, posición inicial y comandos.
	 * @throws {InputNotValidError} Si la entrada no tiene el formato correcto.
	 */
	interpret(input: string): Interpretation[] {
		const lines = input
			.trim()
			.split('\n')
			.map((line) => line.trim())

		if (lines.length < 3 || lines.length % 2 === 0) {
			throw new InputNotValidError()
		}

		const interpretations = []
		const { width, height } = this.parsePlateau(lines[0])

		for (let i = 1; i < lines.length; i += 2) {
			const { x, y, direction } = this.parsePosition(lines[i])
			const commands = this.parseCommands(lines[i + 1])

			interpretations.push({
				plateau: { width, height },
				position: { x, y },
				direction,
				commands,
			})
		}

		return interpretations
	}

	/**
	 * Analiza la línea de texto correspondiente al tamaño del plateau.
	 * @param line - Línea de entrada con las dimensiones del plateau.
	 * @returns Un objeto con el ancho y alto del plateau.
	 */
	private parsePlateau(line: string): PlateauInterpretation {
		const [width, height] = line.split(/\s+/)
		return {
			width: Number(width),
			height: Number(height),
		}
	}

	/**
	 * Analiza la línea de texto correspondiente a la posición inicial del rover.
	 * @param positionLine - Línea de entrada con la posición y dirección inicial del rover.
	 * @returns Un objeto con las coordenadas X, Y y la dirección del rover.
	 */
	private parsePosition(positionLine: string): PositionInterpretation {
		const [x, y, direction] = positionLine.split(/\s+/)
		return {
			x: Number(x),
			y: Number(y),
			direction: direction as Cardinality,
		}
	}

	/**
	 * Analiza la línea de texto correspondiente a los comandos de movimiento del rover.
	 * @param commandLine - Línea de entrada con los comandos.
	 * @returns Un array de comandos interpretados.
	 */
	private parseCommands(commandLine: string): CommandsInterpretation {
		const commands = [...commandLine] as Command[]
		return commands
	}
}

type Interpretation = {
	plateau: PlateauInterpretation
	position: Omit<PositionInterpretation, 'direction'>
	direction: Cardinality
	commands: Command[]
}

type PlateauInterpretation = {
	width: number
	height: number
}

type PositionInterpretation = {
	x: number
	y: number
	direction: Cardinality
}

type CommandsInterpretation = Command[]
