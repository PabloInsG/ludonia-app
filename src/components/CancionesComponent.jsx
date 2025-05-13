/* eslint-disable react/prop-types */
export const CancionesComponent = (props) => {
    const {nombre, link} = props
  return (
    <>
        <div className="flex lg:flex-row flex-col bg-white rounded-sm w-full gap-x-4 p-4 text-[#091f92]">
          <iframe className="w-full lg:w-2/3" height="315" src={`${link}` }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <p className="text-3xl">{nombre}</p>
        </div>
    </>
  )
}
