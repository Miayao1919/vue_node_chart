<template>
  <table class="main-container h-100">
    <tbody>
      <tr>
        <td class="align-middle welcom-msg">Hello {{ userInfo }}! This is the messag from backend REST api :)</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Api from '@/services/Api'

export default {
  name: 'HomePage',
  data() {
    return {
      userInfo: null,
    }
  },
  mounted() {
    // get user info from backend rest api
    Api().get('getUser').then(res => {
      this.userInfo = res.data
    });
  }
}
</script>

<style scoped lang="scss">
.welcom-msg {
  font-size: 2em;
}
</style>
