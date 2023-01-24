export const subCategoriesDetailSwitch = (category, subCategory) => {
    switch (true) {
        case category === "1" && subCategory === "01":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="03">
                        Aviso por observación de plagas y/o enfermedades
                    </option>
                    <option value="04">Árbol seco o muerto</option>
                    <option value="05">Árbol tapa farolas</option>
                    <option value="07">
                        Árbol / rama con peligro de caída
                    </option>
                    <option value="08">Caída de árbol</option>
                    <option value="15">Poda de Mantenimiento</option>
                    <option value="16">Raices que levantan la acera</option>
                    <option value="17">Recogida fruto arbolado viario</option>
                    <option value="18">
                        Reposición por falta de árbol (alcorque vacío)
                    </option>
                    <option value="19">Retirada de restos vegetales</option>
                </>
            );
        case category === "1" && subCategory === "04":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Bancos: limpieza de pintadas</option>
                    <option value="02">Bancos: reparación</option>
                    <option value="03">Bancos: repaso y pintura</option>
                    <option value="05">
                        Deficiencias en señalización (zona juegos, pipicanes,
                        etc...)
                    </option>
                    <option value="08">
                        Juego infantil / juego biosaludable: reparación
                    </option>
                    <option value="10">
                        Reparación y/o sustitución de suelo de seguridad
                    </option>
                    <option value="11">
                        Reparación / reposición de vallas, pérgolas, bolardos,
                        etc...
                    </option>
                    <option value="12">
                        Reparación, relleno o sustitución de zonas de arena
                    </option>
                </>
            );
        case category === "1" && subCategory === "05":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Deficiencias drenaje / encharcamientos
                    </option>
                    <option value="03">
                        Pipi-canes y/o zonas de esparcimiento para perros
                        (acondicionamiento o construcción)
                    </option>
                    <option value="04">
                        Reparación de vallas, pérgolas, etc...
                    </option>
                    <option value="06">
                        Reparación de viales / superficies con pavimentos
                        cerámicos u hormigón
                    </option>
                    <option value="07">
                        Reparación muretes / bordillos / rampas / escaleras,
                        etc...
                    </option>
                </>
            );
        case category === "1" && subCategory === "06":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Desvío trayectoria aspersor / difusor
                    </option>
                    <option value="02">
                        Encharcamiento / Mal funcionamiento red de riego
                    </option>
                    <option value="04">
                        Falta / rotura tapa de arqueta de riego
                    </option>
                    <option value="06">
                        Incidencias en canalizaciones de riego
                    </option>
                </>
            );
        case category === "1" && subCategory === "07":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="02">Alcorque roto o vacio en jardín</option>
                    <option value="03">
                        Aviso por observación de plagas y/o enfermedades
                    </option>
                    <option value="04">Árbol seco o muerto</option>
                    <option value="06">Caída de árbol o rama</option>
                    <option value="07">
                        Colocación, reparación o retirada de tutores
                    </option>
                    <option value="09">
                        Labores mantenimiento suelo de labor
                    </option>
                    <option value="10">Malas hierbas en jardín</option>
                    <option value="11">Poda de arbolado en jardín</option>
                    <option value="14">Reposición de vegetación</option>
                    <option value="16">Retirada restos vegetales</option>
                    <option value="18">
                        Siega de cesped y recorte de orillas
                    </option>
                </>
            );
        case category === "1" && subCategory === "10":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Ornamentales Limpieza de Fuentes Ornamentales
                    </option>
                </>
            );
        case category === "1" && subCategory === "11":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Instalación de nueva señalización
                    </option>
                    <option value="02">
                        Instalación de nuevas zonas de juegos
                    </option>
                    <option value="03">
                        Instalación de nuevas zonas de perros
                    </option>
                    <option value="04">
                        Instalación de nuevo mobiliario de jardín
                    </option>
                    <option value="05">Instalación de nuevos jardines</option>
                </>
            );
        case category === "2" && subCategory === "01":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Semáforo no funciona</option>
                    <option value="02">Semáforo girado</option>
                    <option value="04">Semáforo roto</option>
                    <option value="05">Semáforo con pintadas</option>
                    <option value="07">Pulsador de peatones dañado</option>
                    <option value="09">
                        Avisador acústico para invidentes averiado
                    </option>
                    <option value="12">
                        Solicitud de instalación de semáforo para invidentes
                    </option>
                </>
            );
        case category === "2" && subCategory === "02":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Armario con puerta abierta</option>
                    <option value="02">Armario con abolladuras</option>
                    <option value="03">Armario inclinado</option>
                    <option value="04">Armario pintado</option>
                </>
            );
        case category === "2" && subCategory === "03":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="02">
                        Panel con fallo de funcionamiento
                    </option>
                </>
            );
        case category === "2" && subCategory === "04":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Arqueta con desperfectos</option>
                    <option value="04">Canalización en calzada hundida</option>
                    <option value="05">
                        Canalización en calzada agrietada
                    </option>
                </>
            );
        case category === "2" && subCategory === "05":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Señal derribada</option>
                    <option value="02">Señal desaparecida</option>
                    <option value="03">Barandilla colisionada</option>
                    <option value="04">Barandilla desaparecida</option>
                    <option value="05">Bolardo colisionado</option>
                    <option value="06">Bolardo desaparecido</option>
                    <option value="07">Aparcabicis colisionado</option>
                    <option value="10">Placa de calle deteriorada</option>
                    <option value="11">
                        Elemento de balizamiento colisionado
                    </option>
                    <option value="12">Espejo derribado o deteriorado</option>
                </>
            );
        case category === "2" && subCategory === "06":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Paso de peatones: reponer o reparar
                    </option>
                    <option value="02">
                        Reserva minusválidos: reponer o reparar
                    </option>
                    <option value="03">
                        Carga y descarga: reponer o reparar
                    </option>
                    <option value="04">
                        Otros: reponer (por asfaltado, obras) o reparar
                        (repintar)
                    </option>
                </>
            );
        case category === "2" && subCategory === "07":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Incidencia en máquina expendedora ORA (avería,
                        desperfecto,...)
                    </option>
                    <option value="02">
                        Incidencia en aplicación móvil Telpark
                    </option>
                </>
            );
        case category === "3" && subCategory === "01":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Ratas vistas en vía pública</option>
                </>
            );
        case category === "3" && subCategory === "02":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Cucarachas vistas en vía pública</option>
                </>
            );
        case category === "3" && subCategory === "03":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="02">Pulgas en vía pública</option>
                </>
            );
        case category === "3" && subCategory === "05":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Avisos sobre otro tipo de plagas</option>
                </>
            );
        case category === "4" && subCategory === "01":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Farola o calle apagada o apagado total
                    </option>
                </>
            );
        case category === "4" && subCategory === "02":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Farol o farola con cristal roto o suelto
                    </option>
                    <option value="02">Soporte o farol inclinado o roto</option>
                    <option value="03">Portilla farola abierta</option>
                    <option value="05">
                        Armario o farola sucios o con pintadas
                    </option>
                    <option value="06">
                        Armario o farola rotos, oxidados o deteriorados
                    </option>
                </>
            );
        case category === "4" && subCategory === "03":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Cables o cajas cortados, accesibles o desprendidos
                    </option>
                    <option value="02">Armario abierto o deteriorado</option>
                </>
            );
        case category === "5" && subCategory === "01":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Quemado</option>
                    <option value="02">Roto</option>
                    <option value="04">Sucio o con pintadas</option>
                    <option value="05">Desbordado</option>
                    <option value="06">Entorno sucio o con manchas</option>
                    <option value="07">Instalar baliza</option>
                    <option value="08">Reparar baliza</option>
                    <option value="09">Otros</option>
                </>
            );
        case category === "5" && subCategory === "06":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Solicitud de traslado o retirada</option>
                    <option value="02">Solicitud nuevo contenedor</option>
                </>
            );
        case category === "5" && subCategory === "07":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Suciedad de residuos ligeros</option>
                    <option value="02">Excrementos</option>
                    <option value="03">Frutos</option>
                    <option value="04">Aceites o grasas</option>
                    <option value="05">Baldeo defectuoso o no efectuado</option>
                </>
            );
        case category === "5" && subCategory === "10":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Suciedad de residuos ligeros</option>
                    <option value="02">Excrementos</option>
                    <option value="03">Otros</option>
                </>
            );
        case category === "5" && subCategory === "12":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">
                        Aviso recogida domiciliaria de muebles y enseres
                    </option>
                </>
            );
        case category === "5" && subCategory === "13":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="03">Enseres en acera o calzada</option>
                </>
            );
        case category === "5" && subCategory === "14":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Limpieza pintada</option>
                </>
            );
        case category === "5" && subCategory === "15":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="05">Quemada total</option>
                    <option value="07">Desaparecida</option>
                    <option value="08">Tapa y cuerpo inservible</option>
                    <option value="09">Otros</option>
                </>
            );
        case category === "6" && subCategory === "01":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría específica
                    </option>
                    <option value="01">Sugerencias</option>
                </>
            );
        default:
            return;
    }
};
