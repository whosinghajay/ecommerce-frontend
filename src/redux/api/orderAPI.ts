import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllOdersResponse,
  MessageResponse,
  NewOrderRequest,
} from "../../types/api-types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/order/`,
  }),
  endpoints: (builder) => ({
    newOrder: builder.mutation<MessageResponse, NewOrderRequest>({
      query: (order) => ({ url: "new", method: "POST", body: order }),
    }),
    myOrders: builder.query<AllOdersResponse, string>({
      query: (id) => `my?id=${id}`,
    }),
  }),
});

export const { useNewOrderMutation } = orderApi;
