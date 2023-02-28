import "../index.css"

const Scroll = ({children, scrollSmooth}) => {
    return(
        <div className={"scroll-div"} style={{
            overflowY: "scroll",
            height: "80vh",
            scrollbarColor: "green",
            scrollbarWidth: "6px",
            msScrollbarBaseColor: "darkcyan",
            msScrollbarFaceColor: "darkkhaki"
        }} onScroll={scrollSmooth}>
            {children}
        </div>
    )
}

export default Scroll