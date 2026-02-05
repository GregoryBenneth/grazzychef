import { Navbar } from "@/components/navbar";
import ColourfulText from "@/components/ui/colourful-text";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28"
      >
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="rgb(217 119 6 / 0.15)"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-amber-500/90">
            Personal Chef
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl md:text-6xl">
            Grazielle Gabriela
          </h1>
          <TextGenerateEffect
            words="Experiências gastronômicas únicas no conforto da sua casa. Cardápios sob medida, eventos e jantares memoráveis."
            className="text-lg font-normal text-stone-400 sm:text-xl"
            duration={0.4}
            filter={false}
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contato"
              className="rounded-full bg-amber-600 px-8 py-4 text-base font-semibold text-stone-950 shadow-lg shadow-amber-900/30 hover:bg-amber-500 transition-colors"
            >
              Solicitar orçamento
            </Link>
            <Link
              href="#servicos"
              className="rounded-full border border-stone-600 px-8 py-4 text-base font-medium text-stone-200 hover:border-amber-500/50 hover:text-amber-200 transition-colors"
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="relative border-t border-stone-800/50 bg-stone-900/50 py-24 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
            O que ofereço
          </p>
          <h2 className="mb-16 text-center text-3xl font-bold text-amber-50 sm:text-4xl">
            Serviços de Personal Chef
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Jantares em casa",
                desc: "Cardápio exclusivo preparado na sua cozinha, do planejamento à mesa posta.",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
              },
              {
                title: "Eventos e festas",
                desc: "Cocktails, jantares de gala e celebrações com serviço completo e apresentação impecável.",
                img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
              },
              {
                title: "Cardápios sob medida",
                desc: "Dietas especiais, restrições alimentares e preferências atendidas com criatividade.",
                img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/80 transition-all hover:border-amber-700/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-amber-50">
                    {item.title}
                  </h3>
                  <p className="text-stone-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="relative border-t border-stone-800/50 py-24 px-6"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="relative h-[400px] w-full min-w-[300px] overflow-hidden rounded-2xl lg:w-1/2">
            <img
              src="/photo.png"
              alt="Grazielle Gabriela - Personal Chef"

              className="object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
              Sobre mim
            </p>
            <ColourfulText text="Atendimento completo :" />
            <p className="mb-4 text-stone-400 leading-relaxed">
              Profissional especializada em gastronomia personalizada, com experiência na criação de cardápios exclusivos e
              na preparação de refeições adaptadas ao estilo de vida e às necessidades individuais de cada cliente
            </p>
            <p className="mb-4 text-stone-400 leading-relaxed">
              Desde o planejamento do menu e seleção de ingredientes frescos até o preparo das refeições no domicílio,
              organização da cozinha e orientação sobre armazenamento e boas práticas culinárias.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Trabalho com ingredientes selecionados, técnicas clássicas e
              toques contemporâneos para criar momentos inesquecíveis à mesa.
            </p>

          </div>
        </div>
      </section>


      {/* CTA / Contato */}
      <section
        id="contato"
        className="relative border-t border-stone-800/50 bg-stone-900/50 py-24 px-6"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
            Contato
          </p>
          <h2 className="mb-6 text-3xl font-bold text-amber-50 sm:text-4xl">
            Vamos criar algo especial
          </h2>
          <p className="mb-10 text-stone-400">
            Conte-me sobre seu evento, data e preferências. Retorno em até 24h.
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/5522997697222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800/50 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Grazielle Gabriela. Personal Chef.
          </p>
          <div className="flex gap-6">
            <a href="#hero" className="text-sm text-stone-500 hover:text-amber-400 transition-colors">
              Início
            </a>
            <a href="#contato" className="text-sm text-stone-500 hover:text-amber-400 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
