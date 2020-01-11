/// 237735 ms to 03:57
export const convertMilliSecToDuration = ms => {
  const sec = parseInt(ms / 1000);
  let mint = sec / 60;
  let remSec = sec % 60;

  if (remSec > 0) {
    mint = mint.toString().split('.')[0];
    mint = mint.length > 1 ? mint : `0${mint}`;
    remSec = remSec.toString().length > 1 ? remSec : `0${remSec}`;
  } else {
    mint = parseInt(mint).toString();
    mint = mint.length > 1 ? mint : `0${mint}`;
    remSec = '00';
  }
  const duration = `${mint}:${remSec}`;
  return duration;
};
