import { FaSpinner } from "react-icons/fa";
export default function Loading() {
  return (
    <div className=" h-screen w-screen bg-primary flex justify-center items-center">
      <FaSpinner size={48} color="white" className="animate-spin" />
    </div>
  )
}