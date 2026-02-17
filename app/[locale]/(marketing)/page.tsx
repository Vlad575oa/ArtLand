import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('Hero');
  const tCommon = useTranslations('Common');
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Background Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#4A6756]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-terracotta/10 rounded-full blur-[100px]" />
        </div>

        {/* Header/Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-28 pb-32 overflow-hidden bg-hero-gradient">
          <svg className="absolute top-0 right-0 w-[60%] h-full opacity-[0.03] pointer-events-none" fill="none" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,0 C300,100 400,300 350,600 L0,600 C50,400 100,200 200,0 Z" fill="white" />
          </svg>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8 text-left relative">
              <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-primary/20 w-fit text-xs tracking-[0.2em] uppercase text-primary font-bold backdrop-blur-md shadow-lg">
                <span className="material-icons-round text-sm text-primary">eco</span>
                {t('badge')}
              </span>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-[#F0F2F0] drop-shadow-2xl animate-fade-in">
                {locale === 'ru' ? (
                  <>
                    Создаем <br />
                    <span className="italic text-primary bg-clip-text text-transparent bg-gold-gradient relative inline-block">
                      живое искусство
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00025 6.99997C25.7501 2.99999 52.4462 0.999954 87.5002 0.999954C122.554 0.999954 153.75 3.00001 198 7" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span> <br />
                    на вашем участке
                  </>
                ) : (
                  <>
                    Cultivating <br />
                    <span className="italic text-primary bg-clip-text text-transparent bg-gold-gradient relative inline-block">
                      living art
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00025 6.99997C25.7501 2.99999 52.4462 0.999954 87.5002 0.999954C122.554 0.999954 153.75 3.00001 198 7" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span> <br />
                    on your land
                  </>
                )}
              </h1>

              <p className="text-lg md:text-xl text-[#B0B8B4] max-w-2xl font-light leading-relaxed pl-1 border-l-2 border-primary/30">
                {t('subtitle')}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-6">
                <button className="gold-btn group relative px-10 py-5 text-olive-deep rounded-full flex items-center gap-3 font-bold text-sm tracking-wide">
                  <span>{t('cta')}</span>
                  <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>

                <button className="flex items-center gap-4 px-6 py-4 rounded-full text-[#C0C8C4] hover:text-white transition-all group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <span className="material-icons-round text-2xl group-hover:text-primary">play_arrow</span>
                  </div>
                  <span className="text-sm font-medium tracking-wide border-b border-transparent group-hover:border-primary/50 transition-all pb-0.5">
                    {t('showreel')}
                  </span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[650px] hidden lg:block">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 leaf-shape-wide overflow-hidden convex-card p-2 z-10 rotate-2 hover:rotate-0 transition-all duration-700 ease-out">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiVWGOAVHiIZIlz3ygKeyWRNFFs0dILgVb4lMP_L_6AFcGq0JQH0oFfhq-tMJeJ7pxXMnqWeW_z8LmEnUamNtRbRXicdUD627vBj1yOk8pi8B6bV9IHnkosmnRISBoxuvnl9BQfLm6MoVz4ogERmsYccImPgZFPMR5cxNTHL7ej9cQpuiqvczVbsFseheFfjH9yotZz19H0_32I04PThacL-OhqnbQm3R79F536ww0Wn06A_pj7rl193-ehcgztp47AZC7RtgoObM"
                    alt="Minimalist modern garden path with concrete steps and lush green ferns"
                    className="w-full h-full object-cover leaf-shape-wide opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="absolute top-10 -right-8 w-3/4 h-3/4 bg-[#3D5246] leaf-shape-wide -z-0 opacity-40 rotate-6" />

                <div className="absolute bottom-12 -left-12 glass-panel p-8 rounded-2xl max-w-[240px] z-20 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-icons-round text-primary text-2xl">verified</span>
                    <span className="text-xs uppercase tracking-widest text-primary font-bold">
                      {t('experience_label')}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif text-white">150+</span>
                  </div>
                  <p className="text-sm text-[#C0C8C4] mt-2 leading-relaxed font-light">
                    {t('experience_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <section className="relative z-20 bg-[#26352E] rounded-t-[4rem] -mt-16 pt-24 pb-20 shadow-[0_-20px_60px_rgba(0,0,0,0.4)] border-t border-white/5 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-leaf-pattern" />

          {/* Approach Section */}
          <div className="container mx-auto px-6 mb-32 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-12">
              <div>
                <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-primary" />
                  {t('approach_badge')}
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif text-[#F0F2F0] leading-tight">
                  {locale === 'ru' ? (
                    <>Этапы создания <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8A9A90]">совершенства</span></>
                  ) : (
                    <>Stages of creating <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8A9A90]">perfection</span></>
                  )}
                </h3>
              </div>
              <p className="text-[#A0ABA5] max-w-md text-base leading-relaxed font-light">
                {t('approach_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'science', titleKey: 'approach_step1_title', descKey: 'approach_step1_desc' },
                { icon: 'gesture', titleKey: 'approach_step2_title', descKey: 'approach_step2_desc' },
                { icon: 'architecture', titleKey: 'approach_step3_title', descKey: 'approach_step3_desc' },
                { icon: 'spa', titleKey: 'approach_step4_title', descKey: 'approach_step4_desc' }
              ].map((step, i) => (
                <div key={i} className="convex-card p-8 rounded-2xl flex flex-col justify-between h-[340px] group transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                  <div className="w-16 h-16 rounded-2xl bg-[#2C3E34] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.05)] flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <span className="material-icons-round text-3xl">{step.icon}</span>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-serif text-[#F0F2F0] mb-3 group-hover:text-primary transition-colors">{t(step.titleKey)}</h4>
                    <p className="text-[#A0ABA5] text-sm leading-relaxed">{t(step.descKey)}</p>
                  </div>
                  <div className="mt-4 w-12 h-[2px] bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase block mb-4">{t('services_badge')}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#F0F2F0]">{t('services_title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'landscape', titleKey: 'service1_title', descKey: 'service1_desc', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJeHSgy9tJvI5tUi8hyYlmjHd_WxcTA73Q4sYM7pLYkWutsJUDlQITfe4pbKCTL4cfOoJ9z5rZlMry4DbUOBbV6BL3gVoGrUcULowSuBjcYjXBdg_bftN2AcJdFYiN2J-kUuWZWMsvUeDv38CwZ7sBBspq2olGS00crBerPqJqhzz_kV9osxuDYwYZCeZ1ZKMevDIXrTCG3yjKFm6yPvkaB0qv_BvcXBz78MjO5nXzb4Koe4fxWsRsoC9RaNq-1GWJ9kKy75mdgmw' },
                { icon: 'water_drop', titleKey: 'service2_title', descKey: 'service2_desc', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmdukYhyGWvlueVTnubcSmbO8xB7sL34keOqsqTb7YA1YSlInBZZXQo0Yq-FyVXHyd9zypO-4Tv3MgIljDx2la-WC9qB7zf-kq_mnV6-jFXc9pMRAPwcEEcX2vGpOlrDDBNRjSwDYgg6Bk9N6D7qGYv08lw7zJ_8dHy1Ea1S_04cC028hy1LtxlLoJLeedrggsRdSAxuwtxOjfWLFnQtdxyJFeR-jlC3GnJzwwZUZoCODmmfS_2avYCDGJaAGFqmfzGXbOEvwnQbs' },
                { icon: 'lightbulb', titleKey: 'service3_title', descKey: 'service3_desc', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM6XciOdzS0gaPA9CTjbHCnLbI61MoZJrpimBYdAiQ8uNqcyPGQyH-snCBUBxdrJHJozJEjZolTOxux4wHvRU1YrOVN1jUaTgKUIlcmJmtopFe42GieMcTyRjKhaw93CHaKtJY0n9Ed-OpIutrHAMwaI1nN4eiLO8Ph0YKIGLipdixaEEBhT8HeRaGqqyZpp-0lXKGNMfmw3jU-cWS05WhfBdZyfO9ISx8t88CMxJHQlhDKqKaNWTXytccIdG-5p1WRpIZiFc_ON8' },
                { icon: 'forest', titleKey: 'service4_title', descKey: 'service4_desc', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtqvzR-dVu_2uffjKPLcnO4P2typZrFBFsDPy6g4BP6sjzWKYecsxrrZKJfrqRnFkm4RvzUxc6Zuig3QwSyi9hzt4GHQv58J8g4kUPkSItLZVD1SN4Xu5imN_SipnE3vPADEbLNmUSLBQAu4k3RgsxnYNDKkFv5i6VENRD1XofdW8kupNKfeWVwkw8as465OuCMTjI66i78hPX3TLv2uzMh-YWAXZ4JMyAlMgcUSGw_fKf5uMREYVd8jLqZyxuOPX5tqq8syOEgfg' },
                { icon: 'waves', titleKey: 'service5_title', descKey: 'service5_desc', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzc53Ure_MIpBg7Cbb7yH43-AzYHqTVmrilp_53U9_VXcpk_0TJFK3wC6rfSYIwLmW_JCUqixLNLYsdv7falHIjszHoKIDLiey9iJDLB6TDp8Pn_i6mzu3ccWmIib6HlIXIexSQGlCZH8Xi8vvekD6ZfHkZEQaRKNBbrGGWn8H392SEUI-UXl3i-G6Cmq4Vi81NYf3pEaFXI8h2QlduSwQpKAC7zntjwUsyVf02VDGjnK0ei3zcOjCUIyAWh_LtmQ9dAD-uL9x15c' },
                { icon: 'deck', titleKey: 'service6_title', descKey: 'service6_desc', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfmxPiQXm125fldTm6yWhkB7SwjfA4t2LZ15hk9DmnLtZnr18q45gSBQMGABbRhBQpdMQx1dXLBKSjsZgn9U3huT_3IfdrJQYS8DBMnNsFmJiOZJ4zEPoTfhR9jrQn2QAJ7pW7f8KZoFk3sU5cyFjCHR1RillhVH8_D7Iak7Cv1HBH-fFF0UDtDCskS8pY9LfG-Sl99gjUuciRme1cT7oqlEAoaR1AidkQQINAQ3QrSGVdvOwX0C-6aPyo6uHWYbx8O_o3k4GIzWk' }
              ].map((service, i) => (
                <div key={i} className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer convex-card p-2">
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                    <img
                      src={service.img}
                      alt={t(service.titleKey)}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E27] via-[#1F2E27]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10 text-left">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-olive-deep transition-all">
                        <span className="material-icons-round">{service.icon}</span>
                      </div>
                      <h3 className="text-2xl font-serif text-white mb-3">{t(service.titleKey)}</h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-light">
                        {t(service.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-6 mt-32 relative z-10">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2E4035] to-[#24332B] px-8 py-20 lg:p-24 text-center border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
              <svg className="absolute top-10 left-10 w-32 h-32 text-white/5 rotate-[-15deg]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22l1-2.3A4.49,4.49 0 0,0 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-[#F0F2F0] mb-6">{t('cta_title')}</h2>
                <p className="text-[#A0ABA5] mb-12 text-lg font-light">
                  {t('cta_desc')}
                </p>
                <form className="flex flex-col md:flex-row gap-4 justify-center">
                  <div className="relative w-full md:w-auto min-w-[320px]">
                    <input
                      className="w-full h-full px-8 py-5 rounded-full bg-[#1C2922] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                      placeholder={t('cta_input_placeholder')}
                      type="email"
                    />
                  </div>
                  <button className="gold-btn px-10 py-5 text-olive-deep font-bold rounded-full transition-all whitespace-nowrap" type="button">
                    {t('cta_button')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
