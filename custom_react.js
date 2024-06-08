function customRender(react_element, container)
{
    let domElement = document.createElement(react_element.type);
    domElement.innerHTML = react_element.children;
    domElement.setAttribute('href', react_element.props.href);
    domElement.setAttribute('target', react_element.props.target);

    container.appendChild(domElement);
}

// the above code is very inefficient, as of now we only have 2 props, but what we have 
// more than that, so let's make it a little bit efficient as in function 2

function custom_render2(react_element, container)
{
    let domElement = document.createElement(react_element.type);
    domElement.innerHTML = react_element.children;
    for (const property in react_element.props) {
        domElement.setAttribute(property, react_element.props[property]);
    }
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

custom_render2(react_element,mainContainer);


// see this basically is a library in which we created a function named customRender
// which basically injects or renders a custom element in our main-container element

// which is in our index.html, so basically this is like react, which has a single page index
// and we are injecting or rendering the elements in our single html element



// above is our custom_react whoci has our own methods and rendering in single page

// in react we have renderElement which is already defined in react, just as we defined
// our custom_render2 function to render elements