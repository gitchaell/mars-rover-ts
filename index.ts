import express from 'express'
import { RoverService } from './src/RoverService'

const app = express()
const port = 3000
const service = new RoverService()

app.get('/', (req, res) => {
	const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM'
	const output = service.process(input)

	res.send(
		['INPUT', , ...input.split('\n'), , 'OUTPUT', , ...output].join('<br />')
	)
})

app.listen(port, () => {
	console.log(`Ready on port ${port}`)
})
