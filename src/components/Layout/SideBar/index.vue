<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
                :default-active="$route.path"
                @open="handleOpen"
                @close="handleClose"
                mode="vertical"
        >
            <sidebar-item :routes="routes" ></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import SidebarItem from './SidebarItem';

    export default {
        name: 'sidebar',
        components: {
            SidebarItem
        },
        computed: {
            routes() {
                return this.$router.options.routes
            }
        },
        created() {
            console.log('this.routes', this.routes);
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, 'keyPath ->', keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
