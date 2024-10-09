import ScrollToTop from "react-scroll-to-top"

/* eslint-disable react/prop-types */
export function Footer({href, texto}) {
    return (
        <>
            <footer className="flex flex-col items-center w-full space-y-7 ">
                <a className="text-6xl" href={href}>{texto}</a>
                <ScrollToTop smooth/>
            </footer>
        </>
    )
}