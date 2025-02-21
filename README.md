# Mars Rover

**Mars Rover Challenge en TypeScript**

Este es un proyecto para resolver el desafío del "Mars Rover" utilizando TypeScript. El objetivo es simular el movimiento de un rover en la superficie de Marte, interpretando y ejecutando comandos en una cuadrícula definida.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/gitchaell/mars-rover-ts.git
   ```

2. Navega a la carpeta del proyecto:

   ```bash
   cd mars-rover-ts
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Scripts

Este proyecto utiliza los siguientes comandos en su archivo `package.json`:

- **`npm start`**: Inicia el proyecto en modo de desarrollo con `nodemon` para la recarga automática al realizar cambios en el código.

  ```bash
  npm start
  ```

- **`npm test`**: Ejecuta las pruebas usando Jest.

  ```bash
  npm test
  ```

## Dependencias

Este proyecto incluye las siguientes dependencias y herramientas de desarrollo:

- **Dependencias**:
  - `express`: Framework web para Node.js.
- **Dependencias de desarrollo**:
  - `@eslint/js`, `eslint`, `typescript-eslint`: Para el análisis y estilo de código.
  - `jest`, `ts-jest`: Para pruebas unitarias.
  - `nodemon`: Para recarga automática del servidor durante el desarrollo.
  - `prettier`: Para formatear el código.
  - `ts-node`: Para ejecutar archivos TypeScript directamente.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```
mars-rover-ts/
│
├── src/
│   ├── Rover.ts          # Lógica del rover y su ejecución
│   ├── RoverInterpreter.ts # Lógica de interpretación de comandos
│   └── RoverService.ts   # Servicio que maneja el procesamiento de comandos
│
├── index.ts             # Punto de entrada para ejecutar el servidor
├── package.json         # Archivo de configuración de NPM
├── tsconfig.json        # Configuración de TypeScript
└── README.md            # Documentación del proyecto
```

## Autor

**Michaell Alavedra**
