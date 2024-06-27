import { useWindowSize } from "./useWindowSize";

const SCREEN_SM = 640;
const SCREEN_MD = 768;
const SCREEN_LG = 1024;
const SCREEN_XL = 1280;
const SCREEN_2XL = 1536;

export const useScreen = () => {
  const { width } = useWindowSize();
  return {
    isSm: width >= SCREEN_SM,
    isMd: width >= SCREEN_MD,
    isLg: width >= SCREEN_LG,
    isXl: width >= SCREEN_XL,
    is2Xl: width >= SCREEN_2XL,
  };
};
