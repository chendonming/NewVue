<template>
  <div class="home">
    <component-select />
  </div>
</template>

<script>
import ComponentSelectVue from '../components/ComponentSelect.vue';

export default {
  name: 'Home',
  components: {
    ComponentSelect: ComponentSelectVue,
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
