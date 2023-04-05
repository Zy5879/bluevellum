import express from "express";

// interface StatusError extends Error {
//   status?: number;
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
