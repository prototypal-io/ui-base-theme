import Ember from 'ember';

const { $, ViewUtils } = Ember;

export default Ember.Mixin.create({
  $(sel) {
    let el = findFirstElementNode(this);
    return sel ? $(sel, el) : $(el);
  },
});

function findFirstElementNode(component) {
  let firstNode;

  if (ViewUtils.getViewBounds) {
    firstNode = ViewUtils.getViewBounds(component).firstNode;
  } else {
    firstNode = component._renderNode.firstNode;
  }

  if (isTextNode(firstNode)) {
    firstNode = firstNode.nextElementSibling;
  }

  return firstNode;
}

function isTextNode(node) {
  return node.nodeType === 3;
}
