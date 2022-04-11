import { Request, Response, Application } from "express";

import response from "./response";

export default (app: Application) => {
    app.use("*", (req: Request, res: Response) => {
        res.status(404).send(response("Invalid request", null, false));
    });

    return app
};
