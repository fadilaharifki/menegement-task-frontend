import axiosInstance from "./axiosInstance";

export const getStatusesAPI = async () => {
  const res = await axiosInstance.get("/master/statuses");
  return res.data.data;
};

export const getPriorityAPI = async () => {
  const res = await axiosInstance.get("/master/priority");
  return res.data.data;
};

export const getTypeAPI = async () => {
  const res = await axiosInstance.get("/master/type");
  return res.data.data;
};
