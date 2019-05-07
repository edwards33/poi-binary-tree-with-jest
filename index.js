const { createBinaryNode, createBinaryTree } = require('./binary_tree')

const tree = createBinaryTree('1.item')
const b = tree.root.addLeft('2.item')
const c = tree.root.addRight('3.item')
const d = b.addLeft('4.item')
const e = b.addRight('5.item')
const f = c.addLeft('6.item')
const g = c.addRight('7.item')
const h = d.addLeft('8.item')
const i = d.addRight('9.item')

console.log('IN_ORDER: ', tree.print())

console.log('PRE_ORDER: ', tree.print('PRE_ORDER'))

console.log('POST_ORDER: ', tree.print('POST_ORDER'))

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Binary Tree Example</h2>
      <p> Open developer console </p>
    `
