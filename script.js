//Hamburger Navigation Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');   

});


new Swiper('.card-wrapper', {
    loop: true,
    //Space Between Cards
    spaceBetween: 50, 
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
    300: {
            slidesPerView: 1,   // On screens smaller than 300px, show 2 slides
            spaceBetween: 50    // Reduce space between slides
        },
    // 375: {
    //         slidesPerView: 2,   // On screens smaller than 375px, show 2 slides
    //         spaceBetween: 10    // Reduce space between slides
    //     },
    550: {
            slidesPerView: 2,   // On screens smaller than 600px, show 3 slides
            spaceBetween: 50    // Reduce space between slides
        },
    768: {
      slidesPerView: 3,   // On screens smaller than 768px, show 3 slides
      spaceBetween: 50    // Reduce space between slides
    },
    1024: {
      slidesPerView: 4,   // On screens smaller than 1024px, show 4 slides
      spaceBetween: 50    // Adjust space between slides for medium screens
    },
    1200: {
      slidesPerView: 5,   // On screens smaller than 1200px, show 5 slides
      spaceBetween: 50    // Adjust space between slides for large screens
    },
    1440: {
      slidesPerView: 6,   // On screens larger than 1440px show 6 slides
      spaceBetween: 50    // Adjust space between slides for large screens
        },
    1920: {
            slidesPerView: 8,   // On larger screens, show 8 slides
      spaceBetween: 50
        }
    }
  });

  // Set the maximum number of words you want to display
  const maxWords = 13;

  // Select all elements with the class 'card-title'
  const cardTitles = document.querySelectorAll('.card-title');

  // Loop through each 'card-title' element
  cardTitles.forEach((title) => {
    // Split the text content into an array of words
    const words = title.innerText.split(' ');

    // Check if the number of words exceeds the maximum limit
    if (words.length > maxWords) {
      // Limit the text content to the maximum number of words and add an ellipsis
      title.innerText = words.slice(0, maxWords).join(' ') + '...';
    }
  });
