import { showHome } from './home';
import { showMenu } from './menu';
import { showContact } from './contact';

export function initialPageLoad(){
  const content=document.querySelector('#content');

  // Heading and Tab
  const heading=document.createElement('div');
  heading.classList.add('heading');
  content.appendChild(heading);

  const title=document.createElement('div');
  title.classList.add('title');
  heading.appendChild(title).textContent='C\'était très bon';

  const nav=document.createElement('div');
  nav.classList.add('nav');
  heading.appendChild(nav);

  const homeButton=document.createElement('button');
  nav.appendChild(homeButton).textContent='Home';
  homeButton.addEventListener('click',showHome);

  const menuButton=document.createElement('button');
  nav.appendChild(menuButton).textContent='Menu';
  menuButton.addEventListener('click',showMenu);

  const contactButton = document.createElement('button');
  nav.appendChild(contactButton).textContent='Contact';
  contactButton.addEventListener('click',showContact);

  // Main Content
  const mainContent=document.createElement('div');
  mainContent.classList.add('mainContent');
  content.appendChild(mainContent);

  // Footer
  const footer=document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);
  footer.textContent='this is footer';
}