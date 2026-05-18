import Image from "next/image";
import { lato } from "../lib/fonts";

export default function About() {
    // Something's wrong with the layout, there's some extra space to the right of the content
    return (
        <main className="pt-24 md:pt-54.5">
            <div className="md:hidden relative min-w-90.5 min-h-90.5 px-5">
                <Image src="/hero-image-square.png" fill alt="beach image" className="mx-auto" style={{objectFit: 'cover'}} />
            </div>
            <div className="hidden md:block w-full h-full relative max-w-165.5 max-h-165.5 px-5">
                <Image src="/hero-image-square.png" fill alt="beach image" className="mx-auto" style={{objectFit: 'cover'}} />
            </div>
            <div>
                <p className="uppercase font-medium text-[14px] text-(--lighter-black-text)">About Tiny Library</p>
                <h1 className={`${lato.className} font-bold text-[40px]/[100%]`}>Small shelf, big impact</h1>
                <p>Tiny Library started as a simple idea: make it easier for curious readers to actually find books 
                    they’ll love, not just scroll 
                    endless lists. Every title here is chosen with care, not algorithms.</p>
                <button className="uppercase">Contact Us</button>
            </div>
            <div>
                <div>
                    <h2>Curated, not crowded</h2>
                    <p>Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.</p>
                </div>
                <div>
                    <h2>Easy to browse</h2>
                    <p>Clear categories and simple descriptions make it quick to choose what you actually want to read next.</p>
                </div>
                <div>
                    <h2>Readers first</h2>
                    <p>Every part of Tiny Library is designed to help you spend less time searching and more time reading.</p>
                </div>
            </div>
            <div>
                <h2>Our ethos</h2>
                <p>At Tiny Library, we believe a good book shouldn’t be hard to find. Our ethos is to create a small, carefully curated space where every title earns its place on the shelf and readers 
                    can trust that anything they pick up is worth their time.</p>
                <div></div>
                <p>Instead of overwhelming you 
                    with thousands of options, Tiny Library focuses on a modest collection that feels personal and approachable. We want readers to feel like they’ve stepped into a cosy, well‑loved 
                    library where someone has already done the hard work of sorting through the noise.</p>
            </div>
        </main>
    )
}