<template>
  <div class="kpi-card">
    <!-- Skeleton State -->
    <div v-if="loading" class="skeleton">
      <div class="skeleton-value"></div>
      <div class="skeleton-title"></div>
    </div>
    <!-- Content State -->
    <div v-else>
      <div class="kpi-value">{{ formattedValue }}</div>
      <div class="kpi-title">{{ title }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  prefix: {
    type: String,
    default: "",
  },
});

// Format the number with commas and add a prefix if provided
const formattedValue = computed(() => {
  return props.prefix + props.value.toLocaleString();
});
</script>

<style scoped>
.kpi-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  height: 100%;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.kpi-value {
  font-size: 36px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.kpi-title {
  font-size: 16px;
  color: #64748b;
}

/* Skeleton Styles */
.skeleton {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.skeleton-value {
  height: 36px;
  width: 60%;
  background-color: #e2e8f0;
  border-radius: 8px;
  margin-bottom: 12px;
}

.skeleton-title {
  height: 16px;
  width: 40%;
  background-color: #e2e8f0;
  border-radius: 6px;
}

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
</style>
