

const TimeLine = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 text-violet-600">
					<h3 className="text-3xl font-semibold acme"> EliteEstate Holdings</h3>
					
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">State-of-the-Art Amenities: </h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-600">Dec 2020</time>
						<p className="mt-3">Infinity pools, gourmet kitchens, and smart home features are standard in EliteEstate properties. These amenities enhance the luxury living experience.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Panoramic Views</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-600">Jul 2019</time>
						<p className="mt-3">Whether it’s a penthouse, beachfront villa, or hilltop estate, EliteEstate properties offer breathtaking views. Imagine waking up to city skylines, ocean horizons, or rolling hills.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Historic Restorations:</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-600">Jan 2016</time>
						<p className="mt-3">Opulent mansions restored to their former glory feature luxurious amenities and impressive art collections.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default TimeLine;
