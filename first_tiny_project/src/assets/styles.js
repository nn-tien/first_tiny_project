import { Dimensions, Platform } from 'react-native';

let { height, width } = Dimensions.get('window');
const deviceType = Platform.OS === 'ios' ? true : false;

if (width > height) {
  height = width;
  width = height;
}

// Calculating ratio from iPhone breakpoints
const ratioX = deviceType
  ? width < 550
    ? width < 430
      ? width < 375
        ? width < 320
          ? 0.75
          : 0.875
        : 1
      : 1.125
    : 1.25
  : 1;
const ratioY = deviceType
  ? height < 800
    ? height < 640
      ? height < 568
        ? height < 480
          ? 0.75
          : 0.875
        : 1
      : 1.125
    : 1.25
  : 1;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

export default (StyleFont = {
  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  FONT_SIZE_LARGE: em(1.5),
  FONT_SIZE_LARGER: em(1.75),
  defaultFont: { fontFamily: 'SF Pro Display' },
  defaultColor: '#0077b5',
  defaultBackgroundColor: { backgroundColor: '#0077b5' },
  // defaultColor: { color: '#0077b5' },
  // defaultBackgroundColor: { backgroundColor: '#0077b5' },
  defaultPaddingLeft: { paddingLeft: 20 },
  defaultPaddingRight: { paddingRight: 20 }
});
