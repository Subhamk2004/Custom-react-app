function customRender(react_element, container)
{
    let domElement = document.createElement(react_element.type);
    domElement.innerHTML = react_element.children;
    domElement.setAttribute('href', react_element.props.href);
    domElement.setAttribute('target', react_element.props.target);

    container.appendChild(domElement);
}

const react_element = {
    type:'a',
    props:{
        href:'https://subhamk2004.github.io/Subham_Portfolio/',
        target:'_blank'
    },
    children:`Click me to visit Subham Kumar's portfolio`
}

// this is our own library in which we have to write elements like this,
// this is basically the syntax of our custom React library

// props are nothing but just like the properties of objects in js

let mainContainer = document.getElementById('main-container');

// now we will render the above element in our main-container

customRender(react_element,mainContainer);


// see this basically is a library in which we created a function named customRender
// which basically injects or renders a custom element in our main-container element

// which is in our index.html, so basically this is like react, which has a single page index
// and we are injecting or rendering the elements in our single html element
