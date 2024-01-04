import React from "react";
import { Link } from "react-scroll";
import rocket from "../assets/rocket.svg";
import pencil from "../assets/pencil.svg";
import maintenance from "../assets/maintenance.svg";
import painting from "../assets/painting.svg";

const Offerts = () => {
  const service = [
    {
      logo: `${maintenance}`,
      title: "REPARACIÓN DE EQUIPOS",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
    {
      logo: `${painting}`,
      title: "CORTE CONFORMADO SOLDADURA Y PINTURA",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
    {
      logo: `${rocket}`,
      title: "ASESORÍAS Y SERVICIOS TÉCNICOS",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
    {
      logo: `${pencil}`,
      title: "PROYECCIÓN Y DISEÑO",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row items-top justify-around gap-20 m-4">
        {service.map(({ logo, title, description, link }) => (
          <Link
            to={link}
            spy={true}
            offset={-100}
            key={link}
            className="w-1/4 text-center rounded-xl flex flex-col items-center justify-around"
          >
            <div className="mt-4">
              <img src={logo} alt="" width={60} className="inline" />
              <h3 className="text-defaultBlue font-bold text-lg">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Offerts;
