import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex M.",
    role: "Futures Trader",
    text: "Blissfinity has improved my trading discipline. The signals are clear, consistent, and supported by structured risk management.",
  },
  {
    name: "Sarah K.",
    role: "Swing Trader",
    text: "I value the transparency. Every trade is documented from entry to completion, making performance easy to review.",
  },
  {
    name: "David O.",
    role: "Crypto Investor",
    text: "The platform presents market opportunities in a clear and professional way, helping me make better trading decisions.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Trusted by Professional Traders
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Built for traders who value consistency, transparency, and disciplined execution.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-300">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
