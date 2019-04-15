<template>
    <div class="sidebar-item">
        <template v-for="route in routes">
            <el-submenu v-if="route.children && route.children.length > 1" :index="route.path" :key="route.name">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{route.meta.title}}</span>
                </template>

                <sidebar-item :routes="route.children"></sidebar-item>
            </el-submenu>

            <el-menu-item v-else :index="route.path" :key="route.name" @click="skipRouter(route)">
                <i class="el-icon-menu"></i>
                <span slot="title">{{route.meta.title}}</span>
            </el-menu-item>
        </template>


    </div>
</template>

<script>
    export default {
        name: 'sidebarItem',
        props: {
            routes: {
                type: Array,
                required: true,
            }
        },
        created() {
            console.log('sidebar item', this.routes);
        },
        methods: {
            skipRouter(route) {
                console.log('route', route);
                this.$router.push(route.path);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
