import express, { Request } from "express";

interface StatusError extends Error {
  status?: number;
}

export const unknownEndpoint = (
  _request: express.Request,
  response: express.Response
) => {
  response.status(404).send({ error: "UNKNOWN ENDPOINT" });
};

export const getTokenFrom = (request: Request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

export const globalErrorHandler = (
  error: StatusError,
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(error.message);
  res.status(error["status"] || 500);
  res.json({ error: error.message });
  next();
};

export const errorHandler = (
  error: Error,
  _request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "TokenExpiredError") {
    return response.status(401).json({ error: "token expired" });
    // .send({ data: "token expired", status: error });
  }
  next(error);
  return;
};
