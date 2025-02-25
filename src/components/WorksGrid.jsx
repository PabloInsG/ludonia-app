import dent1 from '../assets/dent1.webp';
import dent2 from '../assets/dent2.webp';
import dent3 from '../assets/dent3.webp';
import dent4 from '../assets/dent4.webp';
import dent5 from '../assets/dent5.webp';

export const WorksGrid = () => {
    const images = [dent1, dent2, dent3];
    const params = (index) => {
        if (index === 1) {
            return 'rounded-lg ml-5 lg:ml-12';
        } else {
            return 'rounded-lg';
        }
    };

    return (
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 w-3/4 mb-10 mt-40">
                {images.map((images, index) => (
                    <div key={index} className="transition-all ease-in-out hover:scale-[1.05]"><img className={params(index)} src={images} alt="" /></div>
                ))}
                <div className="flex items-center justify-center lg:col-span-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="transition-all ease-in-out hover:scale-[1.05]"><img className='rounded-lg' src={dent4} alt="" /></div>
                        <div className="transition-all ease-in-out hover:scale-[1.05]"><img className='rounded-lg' src={dent5} alt="" /></div>
                    </div>
                </div>
            </div>
    )
}