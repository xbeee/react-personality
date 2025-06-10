import {createIcon} from "@consta/icons/Icon";

const IconCalendarSource = () => (
    // <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M19 4.5H5C3.89543 4.5 3 5.39543 3 6.5V20.5C3 21.6046 3.89543 22.5 5 22.5H19C20.1046 22.5 21 21.6046 21 20.5V6.5C21 5.39543 20.1046 4.5 19 4.5Z" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //     <path d="M16 2.5V6.5" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //     <path d="M8 2.5V6.5" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //     <path d="M3 10.5H21" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    // </svg>
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1V5M14 1V5M1 9H19M3 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z" stroke="#B8CAD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
);
const IconCalendar = createIcon({
    m: IconCalendarSource,
    s: IconCalendarSource,
    l: IconCalendarSource,
    xs: IconCalendarSource,
    name: 'IconCalendar',
});

export default IconCalendar;