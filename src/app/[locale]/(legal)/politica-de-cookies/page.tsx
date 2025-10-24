import React from "react"

export default function CookiesPolicy() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-20 prose dark:prose-invert">
            <h1>Política de Cookies</h1>

            <p>
                Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y analizar el comportamiento de los usuarios.
            </p>

            <h2>¿Qué son las cookies?</h2>
            <p>
                Las cookies son pequeños archivos de texto que se almacenan en su navegador y permiten recordar preferencias y personalizar la experiencia.
            </p>

            <h2>Cookies que utilizamos</h2>
            <ul>
                <li>
                    <strong>Analíticas:</strong> Google Analytics, para medir patrones de uso y mejorar la web.
                </li>
                <li>
                    <strong>Funcionales:</strong> Permiten recordar sus preferencias de idioma o configuración.
                </li>
            </ul>

            <h2>Consentimiento</h2>
            <p>
                Al continuar navegando, acepta el uso de cookies. Puede gestionar su consentimiento mediante nuestro banner o ajustando la configuración de su navegador.
            </p>

            <h2>Más información</h2>
            <p>
                Para más detalles sobre cómo tratamos sus datos personales, consulte nuestra <a href="/politica-de-privacidad">Política de Privacidad</a>.
            </p>
        </main>
    )
}
