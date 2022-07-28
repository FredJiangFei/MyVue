<template>
  <Loader v-if="loading" />
  <table v-if="!loading">
    <thead>
      <tr>
        <th></th>
        <th>Player</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, index) in users" :key="player.id">
        <td>
          <img :src="player.avatar" />
        </td>
        <td>{{ player.first_name }} {{ player.last_name }}</td>
        <td>{{ player.email }}</td>
        <td>
          <button class="btn btn-blue mr-1">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef } from 'vue';
import Loader from "@/components/Loader.vue";
import { User } from '@/types/user';
import axios from 'axios';

export default defineComponent({
  name: 'User',
  setup() {
    const loading = ref(false);
    const users = shallowRef<null | User[]>(null);

    return {
      loading,
      users
    };
  },
  async created() {
    this.loading = true;
    try {
      const { data: paginator } = await axios.get(
        `https://reqres.in/api/users?page=2`
      );
      this.users = paginator.data;
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  },
});
</script>
