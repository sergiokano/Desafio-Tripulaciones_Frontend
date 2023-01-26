import React, { useState } from "react";
import { Modal } from "antd";

const ModalComponent = ({ visible, setVisible }) => {
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Modal
        title="Política de privacidad de datos"
        open={visible}
        onCancel={handleCancel}
        okText="Confirmar"
        cancelText="Salir"

      >
        
<p className="font-bold text-[14px]">Fecha última actualización: 18/01/2023</p>
<p className="font-neutral text-[12px] mt-4">
De conformidad con el Reglamento (UE) 2016/679, del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (Reglamento General de Protección de Datos - RGPD), (XXEMPRESAXX), se informa a los usuarios de la aplicación _______________________ (en adelante, la Aplicación), acerca del tratamiento de los datos personales, que ellos voluntariamente hayan facilitado durante el proceso de registro, acceso y utilización del servicio.
</p>
<p className="font-bold text-[14px] mt-4">
1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO.</p>
<p className="font-neutral text-[12px]">
XXXEMPRESAXXX, con CIF/NIF nº: ________________ y domicilio a efectos de notificaciones en:
________________________________________ e inscrita en el Registro Mercantil de_________________ Tomo _________,
Folio ___________, Sección ª, Hoja _______, inscripción ª (en adelante, el Responsable del Tratamiento), es la entidad
responsable del tratamiento de los datos facilitados por los clientes de la Aplicación (en adelante, el/los Usuario/s).
</p>
<p className="font-bold text-[14px] mt-4">

2. FINALIDAD DEL TRATAMIENTO DE DATOS.
</p>
<p className="font-neutral text-[12px]">
Para proceder al registro, acceso y posterior uso de la Aplicación, el Usuario deberá facilitar -de forma voluntaria-, datos de carácter personal (esencialmente, identificativos y de contacto), los cuales serán incorporados a soportes automatizados titularidad de XXXEMPRESAXXX
La recogida, almacenamiento, modificación, estructuración y en su caso, eliminación, de los datos proporcionados por los Usuarios, constituirán operaciones de tratamiento llevadas a cabo por el Responsable, con la finalidad de garantizar el correcto funcionamiento de la Aplicación, mantener la relación de prestación de servicios y/o comercial con el Usuario, y para la gestión, administración, información, prestación y mejora del servicio.
Los datos personales facilitados por el Usuario -especialmente, el correo electrónico o e-mail- podrán emplearse también para remitir boletines (newsletters), así como comunicaciones comerciales de promociones y/o publicidad de la Aplicación, siempre y cuando, el Usuario haya prestado previamente su consentimiento expreso para la recepción de estas comunicaciones vía electrónica.
</p>


<p className="font-bold text-[14px] mt-4">
3. LEGITIMACIÓN.
</p>
<p className="font-neutral text-[12px]">
El tratamiento de los datos del Usuario, se realiza con las siguientes bases jurídicas que legitiman el mismo:
•	La solicitud de información y/o la contratación de los servicios de la Aplicación, cuyos términos y condiciones se pondrán a disposición del Usuario en todo caso, con carácter previo, para su expresa aceptación.
•	El consentimiento libre, específico, informado e inequívoco del Usuario, poniendo a su disposición la presente política de privacidad, que deberá aceptar mediante una declaración o una clara acción afirmativa, como el marcado de una casilla dispuesta al efecto.
En caso de que el Usuario no facilite a XXXEMPRESAXXX sus datos, o lo haga de forma errónea o incompleta, no será posible proceder al uso de la Aplicación.
</p>
<p className="font-bold text-[14px] mt-4">

4. CONSERVACIÓN DE LOS DATOS PERSONALES.
</p>
<p className="font-neutral text-[12px]">
Los datos personales proporcionados por el Usuario, se conservarán en los sistemas y bases de datos del Responsable del Tratamiento, mientras aquél continúe haciendo uso de la Aplicación, y siempre que no solicite su supresión.
Con el objetivo de depurar las posibles responsabilidades derivadas del tratamiento, los datos se conservarán por un período mínimo de cinco años.
</p>
<p className="font-bold text-[14px] mt-4">
5. DESTINATARIOS.
</p>
<p className="font-neutral text-[12px]">
Los datos no se comunicarán a ningún tercero ajeno a XXXEMPRESAXXX, salvo obligación legal o en cualquier caso, previa solicitud del consentimiento del Usuario.
De otra parte, XXXEMPRESAXXX podrá dar acceso o transmitir los datos personales facilitados por el Usuario, a terceros proveedores de servicios, con los que haya suscrito acuerdos de encargo de tratamiento de datos, y que únicamente accedan a dicha información para prestar un servicio en favor y por cuenta del Responsable.
</p>
<p className="font-bold text-[14px] mt-4">
6. RETENCIÓN DE DATOS.
</p>
<p className="font-neutral text-[12px]">
XXXEMPRESAXXX, informa al Usuario de que, como prestador de servicio de alojamiento de datos y en virtud de lo establecido en la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), retiene por un período máximo de 12 meses la información imprescindible para identificar el origen de los datos alojados y el momento en que se inició la prestación del servicio.
La retención de estos datos no afecta al secreto de las comunicaciones y sólo podrán ser utilizados en el marco de una investigación criminal o para la salvaguardia de la seguridad pública, poniéndose a disposición de los jueces y/o tribunales o del Ministerio que así los requiera.
La comunicación de datos a las Fuerzas y Cuerpos de Seguridad del Estado, se hará en virtud de lo dispuesto por la normativa sobre protección de datos personales, y bajo el máximo respeto a la misma.
</p>
<p className="font-bold text-[14px] mt-4">
7. PROTECCIÓN DE LA INFORMACIÓN ALOJADA.
</p>
<p className="font-neutral text-[12px]">
El Responsable del Tratamiento, adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos.
Si bien el Responsable, realiza copias de seguridad de los contenidos alojados en sus servidores, sin embargo no se responsabiliza de la pérdida o el borrado accidental de los datos por parte de los Usuarios. De igual manera, no garantiza la reposición total de los datos borrados por los Usuarios, ya que los citados datos podrían haber sido suprimidos y/o modificados durante el periodo de tiempo transcurrido desde la última copia de seguridad.
Los servicios facilitados o prestados a través de la Aplicación, excepto los servicios específicos de backup, no incluyen la reposición de los contenidos conservados en las copias de seguridad realizadas por el Responsable del Tratamiento, cuando esta pérdida sea imputable al usuario; en este caso, se determinará una tarifa acorde a la complejidad y volumen de la recuperación, siempre previa aceptación del usuario. La reposición de datos borrados sólo está incluida en el precio del servicio cuando la pérdida del contenido sea debida a causas atribuibles al Responsable.
</p>
<p className="font-bold text-[14px] mt-4">
8. EJERCICIO DE DERECHOS.
</p>
<p className="font-neutral text-[12px]">
XXXEMPRESAXXX, Se informa al Usuario de que le asisten los derechos de acceso, rectificación, limitación, supresión, oposición y portabilidad, los cuales podrá ejercitar mediante petición dirigida al correo electrónico: _____________________________
Asimismo, el Usuario tiene derecho a revocar el consentimiento inicialmente prestado, y a interponer reclamaciones de derechos frente a la Agencia Española de Protección de Datos (AEPD).
</p>
<p className="font-bold text-[14px] mt-4">
9. COMUNICACIONES COMERCIALES POR VÍA ELECTRÓNICA.
</p>
<p className="font-neutral text-[12px]">
En aplicación de la LSSI (Ley de Servicios de la Sociedad de la Información), XXXEMPRESAXXX, no enviará comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.
En el caso de usuarios con los que exista una relación contractual, jurídica o de servicios previa, el Responsable del Tratamiento, sí está autorizado al envío de comunicaciones comerciales referentes a productos o servicios del Responsable que sean similares a los que inicialmente fueron objeto de contratación con el cliente.
</p>
      </Modal>
    </>
  );
};

export default ModalComponent;
