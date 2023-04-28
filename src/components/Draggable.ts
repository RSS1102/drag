/**
 * @description 自定义拖拽
 * @param {HTMLElement} dragDom 被拖拽的区域
 * @param {HTMLElement} tagDom 移动的元素
 */
export function customDraggable(dragDom: HTMLElement, tagDom: HTMLElement) {
  let offsetX = 0;
  let offsetY = 0;

  function mouseUp() {
    console.log('鼠标离开了!')
    dragDom.removeEventListener('mousemove', mouseMove);
  }

  function mouseMove(e) {
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    tagDom.style.left = x + "px";
    tagDom.style.top = y + "px";
  }

  function mouseDown(e) {
    offsetX = e.clientX - dragDom.offsetLeft || 0;
    offsetY = e.clientY - dragDom.offsetTop || 0;

    dragDom.addEventListener('mousemove', (move) => {
      mouseMove(move)
    });
  }

  dragDom.addEventListener('mousedown', function (e) {
    mouseDown(e)
  });
  dragDom.addEventListener('mouseup', mouseUp);
}
