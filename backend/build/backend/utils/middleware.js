"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.globalErrorHandler = exports.getTokenFrom = exports.unknownEndpoint = void 0;
const unknownEndpoint = (_request, response) => {
    response.status(404).send({ error: "UNKNOWN ENDPOINT" });
};
exports.unknownEndpoint = unknownEndpoint;
const getTokenFrom = (request) => {
    const authorization = request.get("authorization");
    if (authorization && authorization.startsWith("Bearer ")) {
        return authorization.replace("Bearer ", "");
    }
    return null;
};
exports.getTokenFrom = getTokenFrom;
const globalErrorHandler = (error, _req, res, next) => {
    console.log(error.message);
    res.status(error["status"] || 500);
    res.json({ error: error.message });
    next();
};
exports.globalErrorHandler = globalErrorHandler;
const errorHandler = (error, _request, response, next) => {
    if (error.name === "CastError") {
        return response.status(400).send({ error: "malformatted id" });
    }
    else if (error.name === "ValidationError") {
        return response.status(400).json({ error: error.message });
    }
    else if (error.name === "JsonWebTokenError") {
        return response.status(400).json({ error: error.message });
    }
    else if (error.name === "TokenExpiredError") {
        return response.status(401).json({ error: "token expired" });
    }
    next(error);
    return;
};
exports.errorHandler = errorHandler;
