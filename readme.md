1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?' answer:
    (getElementById, getElementsByClassName)
    getElementById is just find Out anyone data by id. it is retrun one element.Do not use css selector. But getElementsByClassName is retrun all data of class. it is a HTMLCollection.Don't use css selector.

                          (querySelector / querySelectorAll)

    querySelector: it is support css selector and flexible. it is retrun just first element.
    querySelectorAll: it is support css selector and flexible. it is retrun just matching element. retrun type is nodelist.

2.  How do you create and insert a new element into the DOM?
    Answer: 1. Create the new element
               const newElement = document.createElement('p');
            2. add to content to the new element
                newElement.textContent = 'This is a new paragraph.'
            3.I can also add attributes or classes
                newElement.setAttribute('id', 'new-paragraph');
                newElement.classList.add('paragraph-style');
            
3.  What is Event Bubbling? And how does it work?
    Answer: Event Bubbling is a mechanism in the DOM where an event starts from the target element and then bubbles up through its parent elements until it reaches the root. 

    It work: 
    1. when i click a child element , the event doesn't just stay there.
    2. It also triggers the same event on its parent , grantparent, and so on.

4.  What is Event Delegation in JavaScript? Why is it useful?
    
    Answer: Event delegation is a design pattern in JavaScript where a single event listener is attached to a parent element to manage events for all its descendant elements, rather than attaching a separate listener to each child. 

    It is useful because : 
    1. Improved performance 
    2. Making the code easier to read and maintain.
    3. Dynamic efficiency 

5.  What is the difference between preventDefault() and stopPropagation() methods?

    answer: event.preventDefault() stops the browser's default action for a specific event. 
            event.stopPropagation() stops the event from propagating up or down the Document Object Model (DOM) 

            It is possible to use both methods together if you need to stop both the default browser action and the event propagation.
