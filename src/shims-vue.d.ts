declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 解决SVG引入问题
declare module '*.svg' {
  const content: string;
  export default content;
}