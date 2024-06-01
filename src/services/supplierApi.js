import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";



export const supplierApi = createApi({
    reducerPath: "supplierApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api" }),
    endpoints: (builder) => ({
        getSuppliers: builder.query({
            query: () => "/suppliers",
            providesTags: ["Supplier"],
        }),
    })
});



export const { useGetSuppliersQuery } = supplierApi;