<template>
  <div class="bg-white dark:bg-white/10 p-6 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold text-slate-800 dark:text-white mb-4">
      Latest Activities
    </h3>
    <!-- Skeleton State -->
    <div v-if="loading" class="animate-pulse space-y-4">
      <div v-for="i in 5" :key="i" class="flex items-center space-x-4">
        <div
          class="h-10 w-10 bg-slate-200 dark:bg-slate-700 rounded-full"
        ></div>
        <div class="flex-1 space-y-2">
          <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
          <div class="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
    <!-- Content State -->
    <ul v-else class="space-y-4">
      <li
        v-for="activity in activities"
        :key="activity.id"
        class="flex items-center space-x-4"
      >
        <div
          class="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
          :style="{ backgroundColor: activity.iconBg }"
        >
          <unicon
            :name="activity.icon"
            class="fill-white"
            width="20"
            height="20"
          ></unicon>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-700 dark:text-slate-300">
            {{ activity.action }}
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            {{ activity.timestamp }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  activities: {
    type: Array,
    required: true,
  },
});
</script>
