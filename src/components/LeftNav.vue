<template>
  <v-navigation-drawer 
    id="appDrawer"
    fixed
    :dark="true"
    app
    v-model="drawer"
    width="260">
    <v-toolbar color="primary darken-1" dark>
      <img v-bind:src="computeLogo" height="36" alt="Vue Material Admin Template">
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">华制诊断云</span>
      </v-toolbar-title>        
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in menus"
        :key="item.title"
        @click="goRouter(item)"
        :class="{isActiveMenu:activeMenu == item.title}"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menu from "@/api/menu";
export default {
  data() {
    return {
      menus: [],
      right: null,
      drawer: true,
      menuIsActive:false,
      activeMenu:"控制台"
    };
  },
  computed: {
    computeGroupActive() {
      return true;
    },
    computeLogo() {
      return "/static/m.png";
    },

    sideToolbarColor() {
      return this.$vuetify.options.extra.sideNav;
    },
  },
  created() {
    let $this = this;
    window.getApp.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });
    menu.forEach(element => {
      if (!element.hidden) {
        $this.menus.push(element);
      }
    });
  },
  methods: {
    goRouter(e) {
      console.log(e);
      this.activeMenu = e.title;
      this.$router.push(e.path);
    }
  }
};
</script>

<style lang="stylus">
#appDrawer {
    overflow: hidden;

    .drawer-menu--scroll {
        height: calc(100vh - 48px);
        overflow: auto;
    }
}

.theme--dark .v-list, .application .theme--dark.v-list {
    color: #ffffff;
}

.theme--dark .v-list .v-list__tile--link:hover, .application .theme--dark.v-list .v-list__tile--link:hover, .theme--dark .v-list .v-list__tile--highlighted, .application .theme--dark.v-list .v-list__tile--highlighted, .theme--dark .v-list .v-list__group__header:hover, .application .theme--dark.v-list .v-list__group__header:hover, .theme--dark .v-list .v-list__group--active:before, .application .theme--dark.v-list .v-list__group--active:before, .theme--dark .v-list .v-list__group--active:after, .application .theme--dark.v-list .v-list__group--active:after {
    background: #009199 !important;
}
.isActiveMenu{
    background-color: black;
}
</style>