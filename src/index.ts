import express, { Application } from 'express'
import * as dotenv from "dotenv"
import 'express-async-errors'
import routes from './routes'
import errorHandler from "./utils/error-handler"

dotenv.config();

const app: Application = express()

app.listen(process.env.PORT, async () => {
    // Connect to database
    import("./database/mongo")

    console.log(`::> Server listening on port ${process.env.PORT}`)
})

app.use(express.json())

app.use('/', routes)

// Error Handler
errorHandler(app)

// On server error
app.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});
