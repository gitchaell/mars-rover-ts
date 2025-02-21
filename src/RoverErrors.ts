export class InputNotValidError extends Error {
	constructor() {
		super('Invalid input')
		this.name = 'InputNotValidError'
	}
}

export class PlateauDimensionNotValidError extends Error {
	constructor() {
		super('Invalid plateau dimensions')
		this.name = 'PlateauDimensionNotValidError'
	}
}

export class PositionNotValidError extends Error {
	constructor() {
		super('Invalid position')
		this.name = 'PositionNotValidError'
	}
}

export class DirectionNotValidError extends Error {
	constructor() {
		super('Invalid direction')
		this.name = 'DirectionNotValidError'
	}
}

export class CommandNotValidError extends Error {
	constructor() {
		super('Invalid command')
		this.name = 'CommandNotValidError'
	}
}
