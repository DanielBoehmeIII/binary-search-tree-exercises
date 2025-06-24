#!/usr/bin/env node
import { Tree } from "./bst.js";

const tree = new Tree();
function testBst() {
  tree.insert(...[5, 4, 3, 2]);
  console.log("After insert: ", tree.isBalanced());
  tree.rebalance();
  console.log("After balance: ", tree.isBalanced());
  console.log("Find: ", tree.find(3));
  tree.deleteItem(3);
  console.log("After deletion: ", tree.find(3));
  tree.printLevels();
  tree.printPreorder();
  tree.printInorder();
  tree.printPostorder();
  console.log("Tree height (5): ", tree.height(5));
  console.log("Tree depth (4): ", tree.depth(4));
}
testBst();
