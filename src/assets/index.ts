import noImage from './images/no-image.png';
import image1666171123325Png from './images/1666171123325.png';
import image1666171252969Png from './images/1666171252969.png';
import image1666171252972Svg from './images/1666171252972.svg';
import image1666171253144Svg from './images/1666171253144.svg';

type AssetNames =
  | 'no-image'
  | '1666171123325.png'
  | '1666171252969.png'
  | '1666171252972.svg'
  | '1666171253144.svg';
const assets = (name: AssetNames) => {
  switch (name) {
    case 'no-image':
      return noImage;
    case '1666171123325.png':
      return image1666171123325Png;
    case '1666171252969.png':
      return image1666171252969Png;
    case '1666171252972.svg':
      return image1666171252972Svg;
    case '1666171253144.svg':
      return image1666171253144Svg;
  }
};

export default assets;
