<template>
    <el-container class="layout">
        <sidebar class="sidebar-container"/>
        <el-container class="right-container">
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <transition name="fade-transform" mode="out-in">
                    <router-view />
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Sidebar from './SideBar/index';

    export default {
        name: 'layout',
        components: {
            Sidebar,
        }
    }
</script>

<style scoped lang="scss">
    .layout {
        height: 100vh;
        .sidebar-container {
            width: 180px;
        }
        .right-container {
            margin-let: 16px;
            .header {
                background-color: #f2f2f2;
                border: 1px solid #333;
                margin-bottom: 12px;
            }
            .main {
                border: 1px solid #000;
            }
        }
    }
</style>
