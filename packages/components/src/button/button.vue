<template>
    <button class="ea-button" :class="buttonStyle"><slot></slot></button>
</template>

<!-- <script  lang="ts">
    
    export default defineComponent({
        name:"ea-button",
    })
</script> -->
<script setup lang="ts">
import "./style/index.less"
import {computed} from "vue";

defineOptions({name:'ea-button'})
type ButtonProps = {
  type?: string
}
const buttonProps=defineProps<ButtonProps>()
const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
<style scoped>

</style>