import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Account from "./components/pages/accounts/Account";
import AccountList from "./components/pages/accounts/AccountList";
import CreateAccount from "./components/pages/accounts/CreateAccount";

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
          path: "/accounts/account-list",
          name: "accountlist",
          component: AccountList
        },
        {
          path: "/accounts/create-account",
          name: "create-account",
          component: CreateAccount
        }
      ]
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active"
});
export default router;
