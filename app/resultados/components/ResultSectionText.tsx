import React from "react";

const ResultSectionText: React.FC = () => {
    const practices = [
        "Disminuir la cantidad de horas que dura un curso o programa en educación financiera para así reducir la deserción e incentivar la participación de las beneficiarias.",
        "Adaptar los materiales, herramientas y recursos que se dicten para entregar programas de educación financiera dirigidos a mujeres al nivel de conocimiento en educación financiera de las participantes para así generar no sólo adherencia a los procesos sino garantizar la apropiación de los conocimientos impartidos.",
        "Diferenciación de las metodologías para entregar educación financiera en función de la actividad económica que desempeña la persona, nivel de conocimientos financieros y uso de instrumentos, medios, productos o servicios financieros.",
        "Adaptación de contenidos y metodologías de los programas de acuerdo a los deseos, necesidades y expectativas de las mujeres en diferentes municipios.",
        "Dar opciones para el cuidado de los hijos menores de edad a las mujeres vulnerables que reciben o quieren recibir programas de educación financiera de manera presencial, con el fin de no sólo derribar las barreras de las mujeres para participar en estos espacios sino de reducir las tasas de deserción de estos programas.",
        "Entrenar o sensibilizar previamente en género al personal de las entidades prestadores de servicios financieros que diseña e imparte programas de educación financiera dirigidos a mujeres vulnerables.",
        "Acompañar la entrega de programas de educación financiera dirigidos a mujeres vulnerables con seguimiento y acompañamiento personalizado que permita despejar dudas respecto al uso de la herramienta, contenidos, temas de práctica y demás para así garantizar la adherencia a este tipo de programas por vía virtual.",
        "Adaptar los materiales, lenguaje y mensajes que se usan para impartir programas de educación financiera a las características particulares del público objetivo.",
        "Incorporar la figura de los facilitadores, embajadores o multiplicadores a los programas de educación financiera que se desarrollan con poblaciones rurales, quienes son líderes, lideresas sociales o miembros de las mismas comunidades entrenados en la temática que replican sus conocimientos en las poblaciones.",
        "Usar o entregar materiales personalizados durante los talleres o procesos de formación en educación financiera como cartillas con los contenidos del curso que las mujeres puedan convertir en una especie de diario financiero en donde lleven las cuentas de lo que ganan y gastan en el hogar versus lo que ganan y gastan en sus negocios.",
        "Usar WhatsApp como medio de conexión permanente con las beneficiarias de los programas de educación financiera incluso después de terminados los procesos formativos, a fin de reforzar conceptos o incentivar a las mujeres a tomar contenidos complementarios que puedan ser de interés para ellas.",
        "Incorporar acciones, estrategias y enfoque específicos que permitan también trabajar con hombres.",
        "Acercar la oferta de educación financiera a las poblaciones rurales, con limitaciones de desplazamiento y conectividad a través de herramientas como unidades móviles de educación financiera dotados de dispositivos tecnológicos que puedan usar las personas y guiados por personal experto en la materia.",
        "Adaptar el lenguaje del programa a las necesidades, expectativas, características e incluso temores de la población objetivo (en cuanto al nombre de los programas poder reemplazar educación financiera por manejo exitoso del dinero u manejo estratégico de ingresos y gastos, entre otros que generen menos temor, rechazo y autoexclusión).",
        "Evaluar permanentemente el resultado de los programas e incorporar principios, estrategias y herramientas desde las ciencias del comportamiento.",
        "Enfocar esfuerzos en las áreas rurales dado que no sólo hay mayor apertura a este tipo de esfuerzos en educación financiera sino que las áreas urbanas están saturadas de este tipo de iniciativas, además de que las personas han perdido el interés debido no sólo a esto sino también a los enfoques pedagógicos usados por las entidades financieras de manera tradicional.",
        "Desarrollar pruebas piloto de los programas de educación financiera antes de lanzarlos a las poblaciones objetivo, lo cual incluye medir el nivel de interés en los contenidos, la pertinencia de los materiales pedagógicos usados, entre otros aspectos relevantes.",
        "Ofrecer otros cursos o programas de formación que sean de interés para las beneficiarias como por ejemplo cooperativismo y emprendimiento. Cada curso de manera separada.",
        "Incorporar incentivos para motivar a los participantes a terminar el programa que estén alineados con sus necesidades personales o de negocio, como por ejemplo curso de fotografía para el negocio, conexión con programas enfocados en el emprendimiento u otros que puedan ser de gran interés y/o necesidad para las participantes.",
        "Considerar, reconocer y aprovechar el valor cultural y social que tiene la presencialidad cuando se trabaja con comunidades rurales y concretamente con comunidades rurales del departamento de Antioquia.",
        "Realizar eventos de graduación con el fin de reconocer el esfuerzo de las mujeres desarrollando los procesos de formación e incentivarlas a que continúen formándose en temas que son de utilidad tanto a nivel individual como empresarial."
    ];

    return (
        <section className="p-4">
            <div className="mt-0 mx-4 mb-0 text-justify leading-relaxed space-y-5">
                <p>Acá encontrará un listado con algunas de las buenas prácticas utilizadas por proveedores de servicios financieros en programas de educación financiera con enfoque de género y diferencial.</p>
                <h2 className="bg-[#102E6A] p-[4px] mt-[0] mb-[30px] mt-[30px] text-1xl text-center text-[white] font-bold ">Buenas prácticas para el desarrollo de programas de educación financiera con enfoque de género</h2>
                <ul className="list-none list-inside space-y-2 text-justify ">
                    {practices.map((practice, index) => (
                        <li className="bg-[#d9d9d9] p-2" key={index}>{practice}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ResultSectionText;
