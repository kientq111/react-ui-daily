
import Heart from '@public/heart.svg'
import AddToCart from '@public/addToCart.svg'
const sourceImage = 'https://s3-alpha-sig.figma.com/img/4ba6/88cb/7556cc56bd65108f08cb3a1221520354?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGpibUsjQ8XauegdzXCTHc0gmlmdaxzEt3QpFVCeZOXNz4k14XVxQMl9YLT65aqKC8OfXre6TsO7wxPBs8bmoF0Ah1FpDnuB9ZCbX7Dw9rtK6CCcF-8PzfeuiaNpPYkfBvVzHN98GifFrmpxlb5gpH~mHIz9w0Pvp2zwagtqQU1Jpmj4lqZ10DzvQOSM1EUtmaj0PjVMAW-tpSYNCPlx8bOjzUX40UqMBAQBwI~XXNPru0BtYztPedNN5m4fYn-Ti7CwjFutnB-EN-58h4mGwlZ8oOr6Sz0M68bW16AyJsXTbg~TH7JN2LeF-gbJfZ64Cnm634yzX-3GHBShwUkbdQ__'
const ProductIntro = () => {

    return (
        <div className="font-poppins w-[887px] h-[661px] p-20 gap-8 flex bg-white rounded-3xl">
            <div>
                <img src={sourceImage} alt="" className="w-[249px] h-[223px]" />
            </div>
            <div>
                <h3 className="px-2 py-1 bg-[#191847] text-white rounded-3xl text-sm w-28">Free shipping</h3>
                <h1 className="text-[#191847] text-2xl font-semibold w-[419px]">Razer Kraken Kitty Edt Gaming Headset Quartz</h1>
                <div className="mt-8">
                    <h4 className="text-lg line-through font-medium">1 599,-</h4>
                    <h1 className=" font-bold text-5xl">
                        799,-
                    </h1>
                    <h5 className="opacity-60 text-sm">
                        The offer is valid until April 3 or as long as stock lasts!
                    </h5>
                </div>
                <button className="w-[442px] h-[59px] mt-8 rounded-lg p-4 text-white bg-blue-500 shadow-[0_7px_0_0_#1C57EE] hover:-translate-y-2 transition ">Add to cart</button>
                <div className="mt-8 flex item-center">
                    <div className="w-[17px] h-[17px] rounded-full bg-[#00D98B]" />
                    <h4 className="text-sm font-medium ml-2">50+ pcs. in stock.</h4>
                </div>
                <div className="mt-8 flex justify-between">

                    <button className="flex hover:-translate-y-2 transition justify-center font-medium item-center gap-[10px] p-4 border-2 border-[#C9C9DA] rounded-lg text-lg h-[64px] w-[213px]">
                        <img src={AddToCart} alt="React Logo" />
                        Add to cart
                    </button>
                    <button className="flex hover:-translate-y-2 transition justify-center font-medium item-center gap-[10px] p-4 border-2 border-[#C9C9DA] rounded-lg text-lg h-[64px] w-[213px]">
                        <img src={Heart} alt="React Logo" />
                        Add to wishlist
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductIntro;
