<template>
  <div class="bg-white dark:bg-white/10 p-6 rounded-lg shadow-sm">
    <!-- Skeleton State -->
    <div v-if="loading" class="animate-pulse">
      <div class="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-4"></div>
      <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
    </div>
    <!-- Content State -->
    <div v-else>
      <h2 class="text-4xl font-bold text-slate-800 dark:text-white">
        {{ kpi.value }}
      </h2>
      <p class="text-base text-slate-500 dark:text-slate-400 mt-1">
        {{ kpi.title }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  kpi: {
    type: Object,
    required: true,
    // Example: { title: 'Monthly Revenue', value: '$74,250' }
  },
});
</script>
