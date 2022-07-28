<template>
  <table>
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
          <button class="btn btn-blue tw-mr-1">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '@/types/user';

export default defineComponent({
  props: {
    users: {
      type: Array as PropType<User[]>,
      required: true,
      default: []
    }
  },
});
</script>
