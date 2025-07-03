class PlainText {
    constructor(private text: string) { }

    getText(): string {
        return this.text;
    }
}

interface TextDecorator {
    render(): string;
}

class BoldTextDecorator implements TextDecorator {
    constructor(private text: PlainText) { }

    render(): string {
        return `<b>${this.text.getText()}</b>`;
    }
}

class ItalicTextDecorator implements TextDecorator {
    constructor(private text: PlainText) { }

    render(): string {
        return `<i>${this.text.getText()}</i>`;
    }
}

class UnderLineTextDecorator implements TextDecorator {
    constructor(private text: PlainText) { }

    render(): string {
        return `<u>${this.text.getText()}</u>`;
    }
}

const plainText = new PlainText("Hello, world!");
const boldText = new BoldTextDecorator(plainText);
console.log(boldText.render());