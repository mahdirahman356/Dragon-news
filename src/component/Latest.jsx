import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className="flex bg-[#F3F3F3] rounded-md p-3 mt-8">
        <p className="px-4 py-2 rounded-none bg-[steelblue] text-white">Latest</p>
        <Marquee speed={80}>
            <p className='text-[12px] md:text-[16px] mr-10 md:mr-0'>Match Highlights: Germany vs Spain — as it happened   !    </p>
            <p className='hidden md:flex'>Match Highlights: Germany vs Spain — as it happened   !    </p>
       </Marquee>
    </div>
    );
};

export default Latest;