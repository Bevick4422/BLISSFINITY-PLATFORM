import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070b14] px-6 py-14 text-white sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_.7fr_.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-[#2274da]/35">
                <img src="/images/Blissfinity-logo.png.jpeg" alt="Blissfinity" className="h-full w-full object-cover" />
              </div>
              <div className="font-serif text-xl">BLISSFINITY</div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#8f9db3]">
              A trading community and ecosystem built around education,
              discipline, accountability and structured market work.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick links</h3>
            <div className="mt-4 space-y-3 text-sm text-[#8f9db3]">
              <Link href="#story" className="block hover:text-white">Our Story</Link>
              <Link href="#resources" className="block hover:text-white">Resources</Link>
              <Link href="#partners" className="block hover:text-white">Partners</Link>
              <Link href="#contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Platform</h3>
            <div className="mt-4 space-y-3 text-sm text-[#8f9db3]">
              <Link href="/login" className="block hover:text-white">Log in</Link>
              <Link href="/register" className="block hover:text-white">Create account</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-[#69778c] sm:flex-row sm:items-center sm:justify-between">
          <span>(c) {new Date().getFullYear()} Blissfinity. All rights reserved.</span>
          <span>Built around clarity.</span>
        </div>
      </div>
    </footer>
  );
}

