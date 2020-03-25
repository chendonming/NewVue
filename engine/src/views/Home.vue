<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  created() {
    const myNotification = new Notification('标题', {
      body: '通知正文内容',
    });

    myNotification.onclick = () => {
      console.log('通知被点击');
    };
  },
};
</script>
