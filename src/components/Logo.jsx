import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <>
    <div className="lg:w-8/12 w-11/12 py-4 lg:bg-[#091F92]">
        <div className="lg:w-[35%] w-2/3 flex flex-col gap-y-2">
            <Link to="/">
                <h1 className='lg:text-8xl  text-white opacity-100'>LUDONÍA</h1>
                <p className='text-center text-xl '>Donde el juego y la música crean magia.</p>
            </Link>
        </div>
    </div>
</>
  )
}
