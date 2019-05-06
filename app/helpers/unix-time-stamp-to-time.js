import { helper } from '@ember/component/helper';

export default helper(function unixTimeStampToTime(params/*, hash*/) {
  const unixStamp = params[0];
  const date = new Date(unixStamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const mod = hours % 12;

  return `${(mod == 0) ? 12 : mod}:${minutes} ${(hours > 12) ? 'PM' : 'AM'}`;
});
