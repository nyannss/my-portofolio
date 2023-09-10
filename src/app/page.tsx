import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export default function Home() {
  return (
    <main className={`flex flex-col ${poppins.className}`}>
      <section className="hero-section flex flex-col justify-center max-w-6xl w-full mx-auto">
        <div className="w-full space-y-1">
          <p className="text-lg font-medium">Hi! I’m</p>
          <p className="text-5xl font-semibold font-name">ahann.</p>
          <p className="text-3xl font-medium">
            I&apos;m a web development enthusiast.
          </p>
          <p className="font-medium w-[50%]">
            I&apos;m a fullstack developer with a strong passion for continuous
            learning and collaboration, actively seeking new opportunities.
          </p>
        </div>
      </section>
    </main>
  );
}
