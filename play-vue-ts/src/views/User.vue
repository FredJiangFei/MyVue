<template>
  <DashboardLayout>
    <Container>
      <Loader v-if="loading" />
      <h5>UserCount: {{ userCount }}</h5>
      <input v-model="keyword" placeholder="Search" />
      <input v-model="keywordEffect" placeholder="Search Effect" />
      <label>
        Check Box Effect:
        <input type="checkbox" v-model="checkboxEffect" />
      </label>
      <button @click="saveAndClose">Finish editing</button>

      <UserList v-if="!loading" :users="users" @delete-user="onDeleteUser" />
    </Container>
  </DashboardLayout>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef, computed, watchEffect } from 'vue';
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
    UserList,
  },
  data() {
    return {
      keyword: '',
    };
  },
  watch: {
    keyword: function (newValue, oldValue) {
      console.log('newValue:', newValue);
      console.log('oldValue:', oldValue);
    },
  },
  setup() {
    const loading = ref(false);
    const users = shallowRef<User[]>([]);

    const userCount = computed(() => users.value.length);

    const keywordEffect = ref('');
    const checkboxEffect = ref(false);
    const stopSaving = watchEffect(() => {
      console.log('keywordEffect: ', keywordEffect.value);
      console.log('checkboxEffect: ', checkboxEffect.value);
    });

    const saveAndClose = () => {
      stopSaving();
    };

    return {
      loading,
      users,
      userCount,
      keywordEffect,
      checkboxEffect,
      saveAndClose
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
      this.users = this.users.filter((x: User) => x.id !== userId);
    },
  },
});
</script>
