import { ref, onMounted } from "vue";

// Mock data can be defined directly within the composable for simplicity
const mockKpis = {
  monthlyRevenue: "$74,250",
  activeUsers: "3,250",
};

const mockActivities = [
  {
    id: 1,
    action: "New user 'John Doe' signed up.",
    timestamp: "2 minutes ago",
    icon: "user-plus",
    iconBg: "#5F63F2",
  },
  {
    id: 2,
    action: "Report 'Q3 Financials' was generated.",
    timestamp: "15 minutes ago",
    icon: "file-export",
    iconBg: "#20C997",
  },
  {
    id: 3,
    action: "Server CPU usage exceeded 90%.",
    timestamp: "1 hour ago",
    icon: "server",
    iconBg: "#FA8B0C",
  },
  {
    id: 4,
    action: "New ticket #1234 was created.",
    timestamp: "3 hours ago",
    icon: "ticket",
    iconBg: "#2C99FF",
  },
  {
    id: 5,
    action: "User 'Jane Smith' updated her profile.",
    timestamp: "5 hours ago",
    icon: "user-md",
    iconBg: "#8231D3",
  },
];

export function useDashboardData() {
  const loading = ref(true);
  const kpis = ref({});
  const activities = ref([]);

  const fetchData = () => {
    loading.value = true;
    // Simulate a network request
    setTimeout(() => {
      kpis.value = mockKpis;
      activities.value = mockActivities.slice(0, 5); // Ensure only 5 are returned
      loading.value = false;
    }, 1000); // 1-second delay
  };

  onMounted(fetchData);

  return { loading, kpis, activities };
}
