import {ref} from 'vue'
export default {
    setup(){
        const value = ref('from mixin')

        const testMethod = () => {
            value.value = 'modified value';
        }

        return {value, testMethod};
    }
}
