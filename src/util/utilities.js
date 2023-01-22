import RelativeTime from '@yaireo/relative-time/relative-time.min';

export const fixImgUrl = (url) => {
  if (url.split('.').length !== 5) {
    const [firstPart, secondPart, thirdPart, fourthPart, ...rest] =
      url.split('.');
    const extension = fourthPart.split('?')[0];
    return `${firstPart}.${secondPart}.${thirdPart}.${extension}`;
  }
  return url;
};

export const fixNumber = (num) => {
  if (!num) return '0';

  let fixedNumber;
  if (num >= 1000 && num <= 999999) {
    fixedNumber = `${(num / 1000).toFixed(1)}k`;
  } else if (num >= 1000000) {
    fixedNumber = `${(num / 1000000).toFixed(1)}m`;
  } else {
    fixedNumber = num.toString();
  }

  return fixedNumber;
};

export const fixTime = (time) => {
  const relTime = new RelativeTime({ locale: 'es' });
  return relTime.from(new Date(time * 1000));
};

export const handleDisplayError = (e) => {
  e.target.style.display = 'none';
};
