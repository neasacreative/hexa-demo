import { ref, onMounted } from "vue";

export function useDashboardData() {
  const isLoading = ref(true);
  const kpis = ref({ revenue: 0, users: 0 });
  const activities = ref([]);

  // Mock data to be loaded
  const mockKpisData = { revenue: 74250, users: 3250 };
  const mockActivitiesData = [
    {
      id: 1,
      action: "New user 'John Doe' signed up.",
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      action: "Report 'Q3 Financials' was generated.",
      timestamp: "15 minutes ago",
    },
    {
      id: 3,
      action: "Server CPU usage exceeded 90%.",
      timestamp: "1 hour ago",
    },
    {
      id: 4,
      action: "New ticket #1234 was created.",
      timestamp: "3 hours ago",
    },
    {
      id: 5,
      action: "User 'Jane Smith' updated her profile.",
      timestamp: "5 hours ago",
    },
  ];

  const fetchData = () => {
    isLoading.value = true;
    // Simulate a network request
    setTimeout(() => {
      kpis.value = mockKpisData;
      activities.value = mockActivitiesData.slice(0, 5);
      isLoading.value = false;
    }, 1200); // 1.2-second delay
  };

  onMounted(fetchData);

  return { isLoading, kpis, activities };
}
