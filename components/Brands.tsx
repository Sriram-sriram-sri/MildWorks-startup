
import React from 'react';

const BrandLogo = ({ name, src }: { name: string, src: string }) => (
    <img className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" src={src} alt={name} />
);

export const Brands = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">BRANDS THAT TRUST US</h3>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    <BrandLogo name="L'Oreal" src="https://tailwindui.com/img/logos/158x48/loreal-logo-gray-900.svg" />
                    <BrandLogo name="Amazon" src="https://tailwindui.com/img/logos/158x48/amazon-logo-gray-900.svg" />
                    <BrandLogo name="Tata Play" src="https://tailwindui.com/img/logos/158x48/statickit-logo-gray-900.svg" />
                    <BrandLogo name="Zomato" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" />
                    <BrandLogo name="Spicejet" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" />
                    <BrandLogo name="Max Life" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" />
                </div>
                 <div className="mt-10 text-center">
                    <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 text-sm">
                        CUSTOMER STORIES &gt;
                    </a>
                </div>
            </div>
        </section>
    );
};
