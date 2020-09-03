/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    if (!root) return;
    addRow([root])
}

var addRow = function (row) {
    let childRow = []
    let childEmpty = true
    for (let index = 0; index < row.length; index++) {
        const element = row[index]
        if (element.left == null) {
            childRow.push(' ')
        } else {
            childEmpty = false
            childRow.push(element.left)
        }
        if (element.right == null) {
            childRow.push(' ')
        } else {
            childEmpty = false
            childRow.push(element.right)
        }
    }

    const showRow = row.map(n => n !== " " ? n.val : " ")
    if (childEmpty) {
        console.log(showRow)
        return
    }
    addRow(childRow)
    console.log(showRow)
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function traverseLevelOrder(root) {
    if (!root) return
    let queue = [root]
    let traversal = []
    let node
    while (queue.length > 0) {
        node = queue.shift()
        traversal.push(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    return traversal;
}

const root = new TreeNode(1)
let temp = root
temp.left = new TreeNode(2)
temp.right = new TreeNode(3)

temp = temp.left
temp.left = new TreeNode(4)
temp.right = new TreeNode(5)

temp = root.right
temp.left = new TreeNode(6)
temp.right = new TreeNode(7)

// console.log(traverseLevelOrder(root))
printTree(root)