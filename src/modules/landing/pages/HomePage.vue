<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
      Welcome to our website
    </h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>{{ counter }}</p>
    <button @click="counter++">+1</button>
  </div>
</template>

<script lang="ts" setup>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

const counter = ref(0);

onMounted(() => console.log('onMounted'));
onUpdated(() => console.log('onUpdated'));
onUnmounted(() => console.log('onUnmounted'));
onBeforeMount(() => console.log('onBeforeMount'));
onBeforeUpdate(() => console.log('onBeforeUpdate'));
onBeforeUnmount(() => console.log('onBeforeUnmount'));
onErrorCaptured(() => console.log('onErrorCaptured'));
onRenderTracked(() => console.log('onRenderTracked'));
onRenderTriggered(() => console.log('onRenderTriggered'));
onActivated(() => console.log('onActivated'));
onDeactivated(() => console.log('onDeactivated'));
</script>
