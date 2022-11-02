<template>
  <v-skeleton-loader
    type="table-thead, table-tbody"
    :types="{ 'table-tbody': 'table-row-divider@3', 'table-row': 'table-cell@3', 'table-thead': 'heading@3' }"
  ></v-skeleton-loader>
</template>

<script>
export default {
  name: "TableSkeleton",
};
</script>

<style lang="scss" scoped></style>
