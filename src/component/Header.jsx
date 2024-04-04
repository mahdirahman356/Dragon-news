
import moment from 'moment';
import logo from '../Image/logo.png'
const Header = () => {
    return (
        <div className='mt-10'>
            <div className='space-y-2'>
            <img className='mx-auto mb-4' src={logo} alt="" />
            <p className="text-[12px] md:text-[16px] text-center">Journalism Without Fear or Favour</p>
            <p className="text-[14px] md:text-[18px] text-center">{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;