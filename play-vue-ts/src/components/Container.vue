<template>
  <div class="tw-container tw-mx-auto">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container',
});
</script>
