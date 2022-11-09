import * as express from 'express';
export const middleware = (schema: { validateAsync: (arg0: any) => any; }) =>{
    return async (req: express.Request, res: express.Response, next: () => void) => {
        try {
            const validated = await schema.validateAsync(req.body);
            req.body = validated
            next();
        } catch (error) {
            return res.status(400).json({error: error.details.map((detail: { message: any; }) => detail.message)})
        }
    }
}