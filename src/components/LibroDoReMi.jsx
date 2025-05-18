import { useEffect, useState } from "react"
import { LibroPC } from "./LibroPC";
import { LibroPhone } from "./LibroPhone";

export const LibroDoReMi = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width < 600 ? <LibroPhone /> : <LibroPC />}
    </>
  )
}
