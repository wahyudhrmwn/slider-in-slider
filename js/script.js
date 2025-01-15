$(document).ready(function () {
  const $sliderWrapper = $('.slider-wrapper');
  const $slides = $('.slide');
  const slideCount = $slides.length;
  let currentIndex = 0;

  // Fungsi untuk mengatur ulang lebar setiap slide
  const updateSlideWidth = () => {
    const slideWidth = $('.slider-container').width(); // Lebar container
    $slides.each(function () {
      $(this).css('min-width', slideWidth + 'px'); // Terapkan lebar ke setiap slide
    });
    updateSliderPosition(); // Sesuaikan posisi slider setelah lebar diatur
  };

  // Fungsi untuk memperbarui posisi slider
  const updateSliderPosition = () => {
    const slideWidth = $('.slider-container').width();
    $sliderWrapper.css('transform', `translateX(-${currentIndex * slideWidth}px)`);
    updateNavButtons(); // Perbarui tombol navigasi
  };

  // Fungsi untuk memperbarui status tombol navigasi
  const updateNavButtons = () => {
    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === slideCount - 1;
  
    $('#prevBtn').prop('disabled', isPrevDisabled); // Nonaktifkan tombol "Prev" di slide pertama
    $('#nextBtn').prop('disabled', isNextDisabled); // Nonaktifkan tombol "Next" di slide terakhir
  
    // Log status tombol untuk debugging
    console.log(`PrevBtn disabled: ${isPrevDisabled}, NextBtn disabled: ${isNextDisabled}`);
  };

  // Event handler untuk tombol "Next"
  $('#nextBtn').click(function () {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  // Event handler untuk tombol "Prev"
  $('#prevBtn').click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  // Atur ulang lebar slide saat window di-resize
  $(window).resize(updateSlideWidth);

  // Inisialisasi pertama
  updateSlideWidth();



  // =================================================== INNER SLIDER =============================================

  const $innerSliderWrapper = $('.inner-slider-wrapper');
  const $innerSlides = $('.inner-slide');
  const innerSlideCount = $innerSlides.length;
  let innerCurrentIndex = 0;

  
  // Fungsi untuk mengatur ulang lebar setiap slide
  const updateInnerSlideWidth = () => {
    const innerSlideWidth = $('.inner-slider-container').width(); // Lebar container
    $innerSlides.each(function () {
      $(this).css('min-width', innerSlideWidth + 'px'); // Terapkan lebar ke setiap slide
    });
    updateInnerSliderPosition(); // Sesuaikan posisi slider setelah lebar diatur
  };

  // Fungsi untuk memperbarui posisi slider
  const updateInnerSliderPosition = () => {
    const innerSlideWidth = $('.inner-slider-container').width();
    $innerSliderWrapper.css('transform', `translateX(-${innerCurrentIndex * innerSlideWidth}px)`);
    updateInnerNavButtons(); // Perbarui tombol navigasi
  };

  // Fungsi untuk memperbarui status tombol navigasi
  const updateInnerNavButtons = () => {
    const isPrevInnerDisabled = innerCurrentIndex === 0;
    const isNextInnerDisabled = innerCurrentIndex === innerSlideCount - 1;
  
    $('#prevBtnInner').prop('disabled', isPrevInnerDisabled); // Nonaktifkan tombol "Prev" di slide pertama
    $('#nextBtnInner').prop('disabled', isNextInnerDisabled); // Nonaktifkan tombol "Next" di slide terakhir
  
    // Log status tombol untuk debugging
    console.log(`PrevBtnInner disabled: ${isPrevInnerDisabled}, NextBtnInner disabled: ${isNextInnerDisabled}`);
  };

  // Event handler untuk tombol "Next"
  $('#nextBtnInner').click(function () {
    if (innerCurrentIndex < innerSlideCount - 1) {
      innerCurrentIndex++;
      updateInnerSliderPosition();
    }
  });

  // Event handler untuk tombol "Prev"
  $('#prevBtnInner').click(function () {
    if (innerCurrentIndex > 0) {
      innerCurrentIndex--;
      updateInnerSliderPosition();
    }
  });

  // Atur ulang lebar slide saat window di-resize
  $(window).resize(updateInnerSlideWidth);

  // Inisialisasi pertama
  updateInnerSlideWidth();
  }
  // =================================================== INNER SLIDER =============================================
);
