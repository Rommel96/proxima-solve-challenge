export const buildFailedResponse = (message?: string, error?: unknown) => {
  return {
    message: message || "Response failed",
    statusMessage: "failed",
    status: 0,
    error,
  };
};
