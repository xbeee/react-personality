import {createIcon} from "@consta/icons/Icon";

const IconUserOrangeSource = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7475 11.4247C14.4881 11.4247 16.7098 9.20297 16.7098 6.46234C16.7098 3.72172 14.4881 1.5 11.7475 1.5C9.00687 1.5 6.78516 3.72172 6.78516 6.46234C6.78516 9.20297 9.00687 11.4247 11.7475 11.4247Z" stroke="#E0660B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.8494 22.9445V20.4633C21.8494 19.1472 21.3266 17.885 20.3959 16.9544C19.4653 16.0238 18.2031 15.501 16.887 15.501H6.96234C5.64625 15.501 4.38406 16.0238 3.45344 16.9544C2.52282 17.885 2 19.1472 2 20.4633V22.9445" stroke="#E0660B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const IconUserOrange = createIcon({
    m: IconUserOrangeSource,
    s: IconUserOrangeSource,
    l: IconUserOrangeSource,
    xs: IconUserOrangeSource,
    name: 'IconUserOrange',
});

export default IconUserOrange;