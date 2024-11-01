const grid = document.querySelector('.grid')
const imagesCount = 16

for (let i = 0; i < imagesCount; i++) {
  const div = document.createElement('div')
  div.classList.add('image-wrapper')
  const img = document.createElement('img')
  img.classList.add('grid-img')
  img.src = `images/img-${i+1}.jpg`
}