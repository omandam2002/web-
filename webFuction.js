const insert = () => {
    let type = document.querySelector('#type').value;
    let label = document.querySelector('#label').value;
  
    switch(type) {
      case 'text':
        appendText(label);
        break;
      case 'button':
        appendButton(label);
        break;
      case 'radio':
        appendRadio(label);
        break;
      case 'checkbox':
        appendCheckbox(label);
        break;
    }
  }
  
  const appendText = (label = "No label") => {
    let el = document.createElement('input')

    el.setAttribute('type','text')
    el.setAttribute('class','form-control')
    el.setAttribute('placeholder',label)
    let container = createEl('div', {
      class: 'input-container'
    }, el);
    document.querySelector('#display').append(container);
  }
  
  const appendButton = (label = "No label") => {
    let el = document.createElement('input')
    el.setAttribute('type', 'button')
    el.setAttribute('class', 'btn btn-primary')
    el.setAttribute('label',label);
    el.setAttribute('value', label)
    el.setAttribute('title', label)
    document.querySelector('#display').append(el);
  }
  
  const appendRadio = (label = "no Label") => {
    let el = document.createElement('input')
    el.setAttribute('type', 'radio')
    el.setAttribute('class', 'btn btn-primary')
    el.setAttribute('label',label);
    el.setAttribute('value', label)
    el.setAttribute('title', label)
    document.querySelector('#display').append(el,label);
    
  }
  
  const appendCheckbox = (label = "No label") => {
    let el = document.createElement('input')
    el.setAttribute('type', 'checkbox')
    el.setAttribute('class', 'btn btn-primary')
    el.setAttribute('label',label);
    el.setAttribute('value', label)
    el.setAttribute('title', label)
    document.querySelector('#display').append(label);
  }
  
  const removeInsertedElement = () => {
    let insertedElement = document.querySelector('#display > *:last-child');
    if (insertedElement) {
      insertedElement.remove();
    }
  }
  
  const createEl = (tagName, attributes = {}, ...children) => {
    let el = document.createElement(tagName);
    for (let attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    for (let child of children) {
      el.append(child);
    }
    return el;
  }