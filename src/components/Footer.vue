<template>
  <div class="potato-footer">
    {{ footerlytics }}
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerlytics: "100 views"
    };
  }
};
</script>

<style lang="scss" scoped>
.pototo-footer {
  font-size: var(--size-4);
  background: var(--blue-900);
  color: var(--blue-300);
  display: flex;
  align-items: center;
  padding: var(--size-3);
  transition: all 0.1s ease-in;

  &:hover {
    cursor: pointer;
    color: var(--blue-100);
  }
}
</style>
