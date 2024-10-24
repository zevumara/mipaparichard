import React from "react";
import { FaHeart } from "react-icons/fa";
import ElObservador from "../../assets/el-observador.webp";
import Subrayado from "../../assets/subrayado.webp";
import { FaRegFilePdf } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="container px-6 py-4 text-sm">
        <div className="space-y-4">
          <p>
            El pasado 19 de abril de 2024, cerca de las 6 de la mañana,{" "}
            <strong>
              mi papá, Richard Alonso, de 46 años, iba camino a su trabajo cuando fue atropellado
              por un patrullero de la policía que circulaba sin sirena y en contramano a altas
              velocidades
            </strong>
            . El impacto fue devastador. Sufrió una lesión en la primera vértebra que comprometió
            seriamente su movilidad, junto con otras complicaciones neurológicas.
          </p>
          <p>
            <strong>
              Mi papá es mi ejemplo a seguir. Trabajó toda su vida para darme lo mejor. Él es mi
              mundo.
            </strong>
          </p>
          <p>
            Hoy la está luchando como puede. La realidad es que su recuperación es un proceso largo,
            complejo y costoso. Los tratamientos médicos, las terapias y las adaptaciones necesarias
            para su nueva vida superan nuestras posibilidades económicas.
          </p>
          <p>
            <strong>
              Por eso necesito recurrir a la solidaridad de la gente, para darle a mi papá una nueva
              oportunidad. Cada contribución, por pequeña que parezca, significa un paso más hacia
              una nueva esperanza para nosotros como familia.
            </strong>
          </p>
          <p>
            Ya sea con una donación mínima o simplemente compartiendo esta página para que más
            personas puedan conocer nuestra situación, me estás ayudando.
          </p>
          <p>
            Con gratitud y esperanza,
            <br />
            <span className="font-bold text-sky-700">María Agustina Alonso</span>
          </p>
        </div>
        <button className="bg-red-600 w-full my-8 py-2 text-white font-bold rounded text-lg md:hidden flex justify-center items-center shadow-md">
          Donar <FaHeart className="ml-2" />
        </button>
        <div className="space-y-4">
          <h2 className="font-['Caveat'] text-4xl">El accidente</h2>
          <p>En los medios:</p>
          <div className="flex">
            <img src={Subrayado} alt="" className="w-20 rounded shadow mr-2" />
            <div>
              <p>Diario Subrayado</p>
              <p>
                <a
                  className="text-sky-600 underline text-xs"
                  href="https://www.subrayado.com.uy/patrullero-persecucion-choco-un-auto-el-barrio-ituzaingo-y-dejo-al-conductor-grave-n944208"
                  target="_blank"
                >
                  Patrullero en persecución chocó con un auto en el barrio Ituzaingó y dejó al
                  conductor grave
                </a>
              </p>
            </div>
          </div>
          <div className="flex">
            <img src={ElObservador} alt="" className="w-20 rounded shadow mr-2" />
            <div>
              <p>Diario El Observador</p>
              <p>
                <a
                  className="text-sky-600 underline text-xs"
                  href="https://www.elobservador.com.uy/nota/un-movil-policial-que-seguia-a-una-moto-choco-contra-un-auto-en-barrio-ituzaingo-2024419124523"
                  target="_blank"
                >
                  Un móvil policial que seguía a una moto chocó contra un auto en barrio Ituzaingó
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-6">
          <h2 className="font-['Caveat'] text-4xl">Las secuelas</h2>
          <p>
            Mi papá es Técnico Electrónico. Siempre fue un hombre muy activo, trabajó toda su vida
            para darme lo mejor. Hoy, a más de 6 meses del accidente, sigue internado, con una
            hemiplejia que lo mantiene postrado en cama, además de tener el habla limitada por una
            cánula de traqueostomía.
          </p>
          <p>
            Es una situación sumamente difícil de sobrellevar para cualquier persona, y verlo en
            este estado me destroza...
          </p>
        </div>
        <div className="space-y-4 mt-6 pb-16">
          <h2 className="font-['Caveat'] text-4xl">La recuperación</h2>
          <p>
            El 19 de septiembre de 2024 nos visitó un médico especialista del{" "}
            <a href="https://www.fleni.org.ar/" className="text-sky-600 underline" target="_blank">
              centro Fleni
            </a>
            . El mismo diseñó un plan de rehabilitación multidisiplinario de 3 meses que va a ayudar
            a mi papá a recuperar calidad de vida. El costo total del tratamiento es de $71.756.170
            de pesos argentinos.
          </p>
          <p>
            Es una cifra que está muy por encima de nuestras posibilidades económicas, pero tengo la
            esperanza de que si logro juntar ese dinero para su tratamiento, la calidad de vida de
            mi papá pueda mejorar considerablemente.
          </p>
          <p>
            <a href="#" className="flex items-center text-xs underline text-red-700">
              <FaRegFilePdf className="mr-1" /> Descargar Plan de Tratamiento de Fleni
            </a>
          </p>
        </div>
      </div>
      <div className="flex-no-wrap fixed bottom-0 flex w-full items-center justify-center pb-4 z-10">
        <button className="bg-sky-600 px-6 py-2 text-white font-bold rounded text-lg md:hidden flex justify-center items-center shadow-md">
          Donar <FaHeart className="ml-2" />
        </button>
      </div>
      <div className="bg-white/80 backdrop-blur w-full h-full fixed z-20 top-0 left-0 overflow-y-auto">
        <div className="container h-full p-4 text-sm flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-xl font-bold flex items-center">
              <span class="fi fi-ar mr-2 rounded-sm shadow" /> Donaciones en Argentina
            </h2>
            <div className="px-3 py-2 my-4 bg-white text-base shadow">
              <p>
                <strong>Alias:</strong> mi.papa.richard
              </p>
              <p>
                <strong>CVU:</strong> 0000003100060243814400
              </p>
              <p>
                <strong>Maria Agustina Alonso</strong>
              </p>
              <p>
                <strong>CUIT/CUIL:</strong> 27461367416
              </p>
            </div>
            <a
              href="https://link.mercadopago.com.ar/zevumara"
              className="bg-[#009ee3] border border-black/20 px-6 py-2 text-white font-bold rounded text-lg md:hidden flex justify-center items-center shadow-md"
            >
              Donar con Mercado Pago <FaHeart className="ml-2" />
            </a>
          </div>
          <div>
            <h2 className="text-xl font-bold flex items-center">
              <span class="fi fi-uy mr-2 rounded-sm shadow" /> Donaciones en Uruguay
            </h2>
            <div className="px-3 py-2 my-4 bg-white text-base shadow">
              <p>
                <strong>Alias:</strong> mi.papa.richard
              </p>
              <p>
                <strong>CVU:</strong> 0000003100060243814400
              </p>
              <p>
                <strong>Maria Agustina Alonso</strong>
              </p>
              <p>
                <strong>CUIT/CUIL:</strong> 27461367416
              </p>
            </div>
            <a
              href="https://donafacil.uy/historia/un-camino-de-esperanza-para-richard-ayudemos-a-su-rehabilitacion-20241016155403"
              className="bg-[#ff7db2] border border-black/20 px-6 py-2 text-white font-bold rounded text-lg md:hidden flex justify-center items-center shadow-md"
            >
              Donar con DonaFacil <FaHeart className="ml-2" />
            </a>
          </div>
          <div>
            <h2 className="text-xl font-bold flex items-center">
              <span class="fi fi-eu mr-2 rounded-sm shadow" /> Donaciones internacionales
            </h2>
            <div className="px-3 py-2 my-4 bg-white text-base shadow">
              <strong>PayPal:</strong> @mipaparichard
            </div>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=KG42TENANUQ2N"
              className="bg-[#ffc43b] border border-black/20 px-6 py-2 font-bold rounded text-lg md:hidden flex justify-center items-center shadow-md"
            >
              Donar con PayPal <FaHeart className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
