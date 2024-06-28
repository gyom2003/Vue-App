<template>
  <Menubar :model="items">
    <template #start>
      <h3>Vue Messaging App</h3>
    </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar';
export default {
  name: 'HeaderCompo',
  components: { Menubar },
  data() {
    return {
      items: [
        {
          label: 'Conversations',
          icon: 'pi pi-fw pi-comments',
          to: '/',
        },
        {
          label: 'Messages',
          icon: 'pi pi-fw pi-envelope',
          to: '/',
        },  
      ],
    };
  },
};
</script>
