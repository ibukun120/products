import Image from 'next/image'
import React from 'react'

const Beyond = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">

    <Image
        src="/images/beyond.avif"
        fill
        className="object-cover"
        alt=""
    />

    <div className="absolute inset-0 bg-black/60" />

    <div className="absolute inset-0 flex items-center justify-center">

        <h2 className="text-white text-5xl lg:text-7xl font-bold italic">

            "Let's Shop Beyond Boundaries"

        </h2>

    </div>

</section>
  )
}

export default Beyond