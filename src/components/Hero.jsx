export default function Hero({ fadeOut }) {
  return (
    <section className={`h-screen flex justify-center items-center bg-black transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <h1 className="text-7xl md:text-9xl font-bold text-[#00F5D4] neon-glow animate-fade-in">
        Saurav
      </h1>
    </section>
  );
}
