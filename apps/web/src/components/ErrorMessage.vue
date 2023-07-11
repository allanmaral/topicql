<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ error?: any }>();
const router = useRouter();

onMounted(() => {
  console.error(props.error);
});

function handleReload() {
  router.go(0);
}
</script>

<template>
  <div
    class="mx-auto mt-60 flex w-72 flex-col items-center gap-4 rounded-xl bg-slate-800 p-4"
  >
    <div class="text-lg font-bold">Ops!</div>
    <div>Algo de errado não está certo</div>
    <button
      class="flex h-10 items-center rounded-full bg-primary px-8"
      @click="handleReload"
    >
      Atualizar página
    </button>
  </div>
</template>
