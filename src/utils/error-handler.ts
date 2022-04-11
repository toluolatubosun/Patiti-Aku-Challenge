import { Request, Response, Application } from "express";

import response from "./response";

export default (app: Application) => {
    app.use("*", (req: Request, res: Response) => {
        res.status(404).send(response("Invalid request", null, false));
    });

    app.use((error, req, res, next) => {
        res.status(error.status || 500).send(response(error.message || "An Error Occured", null, false));
    });

    return app
};
