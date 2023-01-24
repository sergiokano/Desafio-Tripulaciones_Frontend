export const subCategoriesSwitch = (category) => {
    switch (category) {
        case "1":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría
                    </option>
                    <option value="01">Arbolado viario</option>
                    <option value="04">Juegos y mobiliario en jardín</option>
                    <option value="05">Obra civil en jardín</option>
                    <option value="06">Riego en jardín</option>
                    <option value="07">Vegetación en jardín</option>
                    <option value="10">Limpieza de Fuentes Ornamentales</option>
                    <option value="11">Nuevas instalaciones</option>
                </>
            );
        case "2":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría
                    </option>
                    <option value="01">Semáforos</option>
                    <option value="02">
                        Armarios metálicos de instalaciones de tráfico
                    </option>
                    <option value="03">
                        Paneles de información del tráfico
                    </option>
                    <option value="04">
                        Canalizaciones de instalaciones de tráfico
                    </option>
                    <option value="05">Señalización vertical</option>
                    <option value="06">Señalización horizontal</option>
                    <option value="07">
                        Zonas de aparcamiento regulado (ORA)
                    </option>
                </>
            );
        case "3":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría
                    </option>
                    <option value="01">Avisos sobre ratas</option>
                    <option value="02">Avisos sobre cucaracha</option>
                    <option value="03">Avisos sobre pulgas</option>
                    <option value="05">Avisos sobre otro tipo de plagas</option>
                </>
            );
        case "4":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría
                    </option>
                    <option value="01">Funcionamiento y horario</option>
                    <option value="02">Mobiliario, farolas y armarios</option>
                    <option value="03">Cableado</option>
                </>
            );
        case "5":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría
                    </option>
                    <option value="01">Contenedor Papel y Cartón</option>
                    <option value="06">Nuevo contenedor</option>
                    <option value="07">Limpieza aceras</option>
                    <option value="10">Limpieza jardín</option>
                    <option value="12">
                        Aviso recogida domiciliaria de muebles y enseres
                    </option>
                    <option value="13">Muebles y enseres abandonados</option>
                    <option value="14">Pintadas y Carteles </option>
                    <option value="15">Papeleta</option>
                </>
            );
        case "6":
            return (
                <>
                    <option value="" defaultValue>
                        Elige subcategoría
                    </option>
                    <option value="01">Otro tipo de incidencia</option>
                </>
            );
        default:
            return;
    }
};
