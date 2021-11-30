const ReadMoreBtn = document.querySelectorAll('.readMore-btn')
const benefits_desc = document.querySelectorAll('.benefits-description')

for (let i = 0; i < ReadMoreBtn.length; i++) {
  ReadMoreBtn[i].addEventListener('click', () => {
    benefits_desc[i].classList.toggle('show')

    if (benefits_desc[i].classList.contains('show')) {
      ReadMoreBtn[i].innerHTML = 'Read Less'
    } else {
      ReadMoreBtn[i].innerHTML = 'Read More'
    }
    more[i].classList.toggle('show')
  })
}

const navLink = document.querySelectorAll('nav .nav-left .nav-link')

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', () => {
    for (let j = 0; j < navLink.length; j++) {
      navLink[j].classList.remove('active')
    }
    navLink[i].classList.add('active')
  })
}

const hamburgerMenu = document.querySelector('.hamburger-menu')
const navLeftList = document.querySelector('.nav-left .nav-left-list')

hamburgerMenu.addEventListener('click', () => {
  navLeftList.classList.add('active')
})

document.body.addEventListener('click', () => {
  if (event.target != navLeftList && event.target != hamburgerMenu) {
    navLeftList.classList.remove('active')
  }
})
