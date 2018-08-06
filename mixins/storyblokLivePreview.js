import { checkAndInitEditMode } from '@/plugins/helper'

export default {
  mounted() {
    checkAndInitEditMode(this)
  }
}