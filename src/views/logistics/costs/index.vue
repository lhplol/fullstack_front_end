<script lang="ts" setup>
import RePlusCRUD from "@/components/RePlusCRUD";
import { useFreightBill } from "./utils/hook";

const { api, auth } = useFreightBill();
</script>

<template>
  <RePlusCRUD :api="api" :auth="auth" locale-name="freightBill" />
</template>
