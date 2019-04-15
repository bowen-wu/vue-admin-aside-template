import Layout from "@/components/Layout/Layout";

export default [
    {
        path: "/home",
        alias: '/',
        name: "Home",
        component: Layout,
        meta: { title: "home", icon: "home" },
        children: [
            {
                path: "hello",
                name: "Hello",
                component: () => import("@/views/Hello"),
                meta: { title: "hello", icon: "hello" },
                children: [
                    {
                        path: "world",
                        name: "World",
                        component: () => import("@/views/World"),
                        meta: { title: "world", icon: "world" }
                    },
                    {
                        path: "worldSecond",
                        name: "WorldSecond",
                        component: () => import("@/views/WorldSecond"),
                        meta: { title: "worldSecond", icon: "worldSecond" }
                    }
                ]
            },
            {
                path: "test",
                name: "Test",
                component: () => import("@/views/Test"),
                meta: { title: "test", icon: "test" }
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: Layout,
        meta: { title: "about", icon: "about" },
        children: [
            {
                path: '',
                component: () => import("@/views/About"),
            }
        ]
    },
    {
        path: "/third",
        name: "Third",
        component: Layout,
        meta: { title: "third", icon: "third" },
        children: [
            {
                path: '',
                component: () => import("@/views/Third"),
            }
        ]
    }
];
