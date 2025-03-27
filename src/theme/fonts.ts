import { moderateScale, normalize, normalScale } from './device/normalize';

const size = {
  font7: normalize(7),
  font8: normalize(8),
  font10: normalize(10),
  font12: normalize(12),
  font14: normalize(14),
  font16: normalize(16),
  font18: normalize(18),
  font20: normalize(20),
  font22: normalize(22),
  font24: normalize(24),
  font26: normalize(26),
  font28: normalize(28),
  font30: normalize(30),
  font32: normalize(32),
  font36: normalize(36),
};

const opacity = {
  opacity0p15: 0.15,
  opacity0p1: 0.1,
  opacity0p2: 0.2,
  opacity0p3: 0.3,
  opacity0p4: 0.4,
  opacity0p5: 0.5,
  opacity0p6: 0.6,
  opacity0p7: 0.7,
  opacity0p8: 0.8,
  opacity0p9: 0.9,
  opacity1: 1,
};

const borderWidth = {
  borderWidth0p2: normalScale(0.2),
  borderWidth0p4: normalScale(0.4),
  borderWidth0p5: normalScale(0.5),
  borderWidth0p6: normalScale(0.6),
  borderWidth0p8: normalScale(0.8),
  borderWidth1: normalScale(1),
  borderWidth2: normalScale(2),
  borderWidth3: normalScale(3),
  borderWidth1p5: normalScale(1.5),
  borderWidth10: normalScale(10),
};

const borderRadius = {
  radius1: moderateScale(1),
  radius2: moderateScale(2),
  radius3: moderateScale(3),
  radius4: moderateScale(4),
  radius5: moderateScale(5),
  radius6: moderateScale(6),
  radius8: moderateScale(8),
  radius10: moderateScale(10),
  radius12: moderateScale(12),
  radius14: moderateScale(14),
  radius16: moderateScale(16),
  radius18: moderateScale(18),
  radius20: moderateScale(20),
  radius28: moderateScale(28),
  radius32: moderateScale(32),
  radius35: moderateScale(35),
  radius40: moderateScale(40),
  radius50: moderateScale(50),
  radius58: moderateScale(58),
  radius64: moderateScale(64),
  radius78: moderateScale(78),
};

export { borderRadius, borderWidth, opacity, size };

