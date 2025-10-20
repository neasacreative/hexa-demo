<template>
    <a-menu
        :open-keys="openKeys"
        v-model:selectedKeys="selectedKeys"
        :mode="mode"
        :theme="darkMode ? 'dark' : 'light'"
        class="scroll-menu"
        @openChange="onOpenChange"
        @click="onClick"
    >
        <!-- Boilerplate: Minimal menu structure -->
        <!-- Add your menu items here -->
        <a-menu-item @click="toggleCollapsed" key="starter">
            <template #icon>
                <unicon name="circle"></unicon>
            </template>
            <router-link to="/starter">
                {{ t('blank') }} {{ t('page') }}
            </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script>
import {
    computed,
    reactive,
    ref,
    toRefs,
    watch,
    watchEffect,
    defineComponent,
} from 'vue';
import VueTypes from 'vue-types';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
//import { NavTitle } from "./style";
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'AsideItems',
    props: {
        toggleCollapsed: VueTypes.func,
        events: VueTypes.object,
    },
    components: {
        //NavTitle,
    },
    setup(props) {
        const { t } = useI18n();
        const store = useStore();
        const darkMode = computed(() => store.state.themeLayout.data);
        const mode = ref('inline');
        const { events } = toRefs(props);
        const {
            onRtlChange,
            onLtrChange,
            modeChangeDark,
            modeChangeLight,
            modeChangeTopNav,
            modeChangeSideNav,
        } = events.value;

        const router = computed(() => useRoute());
        const state = reactive({
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
            selectedKeys: ['home'],
            openKeys: ['dashboard'],
            preOpenKeys: ['dashboard'],
        });

        const onOpenChange = (keys) => {
            state.openKeys =
                keys[keys.length - 1] !== 'recharts'
                    ? [keys.length && keys[keys.length - 1]]
                    : keys;
        };

        const onClick = (item) => {
            if (item.keyPath.length === 1) state.openKeys = [];
        };

        watchEffect(() => {
            const matched = router.value.matched;
            if (!matched || matched.length === 0) return;

            // Helper function to safely get route name
            const getRouteName = (index) => {
                return matched[index]?.name || null;
            };

            // Determine selected and open keys based on route depth
            // Check from deepest to shallowest (fixed logic order)
            if (matched.length > 3) {
                // Deep nested route (4+ levels)
                const selectedKey = getRouteName(3) || getRouteName(2) || getRouteName(1);
                const openKey = getRouteName(1);
                
                if (selectedKey) state.selectedKeys = [selectedKey];
                if (openKey) {
                    state.openKeys = [openKey];
                    state.preOpenKeys = [openKey];
                }
            } else if (matched.length > 2) {
                // Nested route (3 levels)
                const selectedKey = getRouteName(2) || getRouteName(1);
                const openKey = getRouteName(1);
                
                if (selectedKey) state.selectedKeys = [selectedKey];
                if (openKey) {
                    state.openKeys = [openKey];
                    state.preOpenKeys = [openKey];
                }
            } else if (matched.length > 1) {
                // Top level route (2 levels)
                const key = getRouteName(1);
                if (key) {
                    state.selectedKeys = [key];
                    state.openKeys = [key];
                    state.preOpenKeys = [key];
                }
            }
        });

        watch(
            () => state.openKeys,
            (val, oldVal) => {
                state.preOpenKeys = oldVal;
            }
        );

        return {
            mode,
            ...toRefs(state),
            darkMode,
            onRtlChange,
            onLtrChange,
            modeChangeDark,
            modeChangeLight,
            modeChangeTopNav,
            modeChangeSideNav,
            onOpenChange,
            onClick,
            t,
        };
    },
});
</script>
