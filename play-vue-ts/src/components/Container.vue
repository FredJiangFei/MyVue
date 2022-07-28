<template>
  <div class="tw-mx-auto tw-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container',
});
</script>
