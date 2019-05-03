const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav 
let nav = document.querySelector('nav').children;

for (i = 0; i < nav.length; i++){
  nav[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
  nav[i].style.color = 'purple';
  nav[i].style.fontWeight = '900';
 };

 let nav1 = document.createElement('a');
 let nav2 = document.createElement('a');
 let nav1info = document.createTextNode('Donate');
 let nav2info = document.createTextNode('Demo');
 nav1.appendChild(nav1info);
 nav2.prepend(nav2info);
 document.querySelector('nav').appendChild(nav1);
 document.querySelector('nav').prepend(nav2);

//cta
let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent.cta['h1']

let ctaButtton = document.querySelector('.cta-text button');
ctaButtton.textContent = siteContent['cta']['button'];

let logoCta = document.getElementById('cta-img');
logoCta.setAttribute('src', siteContent['cta']['img-src'])

//main
let topHeader = document.querySelectorAll('.top-content .text-content h4');
topHeader[0].textContent = siteContent['main-content']['features-h4']
topHeader[1].textContent = siteContent['main-content']['about-h4']

let logoMiddle = document.getElementById('middle-img');
logoMiddle.setAttribute('src', siteContent['main-content']['middle-img-src'])

let topMainContent = document.querySelectorAll('.top-content .text-content p');
topMainContent[0].textContent = siteContent['main-content']['features-content']
topMainContent[1].textContent = siteContent['main-content']['about-content']

//bottom
let bottomHeaders = document.querySelectorAll('.bottom-content .text-content h4');
bottomHeaders[0].textContent = siteContent['main-content']['services-h4']
bottomHeaders[1].textContent = siteContent['main-content']['product-h4']
bottomHeaders[2].textContent = siteContent['main-content']['vision-h4']

let bottomContent = document.querySelectorAll('.bottom-content .text-content p');
bottomContent[0].textContent = siteContent['main-content']['services-content']
bottomContent[1].textContent = siteContent['main-content']['product-content']
bottomContent[2].textContent = siteContent['main-content']['vision-content']

//contant
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent['contact']['address']
contactContent[1].textContent = siteContent['contact']['phone']
contactContent[2].textContent = siteContent['contact']['email']

//footer

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']