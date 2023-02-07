export function showMenu(){
  const previousContainer=document.querySelector('.container')
  const mainContent=document.querySelector('.mainContent');
  if(mainContent.hasChildNodes()){
    previousContainer.remove();
  }
  
  const container=document.createElement('div');
  container.classList.add('container');
  mainContent.appendChild(container);
  container.textContent='this is menu'
  }