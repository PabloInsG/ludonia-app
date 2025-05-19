/* eslint-disable react/prop-types */
export const VideosComponent = (props) => {
    const {nombre, link} = props
  return (
    <>
        <div className="flex flex-col bg-white rounded-md w-full gap-x-4 p-4 text-[#091f92] gap-y-2">
          <iframe className="w-full h-[190px] lg:h-[550px]" src={`${link}` }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <p className="text-xl lg:text-3xl font-semibold">{nombre}</p>
        </div>
    </>
  )
}
