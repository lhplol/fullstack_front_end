import { freightBillApi } from "./api";
import { reactive } from "vue";
import { hasAuth } from "@/router/utils";

export function useFreightBill() {
  // 权限判断，用于判断是否有该权限
  const api = reactive(freightBillApi);
  const auth = reactive({
    list: hasAuth("list:freightBill"),
    create: hasAuth("create:freightBill"),
    delete: hasAuth("delete:freightBill"),
    update: hasAuth("update:freightBill"),
    export: hasAuth("export:freightBill"),
    import: hasAuth("import:freightBill"),
    batchDelete: hasAuth("batchDelete:freightBill")
  });

  return {
    api,
    auth
  };
}
