import express from "express";

// interface StatusError extends Error {
//   status?: number;
//   error?: string;
// }

export const unknownEndpoint = (
  _request: express.Request,
  response: express.Response
) => {
  response.status(404).send({ error: "UNKNOWN ENDPOINT" });

  //   const error = new Error("UNKNOWN ENDPOINT") as StatusError;
  //   error["status"] = 404;
  //   next(error);
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
  }
  next(error);
  return;
};
