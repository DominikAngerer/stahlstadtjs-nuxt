import { checkAndInitEditMode } from '@/plugins/helper'

export default {
  data () {
    return { 
      story: {
       content: {} 
      }
    }
  },
  mounted() {
    checkAndInitEditMode(this)
  }
}