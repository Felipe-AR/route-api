import { app } from './app'

const SERVER_PORT = Bun.env.SERVER_PORT

app.listen(SERVER_PORT, () => console.log(`Server is listening at http://localhost:${SERVER_PORT}`))