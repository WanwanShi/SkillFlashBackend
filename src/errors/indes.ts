import express from 'express';

export function mongoErrorHandler() {
    // to be added...
}

export function customErrorHandler(err: any , _req:express.Request, res:express.Response, next:express.NextFunction) {
    if (err.status && err.message) {
        // to be fixed 👇
        res.status(err.status).send({ err.message })
    }
    next(err)
}

export function serverErrorHandler() {
    
}