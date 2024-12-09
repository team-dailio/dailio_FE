import { fontGenerator } from "../untils/fontGenerator";

export const fonts = {
  heading: {
    1: fontGenerator(700, 40, 60),
    2: fontGenerator(700, 36, 54),
    3: fontGenerator(700, 32, 48),
    4: fontGenerator(500, 28, 40),
    5: fontGenerator(500, 24, 36),
    6: fontGenerator(500, 20, 28),
  },
  body: {
    1: fontGenerator(500, 16, 24),
    2: fontGenerator(400, 16, 24),
    3: fontGenerator(500, 14, 20),
    4: fontGenerator(400, 14, 20),
  },
  caption: {
    1: fontGenerator(500, 12, 18),
    2: fontGenerator(400, 12, 18),
    3: fontGenerator(500, 10, 16),
    4: fontGenerator(400, 10, 16),
  },
};
