const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    if(!this.rootNode) {
      this.rootNode = new Node(data);
    }

    let current = this.rootNode;

    while(current.data !== data) {
      if(current.data > data) {
        if(!current.left) {
          current.left = new Node(data);
        }
        current = current.left;
      } else {
        if(!current.right) {
          current.right = new Node(data);
        }
        current = current.right;
      }
    }

    return current;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    if(!this.find(data)) {
      return false;
    }
    return true;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data, current = this.rootNode) {
    if(!current) {
      return null;
    } else if(data < current.data) {
      return this.find(data, current.left);
    } else if(data > current.data) {
      return this.find(data, current.right);
    } else {

      return current;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    // у узла нет дочерних узлов (удаляем узел)
    // у узла есть левый дочерних узлов (заменяем удаляемый узел на его потомка)
    // у узла есть правый дочерних узлов (заменяем удаляемый узел на его потомка)
    // у узла есть оба дочерних узла (найти в правом поддереве минимальный элемент и переместить его на место удаляемого узла)

    this.rootNode = this.deleteCurrentNode(data);
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  deleteCurrentNode(data, current = this.rootNode) {
    if(!current) {
      return null;
    }
    if(data < current.data) {
      current.left = this.deleteCurrentNode(data, current.left);
    } else if(data > current.data) {
      current.right = this.deleteCurrentNode(data, current.right);
    } else {
      if(!current.left && !current.right) {
        return null;
      } else if(!current.left) {
        current = current.right;
      } else if(!current.right) {
        current = current.left;
      } else {
        let minRight = current.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        current.data = minRight.data;
        current.right = this.deleteCurrentNode(minRight.data, current.right);
      }
    }

    return current;
  }

  min() {
    if(!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while(current.left) {
      current = current.left;
    }

    return current.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if(!this.rootNode) {
      return null;
    }

    let current = this.rootNode;

    while(current.right) {
      current = current.right;
    }

    return current.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(8);
// tree.add(4);
// tree.add(2);
// tree.add(3);
// tree.add(10);
// tree.add(6);
// tree.add(7);
// tree.add(1);
// tree.add(11);
// tree.add(9);
// tree.add(22);
// tree.add(20);
// tree.add(24);

// tree.has(11);
// tree.has(44);

// tree.find(2);
// tree.find(6);
// tree.find(9);
// tree.find(44);

// tree.min();
// tree.max();

// tree.remove(1);
// tree.remove(6);
// tree.remove(11);
// tree.remove(44);
