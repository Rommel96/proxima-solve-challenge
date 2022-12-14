export const buildSuccessResponse = (message?: string, data = {}) => {
  return {
    message: message || "Response success",
    statusMessage: "success",
    status: 1,
    data,
  };
};
