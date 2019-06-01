import { helper } from '@ember/component/helper';
import { capitalize } from '@ember/string';

export default helper(function(params /* , hash */) {
  return capitalize(params[0]);
});
