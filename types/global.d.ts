// Types for compiled templates
declare module 'weather-app/templates/*' { 
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
