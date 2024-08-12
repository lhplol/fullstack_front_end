import { BaseApi } from "@/api/base";

const freightBillApi = new BaseApi("/api/logistics/freightbill");
freightBillApi.update = freightBillApi.patch;
export { freightBillApi };
