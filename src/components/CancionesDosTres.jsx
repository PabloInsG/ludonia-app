export const CancionesDosTres = () => {
  return (
    <>
      <div className="flex flex-col w-[1200px] h-full gap-y-4 ">
        <div className="flex w-full gap-x-4 p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/n7SNLXbi36Q?si=rTu0ncJk1xldUtlF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
          <p className="text-white text-4xl">Las Vocales</p>
        </div>
        <div className="flex w-full gap-x-4 p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pSqnl2eSu9Y?si=i254HgK3MN7gqSsj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
          <p className="text-white text-4xl">Cantando los Números</p>
        </div>
        <div className="flex w-full gap-x-4 p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/c6BVOQfgMP8?si=ZJ32hUq6Z4BLLOsp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
          <p className="text-white text-4xl">Colores en Ingles y Español</p>
        </div>
      </div>
    </>
  )
}
