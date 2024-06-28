<template>
  <div id="app">
    <HeaderCompo />
    <router-view @select-conversation="setConversation" />
    <FooterCompo />
  </div>
</template>

<script>
import HeaderCompo from './components/HeaderCompo.vue';
import FooterCompo from './components/FooterCompo.vue';

export default {
  data() {
    return {
      selectedConversation: null,
    };
  },
  methods: {
    setConversation(conversation) {
      this.selectedConversation = conversation;
    },
  },
  components: {
    HeaderCompo,
    FooterCompo,
  },
};
</script>
