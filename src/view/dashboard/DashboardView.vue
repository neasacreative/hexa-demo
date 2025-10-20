<template>
  <div>
    <sdPageHeader title="Dashboard" class="ninjadash-page-header-main">
      <template #buttons>
        <div class="flex items-center space-x-2">
          <button
            class="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center space-x-2"
          >
            <unicon name="plus" width="16" class="fill-white"></unicon>
            <span>Create New Report</span>
          </button>
        </div>
      </template>
    </sdPageHeader>

    <Main>
      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- KPIs Column -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <KpiCard
            :loading="loading"
            :kpi="{ title: 'Monthly Revenue', value: kpis.monthlyRevenue }"
          />
          <KpiCard
            :loading="loading"
            :kpi="{ title: 'Active Users', value: kpis.activeUsers }"
          />
        </div>

        <!-- Activity List Column -->
        <div>
          <ActivityList :loading="loading" :activities="activities" />
        </div>
      </div>
    </Main>
  </div>
</template>

<script setup>
import { Main } from "../styled";
import KpiCard from "@/components/dashboard/KpiCard.vue";
import ActivityList from "@/components/dashboard/ActivityList.vue";
import { useDashboardData } from "@/composables/useDashboardData";

// Use the composable to get reactive data
const { loading, kpis, activities } = useDashboardData();
</script>
