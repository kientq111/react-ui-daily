const Account = () => {
    return (
        <>
            <h1 className='text-2xl font-merriweather font-black mt-[90px]'>Account settings</h1>
            <h1 className='text-[20px] font-merriweather font-black mt-[50px]'>Email address</h1>
            <div className='flex justify-between mt-[30px]'>
                <h4 className='text-lg'>Your email address is <b>emailis@private.com</b></h4>
                <a href="#" className=' text-blue-700 underline'>change</a>
            </div>
            <div className='flex justify-between mt-[41px]'>
                <h4 className='text-[20px] font-black font-merriweather'>Password</h4>
                <a href="#" className=' text-blue-700 underline'>Hide</a>
            </div>
            <div className='mt-[30px] flex justify-between'>
                <div>
                    <h5 className='font-mulish'>New password</h5>
                    <input type="password" value={'**********'} className='rounded-[10px] border border-[#C3C3E4] w-[277px] h-[74px] p-[25px] font-poppins text-lg text-[#202142]' />
                </div>
                <div>
                    <h5 lassName='font-mulish'>Current password</h5>
                    <input type="password" value={'**********'} className='rounded-[10px] border border-[#C3C3E4] w-[277px] h-[74px] p-[25px] font-poppins text-lg text-[#202142]' />
                </div>
            </div>
            <h5 className='mt-[35px]'>
                Can’t remember your current password? <u className='text-blue-700'>Reset your password</u>
            </h5>
            <button className='mt-[30px] w-[183px] h-[54px] bg-black text-white rounded-xl'>
                Save password
            </button>
            <h2 className='mt-[81px] font-merriweather text-[20px] font-black'>
                Delete account
            </h2>
            <h4 className='text-lg mt-[20px]'>
                Would you like to delete your account? <br />
                This account contains 1388 posts. Deleting your account will <br /> remove all the content associated with it.
            </h4>
            <h4 className='text-[#EE4878] mt-[30px]'>
                I want to delete my account
            </h4>
        </>
    )
}

export default Account