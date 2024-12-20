import { KeyboardArrowRightOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Settings = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 gap-3">
                <div className="border border-primary flex justify-between relative">
                    <Link to="/user-panel/settings/change-password" className='absolute w-full h-full'></Link>
                    <h6 className="text-xl text-gray-700 py-2.5 pl-3">Block Owner Stay</h6>
                    <div className='w-5 text-white bg-primary flex items-center justify-center'>
                        <KeyboardArrowRightOutlined />
                    </div>
                </div>
                <div className="border border-primary flex justify-between relative">
                    <Link to="/user-panel/settings/change-password" className='absolute w-full h-full'></Link>
                    <h6 className="text-xl text-gray-700 py-2.5 pl-3">Change Password</h6>
                    <div className='w-5 text-white bg-primary flex items-center justify-center'>
                        <KeyboardArrowRightOutlined />
                    </div>
                </div>
                <div className="border border-primary flex justify-between relative">
                    <Link to="/user-panel/settings/personal-details" className='absolute w-full h-full'></Link>
                    <h6 className="text-xl text-gray-700 py-2.5 pl-3">My Personal Details</h6>
                    <div className='w-5 text-white bg-primary flex items-center justify-center'>
                        <KeyboardArrowRightOutlined />
                    </div>
                </div>
                <div className="border border-primary flex justify-between relative">
                    <Link to="/user-panel/settings/property-details" className='absolute w-full h-full'></Link>
                    <h6 className="text-xl text-gray-700 py-2.5 pl-3">Property Details</h6>
                    <div className='w-5 text-white bg-primary flex items-center justify-center'>
                        <KeyboardArrowRightOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
