<template>
  <div class="potato-sidebar">
    <button
      class="sidebar-button"
      v-for="(option, index) in options"
      :key="index"
    >
      {{ option.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PotatoSidebar",
  data() {
    return {
      greeting: "Sidebar",
      options: [
        {
          name: "Javascript"
        },
        {
          name: "HTML"
        },
        {
          name: "SCSS"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.potato-sidebar {
  padding: var(--size-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--blue-800);
  font-family: var(--font-sans);

  .sidebar-button {
    width: 100%;
    height: var(--size-8);
    background: var(--blue-700);
    margin: var(--size-1) 0;
    border: var(--border-none);
    border-radius: var(--radii-sm);
    color: var(--blue-100);
    transition: all 0.1s ease-in;
    font-size: var(--size-4);
    text-align: left;
    padding-left: var(--size-4);

    &:hover {
      cursor: pointer;
      background: var(--blue-600);
    }
  }
}
</style>
