// model.js

/**
 * Función para obtener el signo zodiacal según la fecha de nacimiento.
 * @param {string} fechaStr - Fecha en formato DD-MM-AAAA.
 * @returns {string} - Nombre del signo zodiacal.
 */
function obtenerSignoZodiacal(fechaStr) {
    const [dia, mes, anio] = fechaStr.split('-').map(Number);

    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Acuario";
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Piscis";
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Tauro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Géminis";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Cáncer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leo";
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgo";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "Escorpio";
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "Sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "Capricornio";

    return "Desconocido";
}

/**
 * Función para obtener el horóscopo diario de un signo zodiacal.
 * @param {string} signo - Nombre del signo zodiacal.
 * @returns {string} - Texto del horóscopo con un emoji alusivo.
 */
function obtenerHoroscopo(signo) {
    const horoscopos = {
        Aries: "♈ Aries 🔥<br><br>Seguramente la comunicación con los demás será casi imposible en este día. Dedique más atención al modo de expresar sus ideas y todo mejorará.<br><br><b>Amor:</b> Procure reconciliarse con su alma gemela si es necesario. Piense bien que es lo que quiere y luego vea si le es conveniente terminar esa relación de tantos años.<br><br><b>Riqueza:</b> Hoy su socio podría enfrentarlo a una situación que solo la resolverá con diplomacia. Vaya preparado, de lo contrario, podría salir perjudicado.<br><br><b>Bienestar:</b> Entienda que hacer un viaje de corta distancia a ese lugar que usted quiere, le sentará muy bien a su vida. Sepa que regresará renovado al máximo.",
        
        Tauro: "♉️ Tauro 🐂 <br><br>Deberá aprovechar este período profesional para cosechar todo lo que sembró hace tiempo para su vida. Relájese y disfrute de las ganancias de los proyectos.<br><br><strong>Amor:</strong> Explore sin miedo sus deseos, objetivos y fantasías con su alma gemela. Haga lo posible para tener un contacto más cercano en la intimidad.<br><br><strong>Riqueza:</strong> Aproveche las nuevas posibilidades de ganar dinero que otros pasaron por alto. Anímese y ponga todo en cada uno de los proyectos que emprenda.<br><br><strong>Bienestar:</strong> En cuanto pueda, relaje las tensiones con alguna actividad. Trate de administrar toda su energía para poder estar integro y vital durante esta jornada.",

        Géminis: "♊️ Géminis 💬 <br><br>Entienda que antes de establecer cualquiera de los objetivos que tiene para su futuro, debe determinar las pautas concretas sabiendo con claridad los contras.<br><br><strong>Amor:</strong> Comparta más tiempo con la persona que ama. Entienda que ambos necesitan recuperar la pasión, traten de explorar más momentos en la intimidad.<br><br><strong>Riqueza:</strong> Si pretende cerrar ese negocio que hace tiempo no puede concretarlo, en estos momentos lo mejor será que se asocie a esa persona influyente.<br><br><strong>Bienestar:</strong> Deje de ser tan posesivo y querer siempre solucionar todo usted. Entienda que si lo hace, su vida empezará a ser más placentera y distendida.",

        Cáncer: "♋️ Cáncer 🦀 <br><br>Hoy se despertará con más valentía que la habitual. Exprese las ideas con franqueza, pero deberá cuidarse de no herir los sentimientos ajenos.<br><br><strong>Amor:</strong> En este día, no se pierda en sus propios temores. Arriésguese por completo al amor, y así encontrará la felicidad en esa persona que le quita el sueño.<br><br><strong>Riqueza:</strong> Prepárese, ya que algunos asuntos burocráticos pendientes podrían amargarle el día. Sepa que debe enfrentarlos con cautela y con mucha precisión.<br><br><strong>Bienestar:</strong> No se quede encerrado en su hogar, sea más aventurero. Si se siente vacío y aburrido, trate de buscar alguna compañía y salga a disfrutar de la noche.",

        Leo: "♌️ Leo 🦁 <br><br>Hoy será una jornada donde podrá exponer su vitalidad e inteligencia. Ponga en marcha todos los proyectos postergados y en poco tiempo tendrá ganancias.<br><br><strong>Amor:</strong> Etapa donde estará tan encantador que podrá convencer a su alma gemela en lo que desee. Aproveche este momento, para pedirle lo que verdaderamente necesita.<br><br><strong>Riqueza:</strong> Después de tantos problemas, podrá afilar su ingenio laboral al tomar contacto con nuevas experiencias creativas. Intente explotar al máximo su capacidad creativa.<br><br><strong>Bienestar:</strong> Préstele una debida atención a su sistema nervioso. Muchas de las situaciones que transite en este día, podrían desequilibrarlo anímicamente y físicamente.",

        Virgo: "♍️ Virgo 🌾 <br><br>Intente observar la gente que lo rodea y de esta forma, comprobará que usted tiene las mismas oportunidades que los demás. Deje de desvalorizarse sin causa.<br><br><strong>Amor:</strong> No actúe indiferente con su pareja. Comparta sus alegrías y anhelos con ella, en poco tiempo verá que el vínculo que tienen mejorará rápidamente.<br><br><strong>Riqueza:</strong> Período favorable para terminar con los temas legales y burocráticos. Evite dar tantas vueltas y finalice los trámites que tiene pendientes hace meses.<br><br><strong>Bienestar:</strong> Esta mañana, antes de ingresar a su trabajo intente distraerse mirando algunas vidrieras o tomando un café en algún bar junto a un compañero de trabajo.",

        Libra: "♎️ Libra ⚖️ <br><br>Sepa que necesitará tranquilizarse y estar preparado para lo que se acerque. En esta jornada, sentirá que algo nuevo y bueno está por suceder.<br><br><strong>Amor:</strong> Compórtese con humildad y reconozca sus errores, de lo contrario, su pareja se alejará. Entienda que si se ha equivocado, tiene que admitir la culpa.<br><br><strong>Riqueza:</strong> Prepárese, ya que tendrá que aprovechar esta nueva oportunidad laboral que le brindarán y así podrá demostrar sus conocimientos en este día.<br><br><strong>Bienestar:</strong> Deberá comenzar un tratamiento terapéutico, donde lo ayudará a decidir mejor qué hacer con su vida. Comprenda que será muy positivo para usted.",

        Escorpio: "♏️ Escorpio 🦂 <br><br>Gracias a la presencia lunar, podrá terminar todo lo que se propuso. Sepa que toda su energía vital se desplegará en todas las actividades que tenga. <br><br><strong>Amor:</strong> En el momento que busque al amor, evite idealizar a las parejas. Sepa que podría sentirse decepcionado si no le brindan lo que espera. Madure y recuerde que cada relación tiene sus altibajos. <br><br><strong>Riqueza:</strong> Esté muy atento, ya que podría tener problemas con los contratos y las transacciones comerciales que tenga que realizar durante esta jornada. Analice bien cada detalle antes de tomar decisiones. <br><br><strong>Bienestar:</strong> Salga a pasear y entre a esa librería que tanto le gusta para comprarse un buen libro. Sepa que debe recuperar el hábito de la lectura que tenía abandonado. Este hábito le ayudará a relajarse y a reponer energías.",

        Sagitario: "♐️ Sagitario 🏹 <br><br>En esta jornada intente estar preparado, ya saldrán a la luz aquellos cuestionamientos que permanecieron ocultos en su interior por mucho tiempo. Es el momento de enfrentar sus dudas y darles solución. <br><br><strong>Amor:</strong> Sepa que las buenas energías repercutirán positivamente en la pareja y hará que usted se sienta maravillosamente. Demuéstreselo a su alma gemela y comparta esos momentos de armonía juntos. <br><br><strong>Riqueza:</strong> Organícese, ya que su desempeño laboral podría depender de la forma en que planifique los pasos. Sea organizado y todo marchará por el camino correcto. El orden será clave para su éxito. <br><br><strong>Bienestar:</strong> Procure disminuir su irritabilidad y rigidez al relacionarse con su círculo íntimo. Sepa que si no lo hace, en muy poco tiempo se quedará solo. Recuerde que la flexibilidad en las relaciones personales es fundamental.",

        Capricornio: "♑️ Capricornio 🏔️ <br><br>Evite debilitarse, ya que todo va a salir como tenía planeado. Aunque la lentitud a usted lo exaspere, sepa que tendrá que ser paciente para alcanzar el éxito. La perseverancia será su mejor aliada. <br><br><strong>Amor:</strong> Intente probar con un diálogo pacífico, ya que hacerlo de esta forma le producirá un cambio importante en la relación que tiene con su alma gemela. La comunicación será clave para fortalecer su vínculo. <br><br><strong>Riqueza:</strong> Evalúe si está en condiciones de cumplir a tiempo con lo que le exigen a diario en su trabajo, así podrá alcanzar el éxito económico rápido. Organícese y priorice lo más importante para avanzar. <br><br><strong>Bienestar:</strong> Realice una salida nocturna con sus amigos después de la jornada laboral. Intente salir a tomar algo o a cenar en ese bar que tanto le gusta. Disfrutar de su tiempo libre le ayudará a relajarse y recargar energías.",
        Acuario: "♒️ Acuario 🌊 <br><br>Aproveche que sus poderes perceptivos estarán muy afinados. Utilícelos para ayudar a alguien que atraviesa un mal momento y necesita de su apoyo. Su intuición será su mejor guía hoy. <br><br><strong>Amor:</strong> Evite que las obligaciones laborales le impidan compartir una salida con su alma gemela. Cuando finalice la jornada laboral, intente llegar temprano a su hogar y dedicar tiempo de calidad juntos. <br><br><strong>Riqueza:</strong> Jornada óptima para tramitar un préstamo para esa inversión que desea hacer en su casa. Empiece a buscar presupuestos con los materiales que necesita. Planificar con tiempo le garantizará el éxito de su inversión. <br><br><strong>Bienestar:</strong> Esta noche, lo invitarán a una cena muy especial donde se encontrará con gente que hace tiempo no ve. No dude y postergue los compromisos. Aproveche esta ocasión para reconectar y disfrutar de buena compañía.",

        Piscis:  "♓️ Piscis 🐟 <br><br>Momento para reconsiderar muchos aspectos de su vida que lo atormentan. No postergue por más tiempo una decisión que determinará su futuro cercano. La reflexión será clave para avanzar con claridad. <br><br><strong>Amor:</strong> Serán días donde las relaciones sociales le demandarán mucha más dedicación de lo habitual. Prepárese, ya que tendrá demasiadas reuniones para asistir. Aproveche para fortalecer vínculos importantes. <br><br><strong>Riqueza:</strong> Sepa que debe leer detenidamente ese contrato que debe firmar, de lo contrario, podría salir perjudicado sin entender el motivo. No sea arrebatado, la cautela será su mejor aliada. <br><br><strong>Bienestar:</strong> Intente ejercitar de manera prudente. En caso de haber comenzado el gimnasio en estos días, sería bueno que no pretenda exigir a su físico más de lo que puede. Escuche a su cuerpo y avance con moderación.",

        Desconocido: "No pudimos determinar tu signo 😕 ¡Sorry!"
    };

    return horoscopos[signo] || horoscopos["Desconocido"];
}
