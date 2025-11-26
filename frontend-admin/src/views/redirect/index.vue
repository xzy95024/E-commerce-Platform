<!--
 * @Descripttion: 
 * @version: 
* @Date: 2021-04-21 09:18:32
* @LastEditors:Ziyang

* @Author:Ziyang



-->
<script>
import { h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    router.replace(route.fullPath.replace(/^\/redirect/, ''))
  },
  render() {
    return h('div')
  },
}
</script>
