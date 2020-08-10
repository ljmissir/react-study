import { TEXT } from "./const";

// !vnode 虚拟dom对象
// !node 真实dom

function render(vnode, container) {
  // !vnode => node
  const node = createNode(vnode);
  // !再把node插入到container中
  container.appendChild(node);
}

// 创建node
function createNode(vnode) {
  const { type, props } = vnode;
  let node = null;
  // 判断节点类型
  console.log(vnode);
  if (type === TEXT) {
    node = document.createTextNode("");
  } else if (typeof type === "string") {
    node = document.createElement(type);
  } else if (typeof type === "function") {
    // 判断是类组件还是函数组件
    node = type.prototype.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode);
  } else {
    node = document.createDocumentFragment();
  }

  // 把props.children遍历，转成真实dom节点 ，再插入node
  reconcileChildren(props.children, node);
  // 更新属性节点
  updateNode(node, props);
  return node;
}

function reconcileChildren(children, node) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (Array.isArray(child)) {
      for (let j = 0; j < child.length; j++) {
        render(child[j], node);
      }
    } else {
      render(child, node);
    }
  }
}

function updateNode(node, nextVal) {
  Object.keys(nextVal)
    .filter((key) => key !== "children")
    .forEach((key) => (node[key] = nextVal[key]));
}

// 如果是类组件，则执行new type(props)生成vnode，再调用render()方法生成node
function updateClassComponent(vnode) {
  const { type, props } = vnode;
  let cmp = new type(props);
  const vvnode = cmp.render();
  const node = createNode(vvnode);
  return node;
}

// 如果是函数组件则执行该函数
function updateFunctionComponent(vnode) {
  const { type, props } = vnode;
  let vvnode = type(props);
  const node = createNode(vvnode);
  return node;
}

export default { render };
