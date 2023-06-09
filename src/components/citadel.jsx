import citadel from '../assets/spritesheets/citadel.png'
import { citadel as citadelData } from '../assets/spritesheets/data.json'
import AnimatedCanvas from './animated-canvas'

export default function Citadel() {
  return (
    <section
      id="citadel"
      className="container mt-32 flex scroll-mt-24 flex-col items-stretch justify-center gap-16 sm:mt-64 sm:scroll-mt-4"
    >
      <h3 className="text-md uppercase text-violet-400 sm:text-lg md:text-xl">
        The maesters of Citadel sent ravens
      </h3>
      <AnimatedCanvas
        src={citadel}
        {...citadelData}
        className="aspect-[10/3]"
      />
      <div>
        <ul className="divide-y-2 divide-primary-800">
          {quotes.map(({ quote, author }, index) => (
            <li key={index} className="py-8">
              <p>
                <span className="text-primary-600">&quot;</span>
                {quote}
                <span className="text-primary-600">&quot;</span>
              </p>
              <p className="text-primary-400">-- {author}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const quotes = [
  {
    quote:
      'He knowns how to exit Vim. He told me that shuting down the computer is best way to do it.',
    author: "Maester Aemon of the Night's Watch",
  },
  {
    quote:
      'The knights from Noble Houses gathers to teach him how to write Front-end code in years. Then he is ready for his duty.',
    author: 'Maester Harmune of Eastwatch-by-the-sea',
  },
  {
    quote: 'He learns things quickly. He always want to be a better developer.',
    author: "Grand Maester Pycelle of King's Landing",
  },
  {
    quote:
      'The knowledge of Web Development is enormous. But he is trying to up to date with the cutting-edge technology.',
    author: "Maester Samwell of the Night's Watch",
  },
  {
    quote:
      "It's never too late to start something new. His life hasn't end and he still keeps going!",
    author: 'Maester Yandel of Citadel',
  },
  {
    quote:
      'Bran the Builder had built the Wall thousand years ago. And now this young King builds the apps.',
    author: 'Maester Luwin of Winterfell',
  },
]
