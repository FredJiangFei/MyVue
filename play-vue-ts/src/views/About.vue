<template>
  <DashboardLayout>
    <h1 class="text-3xl font-bold underline">About</h1>
  </DashboardLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';

export default defineComponent({
  components: {
    DashboardLayout,
  },
});
</script>
