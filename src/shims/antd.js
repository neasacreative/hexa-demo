// Shim for @ant-design/pro-components to use ant-design-vue instead of antd
import { ref } from 'vue';
export * from 'ant-design-vue';
export { default } from 'ant-design-vue';
export { version } from 'ant-design-vue';

// Mock React hooks with Vue equivalents
export const useMemo = (fn) => fn();
export const useBreakpoint = () => ref({});
