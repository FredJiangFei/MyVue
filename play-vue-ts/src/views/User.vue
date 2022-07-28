<template>
  <DashboardLayout>
    <Container>
      <Loader v-if="loading" />
      <UserList v-if="!loading" :users="users" @delete-user="onDeleteUser"/>
    </Container>
  </DashboardLayout>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef } from 'vue';
import Loader from '@/components/Loader.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import Container from '@/components/Container.vue';
import UserList from '@/components/User/UserList.vue';
import { User } from '@/types/user';
import axios from 'axios';

export default defineComponent({
  name: 'User',
  components: {
    Loader,
    DashboardLayout,
    Container,
    UserList
  },
  setup() {
    const loading = ref(false);
    const users = shallowRef<null | User[]>(null);

    return {
      loading,
      users,
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
   methods: {
    onDeleteUser(userId: number) {
      console.log(userId);
    }
  }
});
</script>
