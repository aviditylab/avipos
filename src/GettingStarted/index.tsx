import DashboardImage from '../assets/Dashboard.png';
import { useAppDispatch } from '../hooks';

export default function GettingStarted() {
  const dispatch = useAppDispatch()
  const handleGetStarted = () => {
    dispatch({ type: "GETTING_STARTED" })
  }

  return <div>
    <div className=' p-5 bg-primary justify-center flex'>
      <img src={DashboardImage} className=' h-[calc(60vh-40px)]' />
    </div>
    <div className=' h-[40vh] flex flex-col justify-between mx-5 py-2'>
      <div>
        <div className=' font-bold text-2xl text-center'>
          Track Your Store & Boost Sales
        </div>
        <div className=' text-[#898891] text-center'>
          Unlock your productivity potential with AviPoS, the ultimate app for Sales, managing Inventory, and Financial. Whether you're a small store or personal shop, AviPos helps you manage your store and monitoring your inventory and financial.
        </div>
      </div>
      <button className='w-full bg-primary text-white rounded-full py-2 font-bold text-white' onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  </div>
}