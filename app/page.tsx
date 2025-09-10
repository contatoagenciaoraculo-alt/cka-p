"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Shield,
  Clock,
  Users,
  Calculator,
  MessageCircle,
  Tag,
  Play,
  Download,
  Sparkles,
  ChevronDown,
  Gift,
  RefreshCw,
} from "lucide-react"

export default function CrocheKidsAcademy() {
  const [showStickyButton, setShowStickyButton] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [currentProofImage, setCurrentProofImage] = useState(0)

  const [categoryCarousels, setCategoryCarousels] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = window.innerHeight * 0.3
      setShowStickyButton(scrolled > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProofImage((prev) => (prev === 0 ? 1 : 0))
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCategoryCarousels((prev) => {
        const newState = { ...prev }
        categories.forEach((_, index) => {
          newState[index] = (prev[index] + 1) % categories[index].images.length
        })
        return newState
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const scrollToOffer = () => {
    const offerSection = document.getElementById("oferta")
    offerSection?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const proofImages = [
    { src: "https://i.imgur.com/5CtCZ7K.png", alt: "Prova de vendas da aluna Mariana - Imagem 1" },
    { src: "https://i.imgur.com/U7iLfQ8.png", alt: "Prova de vendas da aluna Mariana - Imagem 2" },
  ]

  const modelImages = [
    { src: "https://i.pinimg.com/1200x/3c/66/9f/3c669fb4b6a87912d003397db30807bd.jpg" },
    { src: "https://img.elo7.com.br/product/685x685/480843C/vestido-bebe-infantil-de-croche-bella-e-a.jpg" },
    { src: "https://i.pinimg.com/736x/c9/ff/df/c9ffdf741b97bb7c9034ba2a6ca9b586.jpg" },
    { src: "https://i.pinimg.com/1200x/03/dd/67/03dd67d586eb6b905d8ba9c43d9b90fa.jpg" },
    { src: "https://i.pinimg.com/1200x/e6/6f/5f/e66f5fca6065557966c08243b4e8466d.jpg" },
    { src: "https://img.elo7.com.br/product/685x685/481BAE3/macaquinho-em-croche-bebe-infantil-anna-frozen.jpg" },
    { src: "https://i.pinimg.com/736x/c4/4f/8b/c44f8bb96812b9a8ca38ce9e5646d41c.jpg" },
    { src: "https://i.pinimg.com/736x/b7/a0/7b/b7a07b1c719be14b6f6cfaae0e63474c.jpg" },
    { src: "https://i.pinimg.com/1200x/a3/c3/af/a3c3afbe588b2d10cbb89d1efc40013a.jpg" },
  ]

  const categories = [
    {
      title: "Newborn & Maternidade",
      description: "primeiras fotos, saída de maternidade, lembrancinhas",
      images: [
        "https://i.pinimg.com/1200x/3c/66/9f/3c669fb4b6a87912d003397db30807bd.jpg",
        "https://i.pinimg.com/736x/c9/ff/df/c9ffdf741b97bb7c9034ba2a6ca9b586.jpg",
        "https://i.pinimg.com/1200x/03/dd/67/03dd67d586eb6b905d8ba9c43d9b90fa.jpg",
      ],
    },
    {
      title: "Escola & Inverno",
      description: "toucas, casaquinhos, luvinhas e peças quentinhas",
      images: [
        "https://img.elo7.com.br/product/zoom/21731C8/sandalinha-em-croche-bebe-sandalinha.jpg?_gl=1*1cloi6m*_gcl_au*NDU5NzczMjI5LjE3NTY4NDYxNTc.*_ga*NTE2OTQ1ODY3LjE3NTY4NDYxNTc.*_ga_22YVRK2WCW*czE3NTY4NTU5MDQkbzIkZzEkdDE3NTY4NTYyMzIkajYwJGwwJGgxNTQ1MTA3MTQ0",
        "https://img.elo7.com.br/product/685x685/1989870/conjunto-croche-bebe-menina-enxoval.jpg",
        "https://img.elo7.com.br/product/685x685/55D058C/casaquinho-de-bebe-sapatinho-e-touca-recem-nascido-menina.jpg",
      ],
    },
    {
      title: "Festa & Batizado",
      description: "vestidos, conjuntinhos e detalhes finos",
      images: [
        "https://img.elo7.com.br/product/685x685/1BDC59D/vestido-infantil-rosa-e-branco-em-croche-infantil.jpg",
        "https://img.elo7.com.br/product/685x685/3BBEE93/vestido-de-croche-bebe-bebe.jpg",
        "https://img.elo7.com.br/product/685x685/3ACB095/macacao-em-croche-para-bebe-luvinha-bebe.jpg",
      ],
    },
    {
      title: "Presentes & Lembrancinhas",
      description: "itens rápidos de girar",
      images: [
        "https://i.pinimg.com/1200x/92/9a/82/929a8272f1fb0256ec49569294704e5f.jpg",
        "https://i.pinimg.com/736x/b4/05/f6/b405f6312613ff4c7c0934618e7928e5.jpg",
        "https://i.pinimg.com/736x/c5/ff/a5/c5ffa5d6dcce51eb98849961b300213f.jpg",
      ],
    },
  ]

  const testimonialImages = [
    "https://i.imgur.com/JQExJTQ.png",
    "https://i.imgur.com/1r1vHrw.png",
    "https://i.imgur.com/TQvkZ5W.png",
    "https://i.imgur.com/PgpJmh0.png",
  ]

  const faqData = [
    {
      question: "Como recebo o acesso?",
      answer: "Por e-mail imediatamente após a confirmação do pagamento (links para PDFs, planilha e vídeos).",
    },
    {
      question: "É para iniciantes?",
      answer: "Sim. A P1 começa com pontos básicos e entra em ação com 3 modelos fáceis.",
    },
    {
      question: "Posso vender as peças?",
      answer:
        "Sim. A licença amiga do artesão libera a venda das peças físicas feitas por você. Não é permitido revender/compartilhar os arquivos digitais.",
    },
    {
      question: "Para quais idades?",
      answer: "Do RN a 6 anos (há aula de ajuste de tamanho).",
    },
    {
      question: "Funciona no celular? E a planilha?",
      answer: "Sim. PDFs e vídeos funcionam no celular/computador. A planilha é no Google Sheets.",
    },
    {
      question: "Posso imprimir?",
      answer: "Sim. Guia e caderninho têm versão para imprimir.",
    },
    {
      question: "Sobre tempo por peça e preço:",
      answer: "As estimativas e faixas sugeridas estão somente dentro do guia/planilha.",
    },
    {
      question: "É pagamento único? Tem mensalidade?",
      answer: "Pagamento único de R$ 27,90. Sem mensalidade.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* BLOCO 1 - Venda Imediata (Primeira Dobra) */}
      <section
        className="relative overflow-hidden hero-texture py-12 sm:py-16 px-4"
        style={{
          background: "linear-gradient(to bottom, #FFFDF7 0%, #F7F3FF 70%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Headlines Section */}
          <div className="text-center space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="mx-auto max-w-[900px] text-center font-extrabold leading-tight text-[#2B2B2B] text-3xl md:text-5xl lg:text-6xl mb-4">
                Aprenda a criar modelos infantis com o nosso{" "}
                <span className="align-baseline whitespace-nowrap inline-flex items-center rounded-full px-2 py-0.5 bg-[#EAF7F4] shadow-[inset_0_0_0_1px_rgba(0,0,0,.04)]">
                  APLICATIVO
                </span>{" "}
                e fature até{" "}
                <span className="align-baseline whitespace-nowrap inline-flex items-center rounded-full px-2 py-0.5 bg-[#F58FB0] text-white shadow-sm">
                  R$ 3.000
                </span>{" "}
                por mês.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                Mesmo que você tenha pouco tempo e só saiba os pontos básicos — escolha 3 modelos, precifique em minutos
                e feche pedidos.
              </p>
            </div>

            <div className="flex justify-center max-w-4xl mx-auto">
              <div className="relative w-full max-w-3xl">
                <div className="bg-white rounded-2xl shadow-2xl p-3 sm:p-4 border border-gray-100">
                  <div className="relative overflow-hidden rounded-xl bg-gray-50">
                    <wistia-player media-id="wuuxq1vwg0" seo="false" aspect="0.5625" className="w-full"></wistia-player>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Pulsing CTA Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="cta-button text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-12 sm:h-14 rounded-full font-semibold animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-300"
                onClick={scrollToOffer}
              >
                Quero fazer parte
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 2 - Demonstrativo (Passe para o lado) */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color">
              Veja alguns dos modelos que você irá aprender:
            </h2>
            <p className="text-base sm:text-lg text-foreground px-4">
              Página do Guia de Modelos (fotos dos modelos de crochê infantil)
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {modelImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-white rounded-xl soft-shadow overflow-hidden border border-border">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={`Modelo de crochê infantil ${index + 1}`}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : modelImages.length - 1)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 soft-shadow transition-all duration-200 border border-border"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            </button>

            <button
              onClick={() => setCurrentSlide(currentSlide < modelImages.length - 1 ? currentSlide + 1 : 0)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 soft-shadow transition-all duration-200 border border-border"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            </button>

            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {modelImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              className="cta-button text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 h-12 rounded-full font-bold"
              onClick={scrollToOffer}
            >
              Quero os 80 modelos
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCO 3 - Ensinando vender */}
      <section className="py-12 sm:py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color px-4">
              Vamos muito além de somente te ensinar a criar os modelos
            </h2>
            <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto text-pretty px-4">
              você também vai aprender a como vendê-los de forma rápida e simples com a técnica 3Ps da Artesã.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Tag className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl title-color">Peça certa</h3>
                <p className="text-sm sm:text-base text-foreground">
                  escolha 3 modelos fáceis de vender conforme a ocasião.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl title-color">Preço simples</h3>
                <p className="text-sm sm:text-base text-foreground">calcule em minutos com a nossa planilha.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl title-color">Pedido por mensagem</h3>
                <p className="text-sm sm:text-base text-foreground">
                  envie as 6 frases, combine cor, medida e entrega.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BLOCO 4 - Mensurar resultado possível */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color px-4">
              Veja como chegar até R$3.000/mês (sem mistério) + um caso real
            </h2>
          </div>

          <div className="grid gap-8 lg:gap-12">
            <Card className="p-6 sm:p-8 bg-white soft-shadow border border-border">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <h3 className="font-serif font-semibold text-xl sm:text-2xl mb-6 title-color">
                    A conta — exemplos prontos pra copiar na sua planilha
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-muted rounded-lg border border-border space-y-2 sm:space-y-0">
                    <span className="text-foreground text-sm sm:text-base">30 peças × R$100</span>
                    <span className="font-bold text-primary text-lg">= R$3.000</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground">
                    (meta simples pra quem faz todo dia um pouquinho)
                  </p>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-muted rounded-lg border border-border space-y-2 sm:space-y-0">
                    <span className="text-foreground text-sm sm:text-base">20 peças × R$150</span>
                    <span className="font-bold text-primary text-lg">= R$3.000</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground">(menos peças, valor um pouco maior)</p>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-muted rounded-lg border border-border space-y-2 sm:space-y-0">
                    <span className="text-foreground text-sm:text-base">15 kits × R$199</span>
                    <span className="font-bold text-primary text-lg">≈ R$2.985</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground">(kits sobem o ticket sem complicar)</p>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 title-color text-sm sm:text-base">Mini-fórmula (faça agora):</h4>
                  <p className="text-foreground text-sm sm:text-base">
                    Peças do mês = sua meta ÷ seu preço médio → 3.000 ÷ 150 = 20 peças
                  </p>
                </div>

                <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-xl border-2 border-primary/20">
                  <p className="font-bold text-primary text-lg sm:text-xl mb-3">✨ Ação rápida:</p>
                  <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                    Escolha 3 modelos do guia, jogue os valores na nossa planilha de controle e aplique o método 3Ps que
                    ensinamos e você irá vender com muita facilidade no instagram e whatsapp.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 bg-white soft-shadow border border-border">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <h3 className="font-serif font-semibold text-xl sm:text-2xl title-color">
                    Veja como nossa aluna Mariana aplicando o metodo 3Ps está fazendo pedido todos os dias.
                  </h3>
                </div>

                <div className="relative">
                  {/* Desktop view - side by side */}
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0 w-1/2">
                        <img
                          src={proofImages[0].src || "/placeholder.svg"}
                          alt={proofImages[0].alt}
                          className="w-full h-auto rounded-lg border border-border"
                        />
                      </div>
                      <div className="flex-shrink-0 w-1/2">
                        <img
                          src={proofImages[1].src || "/placeholder.svg"}
                          alt={proofImages[1].alt}
                          className="w-full h-auto rounded-lg border border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile view - carousel */}
                  <div className="block sm:hidden">
                    <div className="relative overflow-hidden rounded-xl">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentProofImage * 100}%)` }}
                      >
                        {proofImages.map((image, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-auto rounded-lg border border-border"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Navigation buttons */}
                      <button
                        onClick={() => setCurrentProofImage(currentProofImage === 0 ? 1 : 0)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 soft-shadow transition-all duration-200 border border-border"
                      >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                      </button>

                      <button
                        onClick={() => setCurrentProofImage(currentProofImage === 1 ? 0 : 1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 soft-shadow transition-all duration-200 border border-border"
                      >
                        <ChevronRight className="w-5 h-5 text-foreground" />
                      </button>

                      {/* Dots indicator */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {proofImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentProofImage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentProofImage ? "bg-primary" : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              className="cta-button text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 h-12 rounded-full font-bold"
              onClick={scrollToOffer}
            >
              Bater minha meta este mês
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCO 5 - Para quem é a Crochê Kids Academy? */}
      <section className="py-12 sm:py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color px-4">
              Perfeita para:
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-base sm:text-lg text-foreground">
                Crocheteiras Iniciantes e experientes que querem ter acesso aos mais lindos e desejados modelos infantis
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-base sm:text-lg text-foreground">Iniciantes que querem começar a vender no infantil</p>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-base sm:text-lg text-foreground">
                Já faz crochê, porém não conhece as técnicas para acabamentos avançados
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-base sm:text-lg text-foreground">Para você que busca modelos novos e exclusivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 6 - Benefícios */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color">
              Quais benefícios você terá na Crochê Kids Academy
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="text-center p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Tag className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">80 modelos que vendem</h3>
                <p className="text-xs sm:text-sm text-foreground">
                  lista curta e certeira para newborn & maternidade, escola & inverno, festa & batizado, presentes &
                  lembrancinhas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">Tutoriais em vídeo</h3>
                <p className="text-xs sm:text-sm text-foreground">passo a passo do básico ao avançado.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">Planilha precificadora</h3>
                <p className="text-xs sm:text-sm text-foreground">
                  calcule em minutos com a planilha para você lucrar mais com as suas vendas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">Treinamento 3Ps da artesã</h3>
                <p className="text-xs sm:text-sm text-foreground">
                  Técnicas para explodir de vender no Instagram e WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BLOCO 7 - Área de Membros */}
      <section className="py-12 sm:py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color px-4">
              Área de membros da Crochê Kids Academy
            </h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative w-full order-1 lg:order-first -mx-4 sm:mx-0">
              <img
                src="https://i.imgur.com/ySqISe7.png"
                alt="Área de membros da Crochê Kids Academy"
                className="w-full max-w-none h-auto scale-110 sm:scale-100"
              />
            </div>

            <div className="space-y-6 order-2 lg:order-last w-full">
              <h3 className="font-serif font-semibold text-xl sm:text-2xl mb-6 title-color">Você vai ter acesso:</h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground">
                    80 modelos organizados por ocasião e idade (RN a 6 anos).
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground">
                    Guia completo de materiais, medidas, usos e combinações/kits.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground">
                    Planilha de preço de custo, tempo, margem e preço sugerido com "preço da minha região".
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground">
                    Vídeo-aulas técnicas: acabamento bonito e firme; troca de cor sem marcar; ajuste RN–6 anos; montagem
                    de kit; aplicação de pérolas/forro; materiais, fio e agulha.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground">
                    Treinamento 3Ps da artesã: Técnicas para explodir de vender no Instagram e WhatsApp.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground">
                    Atualizações mensais com novos modelos infantis
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground">Suporte às alunas via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 8 - Categorias incluídas */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color">
              Categorias incluídas:
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <h3 className="font-serif font-semibold text-lg sm:text-xl text-primary">{category.title}</h3>
                    <p className="text-foreground text-xs sm:text-sm">{category.description}</p>
                  </div>

                  <div className="relative overflow-hidden rounded-xl">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${categoryCarousels[index] * 100}%)` }}
                    >
                      {category.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="w-full flex-shrink-0">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${category.title} modelo ${imgIndex + 1}`}
                            className="w-full h-48 sm:h-56 object-cover rounded-lg border border-border"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Navigation buttons */}
                    <button
                      onClick={() =>
                        setCategoryCarousels((prev) => ({
                          ...prev,
                          [index]: prev[index] === 0 ? category.images.length - 1 : prev[index] - 1,
                        }))
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 soft-shadow transition-all duration-200 border border-border"
                    >
                      <ChevronLeft className="w-4 h-4 text-foreground" />
                    </button>

                    <button
                      onClick={() =>
                        setCategoryCarousels((prev) => ({
                          ...prev,
                          [index]: (prev[index] + 1) % category.images.length,
                        }))
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 soft-shadow transition-all duration-200 border border-border"
                    >
                      <ChevronRight className="w-4 h-4 text-foreground" />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-3 space-x-2">
                      {category.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() =>
                            setCategoryCarousels((prev) => ({
                              ...prev,
                              [index]: imgIndex,
                            }))
                          }
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            imgIndex === categoryCarousels[index] ? "bg-primary" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-lg sm:text-xl font-semibold text-primary">E muito mais…</p>
          </div>
        </div>
      </section>

      {/* BLOCO 9 - Prova social */}
      <section className="py-12 sm:py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color px-4">
              Veja o que nossas alunas estão falando da Crochê Kids Academy:
            </h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonialImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Depoimento ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() =>
                setCurrentTestimonial(currentTestimonial === 0 ? testimonialImages.length - 1 : currentTestimonial - 1)
              }
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 soft-shadow transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            <button
              onClick={() =>
                setCurrentTestimonial(currentTestimonial === testimonialImages.length - 1 ? 0 : currentTestimonial + 1)
              }
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 soft-shadow transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              className="cta-button text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 h-12 rounded-full font-bold"
              onClick={scrollToOffer}
            >
              Quero resultados assim
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCO 10 - Bônus */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color">
              Bônus que aceleram pedidos
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="text-center p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Tag className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">Etiquetas de cuidado</h3>
                <p className="text-xs sm:text-sm text-foreground">imprima e entregue junto com a peça.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">Caderninho de pedidos</h3>
                <p className="text-xs sm:text-sm text-foreground">nome, cor, medida, entrega.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 bg-white soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">Lista de materiais básicos</h3>
                <p className="text-xs sm:text-sm text-foreground">com notas por clima/região.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 chip-style soft-shadow border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base title-color">Modelos Secretos</h3>
                <p className="text-xs sm:text-sm text-secondary-foreground">
                  + 15 modelos que mais estão vendendo no Brasil em 2025.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BLOCO 11 - Oferta e Valor */}
      <section id="oferta" className="py-12 sm:py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-white soft-shadow border-2 border-primary/20">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 sm:p-6 text-center">
              <p className="text-sm sm:text-base font-medium mb-2 opacity-90">Aplicativo</p>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-2">Crochê Kids Academy</h2>
              <Badge className="bg-white/20 text-white border-white/30 text-sm sm:text-base px-3 py-1">
                ✅ OFERTA ESPECIAL
              </Badge>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-6">
              {/* Main Benefits */}
              <div className="space-y-4">
                <h3 className="font-serif font-semibold text-xl sm:text-2xl title-color text-center mb-6">
                  O que você recebe hoje
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      80 modelos organizados por ocasião e idade (RN a 6 anos)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      Guia completo de materiais, medidas, usos e combinações/kits
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      Planilha de preço (custo • tempo • margem • "preço da minha região")
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      Vídeo-aulas técnicas: acabamento; troca de cor; ajuste RN–6; montar kit; pérolas/forro;
                      materiais/fio/agulha
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      Treinamento 3 Ps da artesã — mensagens simples que vendem no Instagram e WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* Bonus Section */}
              <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-primary/20">
                <h3 className="font-serif font-semibold text-lg sm:text-xl title-color text-center mb-4 flex items-center justify-center space-x-2">
                  <Gift className="w-5 h-5 text-primary" />
                  <span>Bônus incluídos</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Gift className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      Etiquetas de cuidado (PDF para imprimir)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Gift className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      Caderninho de pedidos (nome, cor, medida, entrega)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Gift className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      Lista de materiais básicos e substitutos (com notas por clima/região)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Gift className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      Modelos Secretos: +15 modelos que mais estão vendendo no Brasil em 2025
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RefreshCw className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      Atualizações sazonais com novos modelos infantis
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">Suporte às alunas via WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="text-center space-y-4 bg-gradient-to-r from-primary/5 to-purple-100/50 rounded-xl p-6 border border-primary/20">
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-secondary-foreground line-through">De R$ 197,00 por:</p>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">R$ 37,00</p>
                  <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    <Check className="w-4 h-4" />
                    <span>Você economiza R$ 160,00</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="cta-button text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 h-12 sm:h-14 rounded-full font-bold w-full animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://checkout.oraculomidia.site/VCCL1O8SC8AW" target="_blank" rel="noopener noreferrer">
                    Quero Garantir Minha Vaga
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BLOCO 12 - Garantia + Urgência */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 chip-style border-primary/20 soft-shadow">
            <CardContent className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-sm sm:text-base title-color">Garantia incondicional</h3>
                    <p className="text-xs sm:text-sm text-secondary-foreground">de 30 dias</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-sm sm:text-base title-color">Comece hoje</h3>
                    <p className="text-xs sm:text-sm text-secondary-foreground">teste suas primeiras 3 peças</p>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-secondary-foreground px-4">
                Se não for para você, peça reembolso dentro do prazo.
                <br />
                Comece hoje e teste suas primeiras 3 peças ainda nesta semana.
              </p>

              <div className="mt-6">
                <Button
                  size="lg"
                  className="cta-button text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 h-12 rounded-full font-bold"
                  onClick={scrollToOffer}
                >
                  Testar sem risco por 30 dias
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BLOCO 13 - FAQ */}
      <section className="py-12 sm:py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-balance title-color">
              Perguntas Frequentes (FAQ)
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <Card
                key={index}
                className={`bg-white soft-shadow border border-border transition-all duration-300 ${
                  openFaqIndex === index ? "shadow-lg scale-[1.02]" : "hover:shadow-md"
                }`}
                style={{
                  transform: openFaqIndex === index ? "translateX(8px)" : "translateX(0)",
                }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 rounded-lg"
                  >
                    <h3 className="font-semibold text-sm sm:text-lg title-color pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 14 - Rodapé */}
      <footer className="py-8 sm:py-12 px-4 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif font-semibold text-lg sm:text-xl title-color">Crochê Kids Academy</h3>
              <p className="text-sm sm:text-base text-foreground">Modelos infantis que vendem</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-sm sm:text-base title-color">Suporte:</p>
              <a
                href="mailto:suporte@crochekidsacademy.com"
                className="text-primary hover:underline text-sm sm:text-base"
              >
                suporte@crochekidsacademy.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>

            <div className="flex justify-center items-center space-x-2 text-xs sm:text-sm text-foreground">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Site seguro (SSL)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
