export const articles = [
  {
    title: "The Rise of Quantum Computing:",
    subtitle: "A Paradigm Shift in Technology",
    body: "Quantum computing, once relegated to the realm of science fiction, is now becoming a tangible reality, promising to revolutionize the way we process information. Unlike classical computers that use bits to represent either a 0 or a 1, quantum computers leverage quantum bits, or qubits, which can exist in multiple states simultaneously thanks to the principles of superposition and entanglement. This enables quantum systems to solve complex problems at speeds unimaginable with classical computers. Industries such as cryptography, drug discovery, artificial intelligence, and supply chain optimization stand to benefit immensely as quantum computing matures, potentially ushering in a new era of technological breakthroughs.",
    images: "./images/image.png"
  },
  {
    title: "Breaking Barriers in Cryptography with Quantum Computing",
    subtitle: null,
    body: "As quantum computing evolves, its impact on cybersecurity becomes a double-edged sword. While it promises to create unbreakable encryption through quantum key distribution (QKD), it also poses a threat to current encryption standards. Classical algorithms like RSA and ECC could be rendered obsolete by quantum algorithms such as Shor's. This article explores the race to develop quantum-resistant encryption and how organizations are preparing for the post-quantum era.",
    images: "./images/cryptography-photo.jpeg"
  },
  {
    title: "Quantum Computing in Drug Discovery: Accelerating Innovation",
    subtitle: null,
    body: "The pharmaceutical industry is poised to undergo a transformation with quantum computing. By simulating molecular interactions at unprecedented speeds, quantum computers could identify new drug candidates, optimize formulations, and even personalize treatments for individuals. This piece delves into the practical applications of quantum mechanics in medicine and the potential it holds for curing diseases once thought incurable.",
    images: "./images/medical.jpeg"
  },
  {
    title: "Quantum AI: Redefining Machine Learning and Decision-Making",
    subtitle: null,
    body: "Artificial intelligence, powered by quantum computing, could lead to breakthroughs in machine learning models, optimization problems, and real-time decision-making. Quantum-enhanced AI has the potential to process vast datasets and solve problems that are computationally prohibitive for classical systems. From autonomous vehicles to climate modeling, this article examines the role of quantum AI in shaping the future.",
    images: "./images/ai-image.jpg"
  },
  {
    title: "The Quantum Race: Global Efforts to Lead the Future of Computing",
    subtitle: null,
    body: "The competition for quantum supremacy has ignited a global race among tech giants, startups, and governments. Nations like the U.S., China, and the European Union are investing billions to secure their position as leaders in quantum technology. This article highlights key players, their advancements, and how quantum computing could reshape geopolitics and the global economy.",
    images: "./images/computing.jpg"
  }
]

console.log('SUBMISSION OF FIRST TASK - Presentation of Study/Practise of learning outcome; show this through console,implementation of array on a simple HTML Webpage')
console.log('')
console.log('SCOPE - refers to the context or environment in which variables, functions, and objects are accessible or visible. It determines where in the code a particular variable or function can be used. Scope helps prevent naming conflicts and controls variable lifespan, improving code organization and security.')
console.log('')
console.log('LET and CONST - these are both block scoped variables. LET can be reassigned while CONST remains constant and cannot be reassigned')
console.log('')
console.log('ARROW FUNCTIONS - are a shorter syntax for declaring functions that doesnt required the function keyword. It does have its own "this" but inherits it from the surrounding scope. Expressed as - const myFunction = ()=>{}')
console.log('')
console.log('OBJECTS -  Objects are containers for properties and methods, stored in key/value pairs. The value of properties(keys) maybe any value, function or even other objects')
console.log('')
console.log('ARRAY METHODS')
console.log('Array.map() - This method creates a new array from calling a function for every element of that array. Below shows an array of 5 numbers. I will use array.map() to get the square root of those numbers.')
const numbers = [1,4,9,16,25]
console.log(`Array of numbers: [${numbers}]`)
const sqrt = numbers.map(Math.sqrt)
console.log('const sqrt = numbers.map(Math.sqrt)')
console.log(`Corresponding Square Roots: [${sqrt}]`)
console.log('')
console.log('Array.filter() - This method creates a new array filled with elements that pass a test provided by a function. From the numbers array above, I can check which numbers are greater 10 with the filter method.')
console.log('const overTen = numbers.filter(x => x > 10)')
const overTen = numbers.filter(x => x > 10)
console.log(`Numbers greater than 10: [${overTen}]`)
console.log('')
console.log('Array.reduce() - This method returns a single value that is the accumulated result of a reducer function. For example to find the sum of all the numbers in the numbers array. I can use a numbers.reduce().')
console.log('const sumArr = numbers.reduce( (sum, x) => sum += x )')
const sumArr = numbers.reduce( (sum, x) => sum += x )
console.log(`Sum of numbers = ${sumArr}`)
console.log('')
console.log('Array.forEach() - This method calls a function for each element in an array. It finds its use mostly in DOM manipulation to render elements based on content received from the backend or from API calls. The content of this webpage is dynamically rendered using a forEach loop on the articles array. I will log the result of this forEach loop below.')
let HTML = ``

articles.forEach(article=>{
  let html = `
    <div class="flex snap-start">        
      <div class="size-[300px] w-[250px] bg-[#56e8ea] ">
        <img class="size-full object-cover" src=${article.images} alt="">
      </div>

      <div class="p-5 bg-white w-[350px] flex flex-col justify-between">
        <div>
          <p class="text-lg font-semibold">
            ${article.title} 
          </p>
          <p class="text-lg leading-none font-semibold">
            ${article.subtitle? article.subtitle: ''}
          </p>
        </div>

          <p class="text-sm font-light max-h-[140px] overflow-hidden">
            ${article.body}
          </p>

          <div class="flex items-center gap-2">
            <div class="bg-[#f8b081] size-8 rounded-full"></div>

            <div class="flex flex-col text-xs">
              <p class="font-bold">
                Paul J. Yarnell
              </p>
              <p class="font-light">
                24 Feb, 2024
              </p>
            </div>

            <div class="flex-1">
              <div class="size-6 rounded-xl bg-[#e8e8e8] justify-self-end flex items-center justify-center">
                <img class="size-3" src="./icons/share-solid.svg" alt="">
              </div>
            </div>
          </div>
      </div>
    </div>
  `
  HTML += html
})

console.log(HTML)
console.log('Scroll to Top')








