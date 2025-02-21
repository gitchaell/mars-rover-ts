import {
	CommandNotValidError,
	DirectionNotValidError,
	InputNotValidError,
	PlateauDimensionNotValidError,
} from '../src/RoverErrors'
import { RoverService } from '../src/RoverService'

describe('RoverService', () => {
	const service = new RoverService()

	const testCases = [
		{
			description: 'Un solo rover moviéndose correctamente',
			input: '5 5\n1 2 N\nLMLMLMLMM',
			expected: ['1 3 N'],
		},
		{
			description: 'Otro rover en diferente posición y dirección',
			input: '5 5\n3 3 E\nMMRMMRMRRM',
			expected: ['5 1 E'],
		},
		{
			description: 'Rover tratando de moverse hasta el borde superior',
			input: '5 5\n0 0 N\nMMMMM',
			expected: ['0 5 N'],
		},
		{
			description: 'Dos rovers en el mismo plateau',
			input: '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM',
			expected: ['1 3 N', '5 1 E'],
		},
		{
			description:
				'Un rover intentando moverse fuera de los límites (borde derecho)',
			input: '5 5\n4 4 E\nMMMM',
			expected: ['5 4 E'], // No debe pasar del borde
		},
		{
			description:
				'Un rover intentando moverse fuera de los límites (borde inferior)',
			input: '5 5\n0 0 S\nM',
			expected: ['0 0 S'], // No debe moverse más abajo de (0,0)
		},
	]

	testCases.forEach(({ description, input, expected }) => {
		test(description, () => {
			expect(service.process(input)).toEqual(expected)
		})
	})

	describe('Validación de entrada incorrecta', () => {
		test('Debe lanzar error si la entrada está vacía', () => {
			expect(() => service.process('')).toThrow(InputNotValidError)
		})

		test('Debe lanzar error si las coordenadas del plateau son incorrectas', () => {
			expect(() => service.process('X Y\n3 3 E\nMMRMMRMRRM')).toThrow(
				PlateauDimensionNotValidError
			)
		})

		test('Debe lanzar error si un rover tiene una dirección inválida', () => {
			expect(() => service.process('5 5\n1 2 X\nLMLM')).toThrow(
				DirectionNotValidError
			)
		})

		test('Debe lanzar error si un rover recibe un comando inválido', () => {
			expect(() => service.process('5 5\n1 2 N\nLMLMX')).toThrow(
				CommandNotValidError
			)
		})
	})
})
