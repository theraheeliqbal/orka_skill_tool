import Image from "next/image"

export default function PlayerHighlight() {
  return (
    <div className="max-w-[700px] bg-[#cab297] mx-auto p-6 rounded-[12px] flex gap-4 relative">
      <div className="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
        <div className="absolute w-full h-full rounded-full bg-green-600"></div>

        <Image
          src="/testimonial-2.jpg"
          alt="Player avatar"
          width={96}
          height={96}
          className="rounded-full relative z-10 object-cover"
        />
      </div>

      <div className="flex-1">
        <p className="text-gray-800 mt-2">
          <span className="font-semibold font-openSans">
            Despite winning the least number of sets, Kaisa still managed to secure the 2nd position in the final
            result.
          </span>

          <span className="text-gray-600 text-sm block mt-3 font-openSans">
            Thanks to her consistent performance and great adaptation skills. Great fun and interesting results...
            that's the beauty of this format.
          </span>
        </p>
      </div>
    </div>
  )
}
