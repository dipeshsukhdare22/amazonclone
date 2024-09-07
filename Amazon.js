document.addEventListener("DOMContentLoaded", function () {
  let slidebtnleft = document.getElementById("btn_left");
  let slidebtnright = document.getElementById("btn_right");
  let sliderWrapper = document.querySelector(".img-list");
  let imageitem = document.querySelectorAll(".item");

  console.log(sliderWrapper);
  console.log(imageitem);

  if (!sliderWrapper) {
    console.error("Slider wrapper not found.");
    return;
  }

  let startslider = 0;
  const itemWidth = 100;

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${startslider}%)`;
  }

  slidebtnleft.addEventListener("click", () => {
    if (startslider > 0) {
      startslider -= itemWidth;
    } else {
      startslider = (imageitem.length - 1) * itemWidth;
    }
    updateSlider();
  });

  slidebtnright.addEventListener("click", () => {
    if (startslider < (imageitem.length - 1) * itemWidth) {
      startslider += itemWidth;
    } else {
      startslider = 0;
    }
    updateSlider();
  });

  updateSlider();
});

const scrollContainer = document.querySelectorAll(".products");
for (const iterator of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
