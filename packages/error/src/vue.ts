import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    test?: string
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    test: string
  }
}
