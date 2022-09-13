<template>
  <div class="header">
    <div class="fixed-1200 header-wrapper">
      <div class="logo">logo</div>
      <div class="header-list">
        <div
          v-for="item in navList"
          :key="item.navId"
          @click="routerJump(item)"
        >
          <div class="text">{{ item.navName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navList from '../assets/json/nav.json'
export default {
  data() {
    return {
      navList,
    }
  },
  methods: {
    routerJump({ path }) {
      if (!path) return
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background: rgba($color: #000000, $alpha: 1);
  display: flex;
  justify-content: center;
  align-items: center;
  .header-wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .logo {
      height: 100%;
      width: 150px;
      background: #eee;
      color: darkblue;
    }
    .header-list {
      display: flex;
      .text {
        cursor: pointer;
        box-sizing: border-box;
        padding: 0 20px;
      }
    }
  }
}
</style>
