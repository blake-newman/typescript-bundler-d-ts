
import Vue from 'vue'

declare module 'vue/types/vue.d.ts' {
  interface Vue {
    test?: string
  }
}

declare module 'vue/types/options.d.ts' {
  interface ComponentOptions<V extends Vue> {
    test: string
  }
}
