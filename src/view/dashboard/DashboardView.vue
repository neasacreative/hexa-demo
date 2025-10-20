<template>
  <div>
    <sdPageHeader title="Dashboard" class="ninjadash-page-header-main">
      <template #buttons>
        <sdButton type="primary" size="lg">
          <unicon name="plus" width="14"></unicon>
          <span>Create New Report</span>
        </sdButton>
      </template>
    </sdPageHeader>

    <Main>
      <a-row :gutter="25">
        <a-col :xxl="12" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <a-row :gutter="25">
            <a-col :xxl="12" :md="12" :sm="24" :xs="24" class="mb-25">
              <KpiCard
                :loading="isLoading"
                title="Monthly Revenue"
                :value="kpis.revenue"
                prefix="$"
              />
            </a-col>
            <a-col :xxl="12" :md="12" :sm="24" :xs="24" class="mb-25">
              <KpiCard
                :loading="isLoading"
                title="Active Users"
                :value="kpis.users"
              />
            </a-col>
          </a-row>
        </a-col>
        <a-col
          :xxl="12"
          :xl="12"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24"
          class="mb-25"
        >
          <ActivityList :loading="isLoading" :activities="activities" />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup>
import { Main } from "../styled";
import KpiCard from "@/view/dashboard/KpiCard.vue";
import ActivityList from "@/view/dashboard/ActivityList.vue";
import { useDashboardData } from "/useDashboardData";

// Use the composable to get reactive data
const { isLoading, kpis, activities } = useDashboardData();
</script>

<style scoped>
.mb-25 {
  margin-bottom: 25px;
}
</style>
