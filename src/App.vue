<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue';
import Loading from '@/components/Loading.vue';
import Error from '@/components/Error.vue';
import { provide, ref } from 'vue';

const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)


provide('isLoading', isLoading);
provide('hasError', hasError);

</script>

<template>
  <Error v-if="hasError" />
  <Loading v-if="isLoading" />
  <div class="mx-6 md:mx-[5.4rem]">
    <header class="mt-[0.9rem]">
      <Navigation />
    </header>
  </div>

  <div class="mx-6 md:mx-[5.4rem]">
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
