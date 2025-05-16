import HTMLFlipBook from "react-pageflip"
import { useEffect, useRef, useState } from "react"
import { LibroPC } from "./LibroPC";
import { LibroPhone } from "./LibroPhone";

export const LibroDoReMi = () => {
  const libro = useRef();
  
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
      {width < 600 ? <LibroPhone ref={libro} /> : <LibroPC ref={libro} />
      }
        <div className="flex justify-around w-full mt-4">
            <button className="botonLibro font-semibold rounded-md p-2" onClick={() => libro.current.pageFlip().flipPrev()}>Anterior Pagina</button>
            <button className="botonLibro font-semibold rounded-md p-2" onClick={() => libro.current.pageFlip().flipNext()}>Siguiente Pagina</button>

        </div>
    </>
  )
}
