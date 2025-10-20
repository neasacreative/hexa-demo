<template>
  <sdCards title="Latest Activities">
    <!-- Skeleton State -->
    <div v-if="loading">
      <div v-for="i in 5" :key="i" class="skeleton-item">
        <div class="skeleton-text-line"></div>
        <div class="skeleton-text-line short"></div>
      </div>
    </div>
    <!-- Content State -->
    <ul v-else class="activity-list">
      <li
        v-for="activity in activities"
        :key="activity.id"
        class="activity-item"
      >
        <p class="activity-action">{{ activity.action }}</p>
        <span class="activity-timestamp">{{ activity.timestamp }}</span>
      </li>
    </ul>
  </sdCards>
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

<style scoped>
.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-item {
  padding: 12px 0;
}

.activity-item:not(:last-child) {
  border-bottom: 1px solid #f1f2f6;
}

.activity-action {
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  margin: 0 0 4px 0;
}

.activity-timestamp {
  font-size: 13px;
  color: #94a3b8;
}

/* Skeleton Styles */
.skeleton-item {
  padding: 12px 0;
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.skeleton-item:not(:last-child) {
  border-bottom: 1px solid #f1f2f6;
}
.skeleton-text-line {
  height: 15px;
  background-color: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 8px;
}
.skeleton-text-line.short {
  width: 40%;
  height: 13px;
  margin-bottom: 0;
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
</style>
