const cardData = [
  {
    imgSrc: "assets/images/html.png",
    title: "Web Development Languages",
    subTitle: "HTML",
    author: "Sarah Smith",
  },
  {
    imgSrc: "assets/images/react.webp",
    title: "Frontend Frameworks and Libraries",
    subTitle: "React JS",
    author: "Daniel Brown",
  },
  {
    imgSrc: "assets/images/django.jpeg",
    title: "Backend Frameworks and Libraries",
    subTitle: "Django",
    author: "Olivia Martinez",
  },
  {
    imgSrc: "assets/images/css.webp",
    title: "Web Development Languages",
    subTitle: "CSS",
    author: "David Lee",
  },
  {
    imgSrc: "assets/images/vuejs.jpeg",
    title: "Frontend Frameworks and Libraries",
    subTitle: "Vue.js",
    author: "Ava Jones",
  },
  {
    imgSrc: "assets/images/flask.webp",
    title: "Backend Frameworks and Libraries",
    subTitle: "Flask",
    author: "Ethan Thompson",
  },
  {
    imgSrc: "assets/images/javascript.jpg",
    title: "Web Development Languages",
    subTitle: "JavaScript",
    author: "Emily Chen",
  },
  {
    imgSrc: "assets/images/nodejs.webp",
    title: "Backend Frameworks and Libraries",
    subTitle: "Node.js",
    author: "Michael Kim",
  },
  {
    imgSrc: "assets/images/sql.png",
    title: "Databases and APIs",
    subTitle: "SQL",
    author: "Madison Davis",
  },
  {
    imgSrc: "assets/images/jquery.png",
    title: "Frontend Frameworks and Libraries",
    subTitle: "jQuery",
    author: "John Johnson",
  },
  {
    imgSrc: "assets/images/expressjs.webp",
    title: "Backend Frameworks and Libraries",
    subTitle: "Express.js",
    author: "Sophia Rodriguez",
  },
  {
    imgSrc: "assets/images/angular.png",
    title: "Frontend Frameworks and Libraries",
    subTitle: "Angular",
    author: "Jessica Davis",
  },
  {
    imgSrc: "assets/images/ruby.jpeg",
    title: "Backend Frameworks and Libraries",
    subTitle: "Ruby on Rails",
    author: "William Lee",
  },
  {
    imgSrc: "assets/images/restapi.jpeg",
    title: "Databases and APIs",
    subTitle: "REST APIs",
    author: "Jacob Garcia",
  },
  {
    imgSrc: "assets/images/ci-cd.jpeg",
    title: "Databases and APIs",
    subTitle: "REST APIs",
    author: "Jacob Garcia",
  },
];

const cardContainer = document.querySelector(".search-result .row");

cardData.forEach((data) => {
  const cardResult = document.createElement("div");
  cardResult.classList.add("card-result");

  const cardImage = document.createElement("img");
  cardImage.src = data.imgSrc;
  cardImage.alt = "Card Image";

  const container = document.createElement("div");
  container.classList.add("container");

  const h3 = document.createElement("h3");
  h3.textContent = data.title;

  const h4 = document.createElement("h4");
  h4.textContent = data.subTitle;

  const stars = document.createElement("div");
  stars.classList.add("stars");
  stars.innerHTML = `
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star-half-outline"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
    `;

  const p = document.createElement("p");
  const authorSpan = document.createElement("span");
  authorSpan.classList.add("author_name");
  authorSpan.textContent = data.author;
  p.innerHTML = `Author: `;
  p.appendChild(authorSpan);

  container.appendChild(h3);
  container.appendChild(h4);
  container.appendChild(stars);
  container.appendChild(p);

  cardResult.appendChild(cardImage);
  cardResult.appendChild(container);

  cardContainer.appendChild(cardResult);
});
