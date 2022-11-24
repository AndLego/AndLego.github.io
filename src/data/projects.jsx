const projects = [
  {
    id: 0,
    name: "Jibaro Restaurant",
    live: "https://tiny-custard-3a7cff.netlify.app/",
    repository: "https://github.com/AndLego/jibaron",
    image: "https://i.postimg.cc/k42bzsYv/jibaron.png",
    description:
      "Full stack app using Reactjs, Firebase, Framer motion, css. This projects allows the user to add new items and to maintain all the things over the firestore database",
    descripcionEs:
      "Aplicación Full Stack usando Reactjs, Firebase, Framer motion, css. Este proyecto le permite al usuario agregar nuevos elementos y mantener todas los items en la base de datos de Firestore.",
  },
  {
    id: 1,
    name: "Flip-Rick",
    live: "https://splendid-kataifi-dc6e72.netlify.app/",
    repository: "https://github.com/AndLego/flip-rick",
    image: "https://i.postimg.cc/Kv4trxZc/rick-flip.png",
    description:
      "Using React and Javascript I made this classic card flip game with Rick & Morty characters. Every new game makes a new call to Rick&Morty Api in order to randomize the cards",
    descripcionEs:
      "Usando React y Javascript, hice este clásico juego de cartas con los personajes de Rick & Morty. Cada nuevo juego hace una nueva llamada a Rick&Morty Api para aleatorizar las cartas",
  },
  {
    id: 2,
    name: "Chat-App",
    live: "https://main--friendly-babka-79adc1.netlify.app/",
    repository: "https://github.com/AndLego/chat-app",
    image: "https://i.postimg.cc/J45VHLBD/chat-app.png",
    description:
      "This chat app made for mobile version using socket.io, node.js and React.js. Back-end deployed with Heroku. Choose a channel, nickname and you can start chatting.",
    descripcionEs:
      "Esta aplicación de chat está hecha para la versión móvil usando socket.io, node.js y React.js. Back-end desplegado con Heroku. Elija un canal, un apodo y puede comenzar a chatear.",
  },
  {
    id: 3,
    name: "Weather-App",
    live: "https://extraordinary-hummingbird-bc2e15.netlify.app/",
    repository: "https://github.com/AndLego/weather-app",
    image: "https://i.postimg.cc/2j0RqRj7/weather-app.png",
    description:
      "Made with React.js. Fetching openweathermap.org API. You can search for any city or country. Create a list of places and check on them weather query.",
    descripcionEs:
      "Hecho con React.js. Obteniendo la API de openweathermap.org. Puedes buscar cualquier ciudad o país. Cree una lista de lugares y verifique en ellos la consulta del clima.",
  },
  {
    id: 4,
    name: "Pokemon Wordle",
    live: "https://andlego.github.io/PokemonWordle/",
    repository: "https://github.com/AndLego/PokemonWordle",
    image: "https://i.postimg.cc/0Qg5BgKw/wordle-poke.png",
    description:
      " Based on the famous wordle game, this is pokemon wordle. You can choose the length/difficult at start, and start guessing the pokemon. This was made using just JS and pokemon API.",
    descripcionEs:
      "Basado en el famoso juego de palabras, este es pokemon wordle. Puedes elegir la dificultad al principio y empezar a adivinar el pokemon. Esto se hizo usando solo JS y la API de pokemon.",
  },
  {
    id: 5,
    name: "To-Do-List",
    live: "https://andlego.github.io/react-to-do/",
    repository: "https://github.com/AndLego/react-to-do",
    image: "https://i.postimg.cc/5NzhsHqn/to-do-list.png",
    description:
      " Project created using React and LocalStorage. Used as practice for learning JS frameworks.",
    descripcionEs:
      "Proyecto creado usando React y LocalStorage. Usado como práctica para aprender frameworks JS.",
  },
  {
    id: 6,
    name: "MovieDB",
    live: "https://andlego.github.io/moviesDB/",
    repository: "https://github.com/AndLego/moviesDB",
    image: "https://i.postimg.cc/02DxKkMb/moviesdb.png",
    description:
      "Movie web-app connected to themoviedb API, where you can browse trending movies and tv shows. Also with feature of saving your favorites",
    descripcionEs:
      "Aplicación web de películas conectada a la API themoviedb, donde puede buscar películas y programas de televisión de moda. También con función de guardar tus favoritos",
  },
  {
    id: 7,
    name: "Timer-Pomodoro",
    live: "https://resilient-creponne-64a7fe.netlify.app/",
    repository: "https://github.com/AndLego/TimerWithJS",
    image: "https://i.postimg.cc/hGDRzVTG/timer.png",
    description:
      "Using Vainilla JavaScript i made this Pomodoro, Timer, and Chronometer",
    descripcionEs:
      "Usando Vainilla JavaScript hice este Pomodoro, Timer y Cronometro",
  },
  {
    id: 8,
    name: "GraphQl-Contacts",
    live: "https://main--starlit-naiad-1e19a2.netlify.app/",
    repository: "https://github.com/AndLego/chat-app",
    image: "https://i.postimg.cc/5yTB1tP2/graphql-learn.png",
    description:
      "The objective here was to learn GraphQL, some mongoDB, and how to mix it with React; Here you can add contacts, modify, and delete them. Create an user and enjoy",
    descripcionEs:
      "El objetivo aquí era aprender GraphQL, algo de mongoDB y cómo mezclarlo con React; Aquí puede agregar contactos, modificarlos y eliminarlos. Crea un usuario y disfruta",
  },
  {
    id: 9,
    name: "Space Portfolio",
    live: "https://andlego.github.io/space-portfolio/",
    repository: "https://github.com/AndLego/space-portfolio",
    image: "https://i.postimg.cc/k483RCfn/portfolio2.png",
    description:
      "Exploring Vite and practicing some effects of Framer Motion package this has been a fun project for exploring",
    descripcionEs:
      "Explorando Vite y practicar algunos efectos del paquete Framer Motion, este ha sido un proyecto divertido para aprender",
  },
  {
    id: 10,
    name: "Hit the Bear",
    live: "https://andlego.github.io/bear-animation/",
    repository: "https://github.com/AndLego/bear-animation",
    image: "https://i.postimg.cc/zXKny4DL/hit-the-bear.png",
    description:
      "With this simple and small game i was able to practice and learn about CSS animations, and how to handle variables using CSS",
    descripcionEs:
      "Con este juego simple y pequeño, pude practicar y aprender sobre animaciones CSS y cómo manejar variables usando CSS.",
  },
];

export { projects };
