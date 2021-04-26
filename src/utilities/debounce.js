import {ref} from 'vue';
export default {
    setup(){
        const time = ref('');

        function debounce(func, wait = 1000) {
            console.log("i am from mixin");
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait);
        }

        return {time ,debounce};
    }
}