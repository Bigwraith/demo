import { lazy } from "react";

export const router = [
    {
        path: '/home',
        text: '首页',
        component: lazy( () => import ('pages/home'))
    }
]