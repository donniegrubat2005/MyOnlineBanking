import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Account from "./components/pages/accounts/Account";
import List from "./components/pages/accounts/List";
import Create from "./components/pages/accounts/Create";
import Edit from "./components/pages/accounts/Edit";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/accounts",
      name: "account",
      component: Account,
      children: [
        {
          path: "/accounts/list",
          name: "accountlist",
          component: List
        },
        {
          path: "/accounts/create",
          name: "createaccount",
          component: Create
        },
        {
          path: "/accounts/edit/:id",
          name: "editaccount",
          component: Edit
        }
      ]
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active"
});
export default router;
