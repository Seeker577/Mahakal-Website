const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Heritage",
      price: 119,
      colors: [
        {
          code: "universal",
          img: "./img/rakhiS1.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Raksha Sutra",
      price: 359,
      colors: [
        {
          code: "lightgray",
          img: "./img/rakhiS2.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Raksha Sutra",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/rakhiS3.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "Raksha Sutra",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/rakhiS4.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "Raksha Sutra",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/rakhiS5.jpg",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title

    });
});

