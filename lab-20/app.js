class Shape {
    static collection = [];
    static drawingboard = document.getElementById('drawingboard');
    static errorsThrown = false;

    static isOverflown() {
        return Shape.drawingboard.scrollHeight > Shape.drawingboard.clientHeight || Shape.drawingboard.scrollWidth > Shape.drawingboard.clientWidth;
    }
    
    constructor() {
        this.div = document.createElement('div');
        Shape.collection.push(this);
        this.render();
    }

    render() {
        document.getElementById('drawingboard').appendChild(this.div);
        this.addEvents();
    }

    setupCSS() {
        this.div.classList.add(this.type);
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        this.div.style.top = `${Math.random() * 500}px`
        this.div.style.left = `${Math.random() * 500}px`
    }

    addEvents() {
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.destroy());
    }

    describe() {
        document.getElementById('describeShape').value = this.type;
        document.getElementById('describeWidth').value = this.width;
        document.getElementById('describeHeight').value = this.height;
        document.getElementById('describeArea').value = this.width * this.height;
        document.getElementById('describePerimeter').value = (2 * this.width) + (2 * this.height);
        document.getElementById('describeRadius').value = 'N/A';
    }

    destroy() {
        this.div.remove();
        const index = Shape.collection.indexOf(this);
        Shape.collection.splice(index, 1);
    }

    overflowCheck() {
        if(Shape.isOverflown()) {
            if(Shape.errorsThrown) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Due to the size of the shape you created, not all of it will be displayed.',
                    footer: '<center>Keep getting this error? <br />Try deleting your extra-large shape by double-clicking it.</center>'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Due to the size of the shape you created, not all of it will be displayed.'
                })
                Shape.errorsThrown = true;       
            }
        }
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.type = 'rectangle'
        this.setupCSS();
        this.overflowCheck();
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.width = sideLength;
        this.height = sideLength;
        this.type = 'square'
        this.setupCSS();
        this.overflowCheck();
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.width = radius;
        this.height = radius;
        this.type = 'circle'
        this.setupCSS();
        this.overflowCheck();
    }

    describe() {
        document.getElementById('describeShape').value = this.type;
        document.getElementById('describeWidth').value = this.width;
        document.getElementById('describeHeight').value = this.height;
        document.getElementById('describeArea').value = Math.PI * this.radius * this.radius;
        document.getElementById('describePerimeter').value = 2 * Math.PI * this.radius;
        document.getElementById('describeRadius').value = this.radius;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;
        this.type = 'triangle'
        this.setupCSS()
        this.overflowCheck();
    }

    setupCSS() {
        this.div.classList.add(this.type);
        this.div.style.borderBottom = `${this.height}px solid rgba(255, 255, 0, 0.69)`
        this.div.style.borderRight = `${this.height}px solid transparent`
        this.div.style.top = `${Math.random() * 500}px`
        this.div.style.left = `${Math.random() * 500}px`
    }

    describe() {
        document.getElementById('describeShape').value = this.type;
        document.getElementById('describeWidth').value = this.height;
        document.getElementById('describeHeight').value = this.height;
        document.getElementById('describeArea').value = 0.5 * this.height * this.height;
        document.getElementById('describePerimeter').value = 2 * this.height + Math.sqrt(2) * this.height;
        document.getElementById('describeRadius').value = 'N/A';
    }
}

// Let's setup them add buttons
document.getElementById('addRectangle').addEventListener('click', () => new Rectangle(document.getElementById('rectangleWidth').value, document.getElementById('rectangleHeight').value));
document.getElementById('addSquare').addEventListener('click', () => new Square(document.getElementById('squareSideLength').value));
document.getElementById('addCircle').addEventListener('click', () => new Circle(document.getElementById('circleRadius').value));
document.getElementById('addTriangle').addEventListener('click', () => new Triangle(document.getElementById('triangleHeight').value));