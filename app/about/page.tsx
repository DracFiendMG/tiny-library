import Image from "next/image";
import { lato } from "../lib/fonts";

export default function About() {
    // Something's wrong with the layout, there's some extra space to the right of the content
    return (
        <main className="pt-24 md:pt-54.5 mb-10">
            <div className="md:hidden relative min-w-90.5 min-h-90.5 mx-5">
                <Image src="/hero-image-square.png" fill alt="beach image" className="mx-auto" style={{objectFit: 'cover'}} />
            </div>
            <div className="hidden md:block w-full h-full relative max-w-165.5 max-h-165.5 mx-5">
                <Image src="/hero-image-square.png" fill alt="beach image" className="mx-auto" style={{objectFit: 'cover'}} />
            </div>
            <div className="flex flex-col text-(--lighter-black-text) gap-5 mt-5 px-5 border-b pb-10 border-[#DDDDDD] mb-10">
                <p className="uppercase font-medium text-[14px]">About Tiny Library</p>
                <h1 className={`${lato.className} font-bold text-[40px]/[100%]`}>Small shelf, big impact</h1>
                <p className="text-2xl">Tiny Library started as a simple idea: make it easier for curious readers to actually find books 
                    they’ll love, not just scroll 
                    endless lists. Every title here is chosen with care, not algorithms.</p>
                <button className="uppercase px-7.5 py-3 border-2 self-center">Contact Us</button>
            </div>
            <div className="flex flex-col gap-12 px-5 border-b pb-10 border-[#DDDDDD] mb-10 text-(--lighter-black-text)">
                <div>
                    <h2 className={`flex items-center ${lato.className} font-bold text-[28px] gap-1.5`}><span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 22L16 29L28 22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 16L16 23L28 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 10L16 17L28 10L16 3L4 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg></span>Curated, not crowded</h2>
                    <p className="text-[20px] mt-4.5">Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.</p>
                </div>
                <div>
                    <h2 className={`flex items-center ${lato.className} font-bold text-[28px] gap-1.5`}><span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
                        <path d="M4 16H28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 27.6749C18.7614 27.6749 21 22.4479 21 16C21 9.55203 18.7614 4.32495 16 4.32495C13.2386 4.32495 11 9.55203 11 16C11 22.4479 13.2386 27.6749 16 27.6749Z" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
                    </svg></span>Easy to browse</h2>
                    <p className="text-[20px] mt-4.5">Clear categories and simple descriptions make it quick to choose what you actually want to read next.</p>
                </div>
                <div>
                    <h2 className={`flex items-center ${lato.className} font-bold text-[28px] gap-1.5`}><span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 27V6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 21C13 15 19 27 27 21V6C19 12 13 -4.88758e-06 5 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg></span>Readers first</h2>
                    <p className="text-[20px] mt-4.5">Every part of Tiny Library is designed to help you spend less time searching and more time reading.</p>
                </div>
            </div>
            <div className="flex flex-col px-5 gap-5 text-(--lighter-black-text)">
                <h2 className={`${lato.className} font-bold text-[40px]`}>Our ethos</h2>
                <p className="text-2xl">At Tiny Library, we believe a good book shouldn’t be hard to find. Our ethos is to create a small, carefully curated space where every title earns its place on the shelf and readers 
                    can trust that anything they pick up is worth their time.</p>
                <div className="w-61.25 border-b border-[#4E4E4E] self-center my-5"></div>
                <p className="text-2xl break-all">Instead of overwhelming you with thousands of options, Tiny Library focuses on a modest collection that feels personal and approachable. We want readers to feel like they’ve stepped into a cosy, well‑loved library where someone has already done the hard work of sorting through the noise.</p>
            </div>
        </main>
    )
}