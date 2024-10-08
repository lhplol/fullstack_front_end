<script lang="ts" setup>
import { RePlusPage } from "@/components/RePlusPage";
import { useFreightBill } from "./utils/hook";

const { api, auth } = useFreightBill();
</script>

<template>
  <RePlusPage :api="api" :auth="auth" locale-name="freightBill" />
</template>
