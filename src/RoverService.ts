import { Rover } from './Rover'
import { RoverInterpreter } from './RoverInterpreter'

/**
 * Servicio encargado de procesar los comandos de los rovers.
 */
export class RoverService {
	/**
	 * Procesa una cadena de entrada con las instrucciones para los rovers
	 * y devuelve un arreglo con las posiciones finales de los rovers.
	 *
	 * @param input - Cadena de texto con las instrucciones para los rovers.
	 * @returns Un arreglo de cadenas con las posiciones finales de los rovers.
	 */
	process(input: string): string[] {
		const interpreter = new RoverInterpreter()
		const interpretations = interpreter.interpret(input)

		const output: string[] = []

		for (const { plateau, position, direction, commands } of interpretations) {
			const rover = new Rover(
				position.x,
				position.y,
				direction,
				plateau.width,
				plateau.height
			)

			rover.execute(commands)

			output.push(rover.toString())
		}

		return output
	}
}
