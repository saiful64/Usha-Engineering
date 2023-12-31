import { useState } from "react";
import { barrel3 } from "../assets/images";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(barrel3);

	return (
		<section
			id='home'
			className=' w-full flex  flex-col justify-center min-h-screen gap-10 max-container pt-6'
		>
			<div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-[100px]'>
				<h1
					className='mt-10 mb-6 font-palanquin text-6xl max-sm:text-4xl max-sm:leading-[62px] font-bold'
					style={{ fontSize: "4rem" }}
				>
					<span className='max-sm:text-4xl  relative'>
						Metal
					</span>
					<br />
					<span className='max-sm:text-4xl text-coral-red inline-block mt-3 '>
						Supplier
					</span>{" "}
					<span className='max-sm:text-4xl   relative '>
						and Mechanical Parts
					</span>
					<span className='max-sm:text-4xl text-coral-red inline-block mt-3'>
						Manufacturer
					</span>
				</h1>

				<h3
					className='mt-10 mb-2 max-sm:text-lg font-palanquin text-2xl max-sm:text-[24px] max-sm:leading-[42px] font-bold'
					style={{ fontSize: "1.5rem" }}
				></h3>

				{/* <Button label='Browse Products' iconURL={arrowRight} /> */}
				{/* <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
					{statistics.map((stat, index) => (
						<div key={index}>
							<p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
							<p className='leading-7 font-montserrat text-slate-gray'>
								{stat.label}
							</p>
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default Hero;
