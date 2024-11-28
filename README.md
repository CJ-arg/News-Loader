Sistema de Consulta de Noticias con IA
Un sistema de consulta de noticias en tiempo real que utiliza LangChain para proporcionar información de CNN Español y CBC News. El sistema determina dinámicamente si debe proporcionar información específica de noticias o responder con conocimientos generales relacionados.

Características
Extracción de noticias en tiempo real de CNN Español y CBC News
Sistema de respuesta dinámica usando LangChain
Capacidades de streaming para respuestas en tiempo real
Clasificación inteligente de consultas de usuarios
Almacenamiento vectorial para recuperación eficiente de noticias
Requisitos Previos
Node.js instalado
Gestor de paquetes npm o yarn
Clave API de OpenAI
Instalación
Clonar el repositorio:
git clone <url-del-repositorio>

Copy

Execute

Instalar dependencias:
npm install

Copy

Execute

Configurar variables de entorno: Crear un archivo .env en el directorio raíz y agregar:
OPENAI_API_KEY=tu-clave-api-aqui

Copy

Execute

Uso
Iniciar la aplicación:

npm start

Copy

Execute

Estructura del Proyecto
El sistema sigue este flujo:

El usuario envía una pregunta
El clasificador de preguntas determina el tipo de respuesta
La cadena de Noticias o Conocimientos generales procesa la solicitud
El sistema carga noticias de CNN Español y CBC News
El almacenamiento vectorial gestiona la recuperación de noticias
Se genera y devuelve la respuesta al usuario
Dependencias
@langchain/community: ^0.3.15
@langchain/core: ^0.3.18
@langchain/groq: ^0.1.2
dotenv: ^16.4.5
jsdom: ^25.0.1
langchain: ^0.3.6
Fuentes de Noticias
CNN Español: https://cnnespanol.cnn.com/lite/
CBC News: https://www.cbc.ca/lite/news?sort=latest
Contribuciones
Siéntete libre de enviar problemas y solicitudes de mejora.