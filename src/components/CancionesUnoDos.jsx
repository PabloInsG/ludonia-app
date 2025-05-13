export const CancionesUnoDos = () => {
  return (
    <>
      <div className="flex flex-col w-[1200px] h-full gap-y-4 ">
        <div className="flex w-full gap-x-4 p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/PHPbg9x8Gvs?si=IGHLoZhzXJDtXW7D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
          <p className="text-white text-4xl">¿Cual Es Tu Color Favorito?</p>
        </div>
        <div className="flex w-full gap-x-4 p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/71fbx-fIOZg?si=E1L6v-E4-T9Di2K9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
          <p className="text-white text-4xl">Las Ruedas Del Autobus</p>
        </div>
      </div>
    </>
  )
}
