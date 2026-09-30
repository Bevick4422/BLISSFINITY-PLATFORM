"use client";

const testimonials = [
  {
    name: "CertifiedTility",
    handle: "@CertifiedTility",
    image: "/images/testimonials/certifiedtility.jpg",
    text: "Joined Blissfinity earlier this year, because I saw the Ws and the level of work and dedication cryptobliss is pouring into her community and it has been nothing short of what I expected, always trying to carry everyone along by hosting classes, live sessions, making herself available especially when you have a question for her in her dms and so many others. I'm excited to be a part of Blissfinity and I'm looking forward to what the future holds with Blissfinity *",
  },
  {
    name: "EthanChain",
    handle: "@EthanChain",
    image: "/images/testimonials/ethanchain.jpg",
    text: "As a founder, I understand how important a strong and active community is, and that's one of the things that stood out to me about Blissfinity community. Blissfinity is more than just a trading channel. It helps bring together people who are genuinely interested in the market, learning, sharing ideas, and improving their trading approach. What I particularly appreciate is the consistency of the community and the value members get from the trading signals and discussions. The environment feels active, focused, and welcoming to both experienced traders and people still learning. Blissfinity has built something that goes beyond numbers - it has built a community around learning, consistency, and growth. I'm happy to have established this community and to have a successful winning community members from my trading signals, and I believe there is a lot more potential ahead for Blissfinity.",
  },
  {
    name: "Tayo",
    handle: "@TayoMetaX",
    image: "/images/testimonials/tayometax.jpg",
    text: "I joined Blissfinity about 7 months ago knowing almost nothing about trading. What made Blissfinity different was that I wasn't just given signals - I learned the reasoning behind them. Through the community and weekly sessions, I learned risk management and trading psychology, and I can now take my own trades more effectively. Blissfinity has genuinely made me a better trader. If I had to describe Blissfinity in one word, it would be HOME.",
  },
  {
    name: "Raphael",
    handle: "@heis_raph",
    image: "/images/testimonials/heisraph.jpg",
    text: "I almost scrolled past her at first. I had this assumption that women in trading were more about the hype than the actual work. Then her setups kept showing up - and I finally looked. The analysis was clean, and after joining Blissfinity, I quickly realized it wasn't just about signals. The reasoning was there, and you could tell the community was genuinely being built with its members in mind. She's not farming the community. She's building it. I'm grateful to be part of Blissfinity.",
  },
  {
    name: "Joel",
    handle: "@JOELSY24",
    image: "/images/testimonials/joelsy24.jpg",
    text: "I joined Blissfinity with zero trading knowledge. Now I understand risk management and psychology, and I can trade on my own with confidence. It changed everything for me. Blissfinity feels like home.",
  },
  {
    name: "Louisa",
    handle: "@Web3_Louisa",
    image: "/images/testimonials/web3louisa.jpg",
    text: "Last year, while scrolling through X, I came across @web3_blizz's post about her trading community on Discord. As a beginner crypto trader, I joined - and that decision opened my eyes to crypto and degen trading. Blissfinity isn't just a community to me; it's family. My trading journey wouldn't be complete without it. Thank you for pouring into me even when I had nothing to give in return.",
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  const initials = item.name.slice(0, 2).toUpperCase();

  return (
    <article className="w-[min(78vw,440px)] shrink-0">
      <div className="h-[500px] rounded-[26px] bg-gradient-to-br from-[#2274da] via-[#d299fa] to-[#ff379d] p-[1px]">
        <div className="flex h-full flex-col rounded-[25px] bg-[#10162a] p-7 sm:p-8">
          <div className="text-[38px] leading-none text-[#d299fa]">&ldquo;</div>

          <p className="mt-4 line-clamp-10 text-[15px] leading-7 text-[#d8deea] sm:text-[16px]">
            {item.text}
          </p>

          <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-5">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15 bg-[#070b14]">
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.remove();
                  const fallback = event.currentTarget.parentElement?.querySelector("[data-pfp-fallback]");
                  fallback?.classList.remove("hidden");
                  fallback?.classList.add("flex");
                }}
              />
              <div
                data-pfp-fallback
                className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-[#2274da] via-[#d299fa] to-[#ff379d] text-[11px] font-black text-white"
              >
                {initials}
              </div>
            </div>

            <div className="min-w-0">
              <div className="truncate text-[15px] font-bold text-white">{item.name}</div>
              <div className="mt-1 text-[12px] font-medium text-[#aebbd0]">Blissfinity Member</div>
              <div className="mt-1 truncate text-[13px] text-[#d299fa]">{item.handle}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CommunityTestimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden border-t border-white/10 bg-[#080b16] py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-20">
        <div className="text-center">
          <div className="text-[15px] font-black leading-none tracking-[0.24em] text-white">
            COMMUNITY TESTIMONIALS
          </div>
        </div>
      </div>

      <div className="group mt-14 overflow-hidden">
        <div className="flex w-max animate-[blissfinityTestimonials_95s_linear_infinite] gap-6 px-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((item, index) => (
            <TestimonialCard key={`${item.handle}-${index}`} item={item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blissfinityTestimonials {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
      `}</style>
    </section>
  );
}

