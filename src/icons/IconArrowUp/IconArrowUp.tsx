import {createIcon} from "@consta/icons/Icon";

const IconArrowUpSource = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
  <path d="M1.25 9.73178L9.75 1.23178M9.75 1.23178H3.29M9.75 1.23178V6.67178" stroke="white" strokeWidth="2"/>
  </svg>
);
const IconArrowUp = createIcon({
    m: IconArrowUpSource,
    s: IconArrowUpSource,
    l: IconArrowUpSource,
    xs: IconArrowUpSource,
    name: 'IconArrowLong',
});

export default IconArrowUp;