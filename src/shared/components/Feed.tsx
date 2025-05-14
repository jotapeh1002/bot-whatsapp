import backgroundFeed from '../../assets/backgroundFeed1.jpg';
import celularTela1 from '../../assets/publi02.png';
import { FaArrowRight } from 'react-icons/fa';
import { FiClock, FiCpu, FiLayers, FiImage, FiTrendingUp, FiUsers } from 'react-icons/fi';

export const Feed = () => {
  const messageFeedInfo = [
    { name: 'Clientes satisfeitos', number: '+500' },
    { name: 'Mensagens enviadas', number: '+10M' },
    { name: 'Disponibilidade', number: '99.9%' },
  ];

  const recursosInspirados = [
    {
      icon: <FiClock className="h-8 w-8 text-blue-500" />,
      title: 'Atendimento Automatizado 24/7',
      body: 'Seu negócio sempre disponível para atender clientes a qualquer hora, melhorando a satisfação e retenção.',
      bgColor: 'bg-blue-200/40',
    },
    {
      icon: <FiCpu className="h-8 w-8 text-purple-500" />,
      title: 'Respostas Inteligentes com IA',
      body: 'Utilize Inteligência Artificial para conversas naturais, respostas precisas e aprendizado contínuo.',
      bgColor: 'bg-purple-200/40',
    },
    {
      icon: <FiLayers className="h-8 w-8 text-yellow-500" />,
      title: 'Integrações Poderosas',
      body: 'Conecte seu chatbot com CRMs, e-commerce, pagamentos e mais, centralizando suas operações.',
      bgColor: 'bg-yellow-200/40',
    },
    {
      icon: <FiImage className="h-8 w-8 text-red-500" />,
      title: 'Comunicação Multimídia',
      body: 'Envie e receba imagens, vídeos, áudios e documentos, tornando a comunicação mais rica e interativa.',
      bgColor: 'bg-red-200/40',
    },
    {
      icon: <FiTrendingUp className="h-8 w-8 text-teal-500" />,
      title: 'Aumento de Vendas',
      body: 'Qualifique leads, recupere carrinhos abandonados e envie ofertas personalizadas automaticamente.',
      bgColor: 'bg-teal-200/40',
    },
    {
      icon: <FiUsers className="h-8 w-8 text-orange-500" />,
      title: 'Múltiplos Atendentes',
      body: 'Gerencie todas as conversas em uma única plataforma com múltiplos usuários e departamentos.',
      bgColor: 'bg-orange-200/40',
    },
  ];

  return (
    <div className="bg-gray-800 pb-10">
      <div
        style={{ backgroundImage: `url(${backgroundFeed})` }}
        className="relative bg-cover pt-16 h-full w-full"
      >
        {/* cor mais ecura/contraste */}
        <div className="absolute inset-0 bg-gradient-to-b to-gray-800 bg-blue-950/80"></div>
        {/* feed */}
        <div className="flex-wrap lg:flex-nowrap relative flex h-full mx-auto lg:container z-10 text-white text-2xl">
          {/* info da pagina esqueda */}
          <div className="px-3 md:container md:mx-auto w-full">
            <div className="text-center lg:text-start flex flex-col mx-auto lg:mx-0 max-w-[73vh]">
              <h1 className="text-[45px] mb-20 lg:mb-9 tracking-tight font-bold">
                Automatize seu <span className="text-green-500">WhatsApp</span> com nossa solução
                premium
              </h1>
              <div className="text-gray-300 px-4 sm:px-0 text-xl">
                Aumente sua produtividade com nossa plataforma de automação completa para WhatsApp.
                Atendimento 24/7, envios em massa e muito mais!
              </div>
              {/* botões ver mais e começar agora */}
              <div className="flex-col flex md:flex-row lg:mt-18 mt-24 justify-center lg:justify-start space-y-5 md:space-y-0 mx-5 md:mx-0 md:space-x-5 text-[20px]">
                <button
                  className="bg-green-500  hover:bg-green-600 hover:scale-102 duration-300 text-white font-semibold py-2.5 px-5
                rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                >
                  Começar agora <FaArrowRight className="ml-2" />
                </button>
                <button
                  className="border-2 border-green-600 hover:scale-102 duration-300  text-green-500 hover:bg-green-500 hover:text-white
                font-semibold py-2.5 px-5 rounded-2xl flex items-center justify-center transition-all"
                >
                  Ver recursos
                </button>
              </div>
            </div>
            {/* informaçoes dos clientes */}
            <div
              className="flex mb-30 flex-wrap lg:flex-nowrap justify-center w-full lg:mb-1 px-4 lg:px-0
           py-5 mt-25 lg:mt-22 gap-5 lg:justify-start"
            >
              {messageFeedInfo.map((v, i) => (
                <div className="font-bold flex flex-col text-center space-y-2" key={i}>
                  <div className="text-green-500 text-[38px]">{v.number}</div>
                  <div className=" text-[15px] md:text-lg text-gray-200">{v.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* foto esqueda da plub */}
          <div className="bg-gradient-to-b px-4 from-gray-400 justify-center gap-5 lg:from-transparent bg-cover md:-mr-10 w-full flex lg:justify-end">
            <img
              className="max-h-[25vw] min-h-[18vh] lg:max-h-full lg:h-[42.4vw] self-end"
              alt="Imagem de um celular exibindo as mensagens de um bot pelo whatsapp"
              src={celularTela1}
            />
            <div className="lg:hidden text-center font-bold self-center text-[10vw] md:text-[7vw]">
              50% <span className=" text-red-500">OFF</span>
            </div>
          </div>
        </div>
      </div>
      {/* seccao recursos */}
      <div id="recursos" className="bg-blue-950/20 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">
              FERRAMENTAS PODEROSAS
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tudo que você precisa para decolar
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Nossa plataforma oferece um conjunto completo de ferramentas para automatizar seu
              marketing, atendimento e vendas no WhatsApp.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {recursosInspirados.map((recurso) => (
              <div
                key={recurso.title}
                className={`flex flex-col hover:scale-103 transition-all duration-300 rounded-2xl  border-green-500 ${recurso.bgColor} p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
                  {recurso.icon}
                </div>
                <h3 className="text-xl font-semibold leading-7 text-white">{recurso.title}</h3>
                <p className="mt-2 flex-auto text-base leading-7 text-gray-300/50">
                  {recurso.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
