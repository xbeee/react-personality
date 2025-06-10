import { useRef, RefObject } from "react";

import MainBlock from "../../components/MainBlock/MainBlock";
import HowWork from "../../components/HowWork/HowWork";
import TestList from "../../components/TestList/TestList";
import Everyday from "../../components/Everyday/Everyday";
import Footer from "../../Bars/Footer/Footer";


export default function MainPage()  {
    const targetRef = useRef<HTMLDivElement>(null);

    const scrollToTarget = (target: RefObject<HTMLDivElement | null>) => {
        if (target.current) {
            target.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <MainBlock scrollTarger={()=> scrollToTarget(targetRef)}/>
            <HowWork scrollTarger={()=> scrollToTarget(targetRef)}/>
            <TestList ref={targetRef}/>
            <Everyday />
            <Footer />
        </>
    );
}

