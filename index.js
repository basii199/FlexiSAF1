import { articles } from "./articles.js"
import "./articles.js"

let left = document.querySelector(".left")
let right = document.querySelector(".right")
let scrollBody = document.querySelector(".scroll-body")
let pageNumber = document.querySelector(".page-number")

let page = 1

function nextPage(){
  if(page!==5){
    page += 1
  }
  pageNumber.innerHTML = (page)
}

function prevPage(){
  if(page!==1){
    page -= 1
  }
  pageNumber.innerHTML = (page)
}

left.addEventListener('click',e=>{
  scrollBody.scrollBy({
    top: 0,
    left: -500,
    behavior: "smooth",
  })
  prevPage()
})

right.addEventListener('click',e=>{
  scrollBody.scrollBy({
    top: 0,
    left: 500,
    behavior: "smooth",
  })
  nextPage()
})

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

scrollBody.innerHTML = (HTML)