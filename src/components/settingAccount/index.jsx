import logoUIDayly from '@public/logoUIDaily.svg'
import notification from '@public/notification.svg'
import UploadIcon from '@public/uploadIcon.svg'
import Account from './account'
const fbImg = 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/432749324_2129200177478482_3474451646279061805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCY2zvO3SKEEMHOJs2ZSDNckpK5eAz8yVySkrl4DPzJSJclXzzKeyY6miMz9Ia4hRVRNUWfM3HNjjIfFBFHVs9&_nc_ohc=HYWuRReuIuoAX-BWiag&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAtUfeZtt5ocVqqdiIT5SxOXtWrKYCHFA6EHnpxm7yZ8w&oe=65FD6D0C'

const SettingAccount = () => {
    return (
        <div className="w-[1440px] h-[1117px] rounded-[15px_15px_0_0] bg-white font-poppins">
            <div className="w-full h-[120px] flex items-center  bg-[#FCFCFF] p-[50px] rounded-[15px_15px_0_0]">
                <img src={logoUIDayly} alt="logo" className='w-[140px] h-10' />
                <div className='flex gap-[30px] ml-auto mr-auto font-base text-[#202142]'>
                    <span className='cursor-pointer'>Free designs</span>
                    <span className='cursor-pointer'>License</span>
                    <span className='cursor-pointer'>Articles</span>
                    <span className='cursor-pointer'>Contributors</span>
                    <span className='cursor-pointer'>About</span>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={notification} alt="" className='w-8 h-8' />
                    <img src={fbImg} alt="" className='w-[38px] h-[38px] rounded-full' />
                    <button className='rounded-xl text-white bg-[#202142] w-[152px] h-[54px]'>Upload</button>
                </div>
            </div>
            <div className='flex mt-[90px] pl-[216px] pr-[300px]'>
                <div className='w-[30%]'>
                    <h1 className='text-[32px] font-black font-merriweather'>Settings</h1>
                    <div className='gap-y-10 mt-[50px] opacity-80'>
                        <h4 className='mt-[35px] cursor-pointer'>Public profile</h4>
                        <h4 className='mt-[35px] w-[167px] font-bold cursor-pointer'>Account settings</h4>
                        <h4 className='mt-[35px] cursor-pointer'>Notifications</h4>
                        <h4 className='mt-[35px] cursor-pointer'>PRO Account</h4>
                    </div>
                </div>
                <div className='w-[70%]'>
                    <Account />
                </div>
            </div>
        </div >
    )
}

export default SettingAccount;
