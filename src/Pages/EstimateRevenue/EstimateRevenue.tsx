import { Link } from 'react-router-dom'
import icon27 from "../../assets/icons/icon27.png";
import bg1 from "../../assets/images/bg1.jpg";
import { Select } from '@mantine/core';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import icon28 from "../../assets/icons/icon28.png";
import icon29 from "../../assets/icons/icon29.png";
import icon31 from "../../assets/icons/icon31.png";
import img8 from "../../assets/images/img8.png";
import img9 from "../../assets/images/img9.png";
import calc_Img from "../../assets/images/calc_Img.png";
import FAQ from '../../Components/Home/FAQ';
import { Label, Radio } from 'flowbite-react';
import Swal from 'sweetalert2';

const EstimateRevenue = () => {

    const showAlert = () => {
        Swal.fire({
            html: `
            <p class="text-xl">A <b>Three Bed</b> property in <b>Al Furjan</b> can earn</p>
            <span class="text-5xl text-primary inline-block mt-4"><b>650 <span style="font-size: 1.5rem;">د.إ</span></b></span>
            <p style="font-size: 0.9rem; color: gray;">daily on average *</p>
            <p class="mt-3" style="font-size: 0.8rem; color: gray;">*Estimate is based on realistic occupancies and similar listings in your area.</p>
          `,
            confirmButtonText: "Got it!",
            confirmButtonColor: "#bb9e6c",
        });
    };
    return (
        <>

            {/* banner */}
            <div
                className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
                style={{
                    backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
                }}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col gap-4">
                        <h2 className="text-[38px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
                            Estimate Revenue
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link to="/" className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">Home</Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Estimate Revenue</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col max-w-[560px] mx-auto text-center">
                        <h3 className="text-[26px] xs:text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] md:leading-[50px] 2xl:leading-[58px]">
                            Estimate Revenue
                            for Airbnb & Holiday Home
                        </h3>
                        <p className="max-w-[550px] mx-auto text-[#60410C] lg:text-lg font-montserrat mt-3 text-center">
                            Calculator estimates your revenue potential based on area, property size, and interior design.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 md:mt-16 py-14 lg:mt-20 bg-[#fff6e7]">
                <div className="container mx-auto">
                    <div className='max-w-[1080px] mx-auto'>
                        <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 md:gap-10 items-center">
                            <div>
                                <div className='bg-white px-5 py-8 rounded-xl shadow-xl'>
                                    <h3 className="text-xl xs:text-2xl lg:text-3xl font-semibold text-[#1F1607]">
                                        Vacation Rental Calculator
                                    </h3>
                                    <form className='mt-5 sm:mt-8'>
                                        <div className='flex flex-col gap-y-5'>
                                            <div>
                                                <Select
                                                    placeholder='Area'
                                                    data={['Dubai', 'Al Furjan', 'Dubai South', 'Dubai Hills']}
                                                    className='bg-white border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12'
                                                    rightSection={<KeyboardArrowDownOutlined className='text-[#DCC397]' />}
                                                />
                                            </div>
                                            <div>
                                                <Select
                                                    placeholder='Bedrooms'
                                                    data={['One Bed', 'Two Beds', 'Three Beds', 'Four Beds']}
                                                    className='bg-white border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12'
                                                    rightSection={<KeyboardArrowDownOutlined className='text-[#DCC397]' />}
                                                />
                                            </div>
                                            <div>
                                                {/* <p className='text-gray-800'>Furnishing</p> */}
                                                <div className="radio flex gap-8">
                                                    <div className="flex items-center gap-2">
                                                        <Radio id="Standard" name="countries" value="Standard" className="focus:ring-offset-0 focus:shadow-none !focus:ring-0 border border-primary"
                                                        />
                                                        <Label htmlFor="Standard">Standard</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio id="Premium" name="countries" value="Premium" className="focus:ring-offset-0 focus:shadow-none !focus:ring-0 border border-primary" />
                                                        <Label htmlFor="Premium">Premium</Label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-right'>
                                                <button className="btn1 min-w-[250px] w-full sm:w-auto" onClick={(e) => { e.preventDefault(); showAlert() }}>Calculate</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <img src={calc_Img} className='max-w-[400px] w-full ml-auto' />
                                {/* <p className="text-2xl md:text-3xl text-[#1F1607] md:leading-10">
                                    Count <span className='font-semibold'>how much </span>you <span className='font-semibold'>can earn</span> daily on average
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-14 md:pt-16 lg:pt-20'>
                <div className="container mx-auto">
                    <div className="flex items-center max-w-[1080px] mx-auto">
                        <div className='md:block hidden w-1/2 lg:w-2/5 pr-10'>
                            <img src={img8} className='transform rotate-y-180' />
                        </div>
                        <div className='w-full md:w-1/2 lg:w-3/5'>
                            <div className='bg-[#fff6e7] rounded-xl md:shadow-[8px_8px_10px_2px_#c4903738]'>
                                <div className='px-5 py-8 rounded-xl shadow-[5px_4px_#fff6e7_inset]'>
                                    <h4 className="text-xl xs:text-2xl lg:text-3xl font-semibold text-[#1F1607]">
                                        Sign up today and start making money
                                    </h4>
                                    <div className='mt-5 sm:mt-10 contact_us'>
                                        <form action="">
                                            <div className='grid lg:grid-cols-2 gap-4'>
                                                <div className=''>
                                                    <div className='bg-[#fef4e3] border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12'>
                                                        <input type="text" className='w-full p-0 border-none focus:ring-0 bg-transparent' placeholder='Full Name' />
                                                        <span><img src={icon31} className='w-4' /></span>
                                                    </div>
                                                    <div className='bg-[#fef4e3] border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12 mt-4'>
                                                        <input type="text" className='w-full p-0 border-none focus:ring-0 bg-transparent' placeholder='Phone Number' />
                                                        <span><img src={icon29} className='w-4' /></span>
                                                    </div>
                                                </div>
                                                <div className=' lg:col-row-2'>
                                                    <textarea rows={2} cols={10} className='bg-[#fef4e3] rounded-xl w-full px-6 py-3 border-primary focus:ring-0 min-h-12 h-full' placeholder='Tell us more about your property '>
                                                    </textarea>
                                                </div>
                                                <div className='bg-[#fef4e3] border border-primary rounded-full flex items-center justify-between px-6 h-12 gap-2'>
                                                    <input type="text" className='w-full p-0 border-none focus:ring-0 bg-transparent' placeholder='Email Address' />
                                                    <span><img src={icon28} className='w-4' /></span>
                                                </div>
                                                <div className=''>
                                                    <button className='btn1 flex items-center justify-center w-full gap-2'>Send Message </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-14 md:pt-16 lg:pt-20 lg:pb-28 relative'>
                <div className="container mx-auto">
                    <div>
                        <div className="lg:flex">
                            <div className='lg:w-2/5 order-1 lg:order-2'>
                                <div className='lg:absolute right-0 max-w-[450px] lg:w-[calc(40%)] ml-auto rounded-2xl lg:rounded-l-[100px] overflow-hidden top-0 h-full'>
                                    <img src={img9} className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className="lg:w-[55%] order-2 lg:order-1 mt-8 lg:mt-0">
                                <div>
                                    <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                                        Income
                                    </h4>
                                    <p className='mt-3 font-montserrat md:text-lg text-[#60410C]'>As the owner, you will earn money from guests staying at your property. The income varies due to seasonality, price, and occupancy. Guests will always pay above the long-term rent price, due to the property being 100% equipped for guests – with full interiors, working utilities and ease of moving in/out. The best part about short-term rental is that you can sell whenever you want, as you are not locked into a long-term let. You earn money while your asset appreciates – perfect!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative pt-16 lg:pt-0 lg:-mt-14 overflow-hidden'>
                <div className="container mx-auto">
                    <div className='relative py-12  before:absolute before:bg-[#fff6e7] before:w-[calc(100%_+_2000px)] before:-left-10 before:rounded-l-[40px] before:top-0 before:h-full before:-z-10'>
                        <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                            How to maximise returns
                        </h4>
                        <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8">
                            <li className='text-[#1F1607] lg:text-lg lg:max-w-[250px]'>
                                <p>1. Research the Area</p>
                            </li>
                            <li className='text-[#1F1607] lg:text-lg lg:max-w-[250px]'>
                                <p>2. Insure property is well-designed</p>
                                <Link to="/" className='text-[#4D5461] underline inline-block mt-2'>check interior design</Link>
                            </li>
                            <li className='text-[#1F1607] lg:text-lg lg:max-w-[250px]'>
                                <p>3. Ensure the listing is well-written</p>
                                <Link to="/" className='text-[#4D5461] underline inline-block mt-2'>check listings page</Link>
                            </li>
                            <li className='text-[#1F1607] lg:text-lg lg:max-w-[250px]'>
                                <p>4. Ensure property is clean and well-maintained</p>
                                <Link to="/" className='text-[#4D5461] underline inline-block mt-2'>check cleaning & maintenance</Link>
                            </li>
                            <li className='text-[#1F1607] lg:text-lg lg:max-w-[250px]'>
                                <p>5. Ensure property is well-priced</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <FAQ />
        </>
    )
}

export default EstimateRevenue
