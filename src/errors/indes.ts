import express, { NextFunction } from 'express';

interface customError extends Error {
        status?:number; 
        message:string;
}

export function mongoErrorHandler() {
    // to be added...
}

export function customErrorHandler(err: customError , _req:express.Request, res:express.Response, next:express.NextFunction) {
    if (err.status && err.message) {
        res.status(err.status).send({ message:err.message })
    }
    next(err)
}

export function serverErrorHandler(_err: Error, _req:express.Request, res:express.Response, _next:NextFunction) {
    res.status(500).send({ message: 'Internal server error' })
}