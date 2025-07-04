import {createIcon} from "@consta/icons/Icon";

const IconClockSource = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6.5V12.5L16 14.5" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

);
const IconClock = createIcon({
    m: IconClockSource,
    s: IconClockSource,
    l: IconClockSource,
    xs: IconClockSource,
    name: 'IconClock',
});

export default IconClock;