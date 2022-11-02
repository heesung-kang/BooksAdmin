<template>
  <div>
    <ul>
      <li>
        <section class="skeleton-book-list">
          <div class="img">
            <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
          </div>
        </section>
      </li>
      <li>
        <section class="skeleton-book-list">
          <div class="img">
            <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
          </div>
        </section>
      </li>
      <li>
        <section class="skeleton-book-list">
          <div class="img">
            <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
          </div>
        </section>
      </li>
      <li>
        <section class="skeleton-book-list">
          <div class="img">
            <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
          </div>
        </section>
      </li>
      <li>
        <section class="skeleton-book-list">
          <div class="img">
            <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
            <v-skeleton-loader type="text"></v-skeleton-loader>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookListMobileSkeleton",
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0 !important;
  padding: 0 !important;
  li {
    margin-bottom: 8px;
    .skeleton-book-list {
      background-color: #fff;
      padding: 0 20px 10px;
      .img {
        min-width: 150px;
      }
      .text {
        min-width: 80px;
      }
    }
  }
}
</style>
