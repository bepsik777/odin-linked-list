class linkedList {
    
    constructor(l) {
        this.length = 0
    }

    append(value) {
        const newNode = new node(value)
        if(Object.entries(this).length === 1) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.nextNode = newNode
            this.tail = newNode
        }
        this.length += 1
    }

    prepend(value) {
        if(Object.entries(this).length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head = new node(value, this.head)
        }
        this.length += 1
    }

    size() {
        return this.length
    }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
    }

    at(index) {
        if (!this.head) return
        let currNode = this.head
        for (let i = 0; i < index; i++) {
            if (!currNode.nextNode) return console.log(`no item at this index. last item: ${currNode}`)
            currNode = currNode.nextNode
        }
        return currNode
    }

    pop() {
        let currNode = this.head
        while(currNode.nextNode) {
            currNode = currNode.nextNode
            if(!currNode.nextNode.nextNode) {
                this.tail = currNode
                currNode.nextNode = null
                this.length -= 1
            }
        }
    }

    contains(value) {
        let currNode = this.head
        if(currNode.value === value) return true
        while(currNode.value !== value) {
            currNode = currNode.nextNode
            if (currNode.value === value) return true
            if (currNode.nextNode === null && currNode.value !== value) return false
        }
    }

    find(value) {
        let currNode = this.head
        let count = 0
        if(currNode.value === value) return count
        while(currNode.value !== value) {
            count += 1
            currNode = currNode.nextNode
            if (currNode.value === value) return count
            if (currNode.nextNode === null && currNode.value !== value) return null
        }
    }

    toString() {
        if (!this.head) return null
        let string = `( ${this.head.value.toString()} ) ->`
        let currNode = this.head
        while (currNode.nextNode) {
            currNode = currNode.nextNode
            if (!currNode.nextNode) {
                string += ` ( ${currNode.value} ) -> null`
            } else {
            string += ` ( ${currNode.value} ) ->`
            }
        }
        console.log('hello')
        return string        
    }

    insertAt(value, index) {
        if (index === 0 && !this.head) return this.append(value)
        if (index === 0) return this.prepend(value)
        if (index === this.length) return this.append(value)
        let currNode = this.head
        for (let i = 0; i < index - 1; i++) {
            currNode = currNode.nextNode
        }
        const newNode = new node(value, currNode.nextNode)
        currNode.nextNode = newNode
        this.length += 1
    }

    removeAt(index) {
        if (index === this.length - 1) return this.pop()
        this.length -= 1
        if (index === 0) return this.head = this.head.nextNode
        let currNode = this.head
        for (let i = 0; i < index - 1; i++) {
            currNode = currNode.nextNode
        }
        currNode.nextNode = currNode.nextNode.nextNode
    }

}

class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new linkedList()


list.insertAt(0, 0)
list.insertAt(1, 1)
console.log(list)
console.log(list.size())











