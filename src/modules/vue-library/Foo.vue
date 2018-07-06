<template>
 <div>
      <div>Foo</div>
      <router-link to="/vue-library/index/bar">link BAR</router-link>
      <router-link to="/vue-library/index/baz">link BAZ</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Foo',
  created () {
    let { routes } = this.$router.options
    let routeData = routes.find(r => r.path + '/index' === this.$route.path)
    routeData.children[0].children = [
      { path: 'bar', component: () => import('./Bar'), hidden: true },
      { path: 'baz', component: () => import('./Baz'), hidden: true }
    ]
    this.$router.addRoutes([routeData])
  }
}
</script>