/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.png?url" {
  const content: any;
  export default content;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}

declare module "*.svg?component" {
  const content: any;
  export default content;
}
