import { helper } from '@ember/component/helper';

export default helper(function(params /* , hash */) {
  const [unixStamp] = params;
  const date = new Date(unixStamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const module = hours % 12;

  return `${module === 0 ? 12 : module}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
});
