
const Card = () => {
  return (
    <div className="bg-gray-100 cursor-pointer w-56 h-60 rounded-lg">
        {/* Figure contains the image, label and add button */}
        {/* Figure need to be relative because their elements are going to be positioned in an absolute position */}
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
            <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="headphones" />
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                +
            </div>
        </figure>
        {/* P contains Name and Price tag */}
        <p className="flex justify-between p-1 items-center">
            <span className="text-sm font-light">Headphones</span>
            <span className="text-lg font-medium">$300</span>
        </p>
    </div>
  )
}

export default Card