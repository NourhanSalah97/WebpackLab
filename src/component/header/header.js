import "./style.scss";
import picture from '../../assets/c.jpg'
import picture2 from '../../assets/image.png'
const element = document.createElement("header");

element.innerHTML = "this is webpack demo";
element.classList.add('info')
document.body.appendChild(element);
const image = document.createElement("img");
image.src = picture
document.body.appendChild(image);