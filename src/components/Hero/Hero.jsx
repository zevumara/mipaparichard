import React from "react";
import { FaHeart } from "react-icons/fa";
import ElObservador from "../../assets/el-observador.webp";
import Subrayado from "../../assets/subrayado.webp";
import MiPapaRichard from "../../assets/mipaparichard.webp";
import Secuelas from "../../assets/mipaparichard_secuelas.webp";
import { FaRegFilePdf } from "react-icons/fa6";
import { useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  const downloadPDF = async () => {
    const response = await fetch("/Paciente_Alonso_Richard_int._27.09.24.pdf"); // Cambia esta ruta según el origen
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Paciente_Alonso_Richard_int._27.09.24.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <div className="container px-6 py-4 max-w-[720px]">
        <div className="space-y-4">
          <p>
            El pasado 19 de abril de 2024, cerca de las 6 de la mañana,{" "}
            <strong>
              mi papá, Richard Alonso Godoy, de 46 años, iba camino a su trabajo cuando{" "}
              <span className="bg-yellow-300">
                fue atropellado por un patrullero de la policía que circulaba sin sirena y en
                contramano a muy altas velocidades
              </span>
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
        <img src={MiPapaRichard} className="mt-4 rounded shadow-md" />
        <button
          onClick={handleShow}
          className="bg-red-600 w-full my-6 py-2 text-white font-bold rounded text-lg flex justify-center items-center shadow-md"
        >
          Donar <FaHeart className="ml-2" />
        </button>
        <div className="space-y-4 pt-6">
          <h2 className="font-['Caveat'] text-5xl">El accidente</h2>
          <p>En los medios:</p>
          <div className="flex">
            <img src={Subrayado} alt="" className="w-20 rounded shadow mr-2" />
            <div>
              <p>
                <strong>Diario Subrayado</strong>
              </p>
              <p>
                <a
                  className="text-sky-600 underline"
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
              <p>
                <strong>Diario El Observador</strong>
              </p>
              <p>
                <a
                  className="text-sky-600 underline"
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
          <h2 className="font-['Caveat'] text-5xl">Las secuelas</h2>
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
        <img src={Secuelas} className="mt-4 rounded shadow-md" />
        <div className="space-y-4 mt-6 pb-16">
          <h2 className="font-['Caveat'] text-5xl">La recuperación</h2>
          <p>
            El 19 de septiembre de 2024 nos visitó un médico especialista del{" "}
            <a href="https://www.fleni.org.ar/" className="text-sky-600 underline" target="_blank">
              centro Fleni
            </a>
            . El mismo diseñó un plan de rehabilitación multidisiplinario de 3 meses que va a ayudar
            a mi papá a recuperar calidad de vida.{" "}
            <span className="bg-yellow-300">
              <strong>El costo total del tratamiento es de $71.756.170 de pesos argentinos</strong>
            </span>
            .
          </p>
          <p>
            Es una cifra que está muy por encima de nuestras posibilidades económicas, pero tengo la
            esperanza de que si logro juntar ese dinero para su tratamiento, la calidad de vida de
            mi papá pueda mejorar considerablemente.
          </p>
          <p
            onClick={downloadPDF}
            className="flex items-center underline text-red-700 cursor-pointer"
          >
            <FaRegFilePdf className="mr-1" /> Descargar Plan de Tratamiento de Fleni
          </p>
        </div>
      </div>
      <div className="flex-no-wrap fixed bottom-0 flex w-full items-center justify-center pb-4 z-10">
        <button
          onClick={handleShow}
          className="bg-sky-600 px-6 py-2 text-white font-bold rounded text-lg flex justify-center items-center shadow-md"
        >
          Donar <FaHeart className="ml-2" />
        </button>
      </div>
      {isVisible && (
        <div className="bg-white/80 backdrop-blur w-full h-full fixed z-20 top-0 left-0 overflow-y-auto">
          <div className="container h-full p-4 text-sm flex flex-col justify-center gap-6 relative max-w-[720px]">
            <div
              onClick={handleClose}
              className="bg-black text-white cursor-pointer text-center absolute top-4 right-4 px-2 pt-1 pb-1 opacity-50 rounded"
            >
              Volver
            </div>
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
                href="https://link.mercadopago.com.ar/donacionesrichard"
                target="_blank"
                className="bg-[#009ee3] border border-black/20 px-6 py-2 text-white font-bold rounded text-lg flex justify-center items-center shadow-md"
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
                  <strong>Número de cuenta:</strong> 11059473900001
                </p>
                <p>
                  <strong>Banco:</strong> Banco República (BROU)
                </p>
                <p>
                  <strong>Maria Agustina Alonso Kornicki</strong>
                </p>
              </div>
              <a
                href="https://donafacil.uy/historia/un-camino-de-esperanza-para-richard-ayudemos-a-su-rehabilitacion-20241016155403"
                className="bg-[#ff7db2] border border-black/20 px-6 py-2 text-white font-bold rounded text-lg flex justify-center items-center shadow-md"
              >
                Donar con DonaFacil <FaHeart className="ml-2" />
              </a>
            </div>
            <div>
              <h2 className="text-xl font-bold flex items-center">
                <span class="fi fi-eu mr-2 rounded-sm shadow" /> Donaciones internacionales
              </h2>
              <div className="px-3 py-2 my-4 bg-white text-base shadow">
                <strong>PayPal:</strong>{" "}
                <a
                  href="https://paypal.me/mipaparichard"
                  target="_blank"
                  className="text-sky-600 underline"
                >
                  @mipaparichard
                </a>
              </div>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=CHJAGQ9WULQ44"
                className="bg-[#ffc43b] border border-black/20 px-6 py-2 font-bold rounded text-lg flex justify-center items-center shadow-md"
              >
                Donar con PayPal <FaHeart className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
