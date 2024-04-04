
import moment from 'moment';
import logo from '../Image/logo.png'
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <div className='mt-10'>
            <div className='space-y-2'>
            <img className='mx-auto mb-4' src={logo} alt="" />
            <p className="text-[12px] md:text-[16px] text-center">Journalism Without Fear or Favour</p>
            <p className="text-[14px] md:text-[18px] text-center">{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
            <div className="flex bg-[#F3F3F3] rounded-md p-3 mt-8">
                <p className="px-4 py-2 rounded-none bg-[steelblue] text-white">Latest</p>
                <Marquee speed={80}>
                    <p className='text-[12px] md:text-[16px] mr-10 md:mr-0'>Match Highlights: Germany vs Spain — as it happened   !    </p>
                    <p className='hidden md:flex'>Match Highlights: Germany vs Spain — as it happened   !    </p>
               </Marquee>
            </div>
        </div>
    );
};

export default Header;