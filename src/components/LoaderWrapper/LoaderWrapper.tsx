import {Loader} from "@consta/uikit/Loader";

export default function LoaderWrapper(){
    return(
        <div className="d-flex align-items-center justify-content-center w-100"  style={{height: "500px"}}>
            <Loader/>
        </div>
    )
}