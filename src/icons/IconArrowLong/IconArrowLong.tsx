import {createIcon} from "@consta/icons/Icon";

const IconArrowLongSource = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1556_118216)">
            <path d="M16.5 5.5L21.1667 12.5L16.5 19.5" stroke="#CF191C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.16602 12.5L21.166 12.5" stroke="#CF191C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_1556_118216">
                <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
            </clipPath>
        </defs>
    </svg>
);


const IconArrowLong = createIcon({
    m: IconArrowLongSource,
    s: IconArrowLongSource,
    l: IconArrowLongSource,
    xs: IconArrowLongSource,
    name: 'IconArrowLong',
});

export default IconArrowLong;