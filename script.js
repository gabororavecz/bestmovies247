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
        100: {
            slidesPerView: 1
        },
        200: {
            slidesPerView: 2
        },
        300: {
            slidesPerView: 3
        },
        400: {
            slidesPerView: 4
        },
        500: {
            slidesPerView: 5
        },
        600: {
            slidesPerView: 6
        },
        700: {
            slidesPerView: 7
        },
        800: {
            slidesPerView: 8
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
