/**
 * @description 自定义拖拽
 * @param {HTMLElement} dragDom 被拖拽的区域
 * @param {HTMLElement} moveDom 移动的元素
 */
export function customDraggable(dragDom: HTMLElement, moveDom: HTMLElement) {
  let offsetX = 0;
  let offsetY = 0;
  let moveX = 0;
  let moveY = 0;
  let x = 0;
  let y = 0;
  function mouseMove(e: MouseEvent) {
    x = moveX+ e.clientX - offsetX;
    y = moveY+ e.clientY - offsetY;
    console.log(moveX, moveY)
    console.log(x,y)

    moveDom.style.left = x + "px";
    moveDom.style.top = y + "px";
  }

  function mouseDown(e: MouseEvent) {
    offsetX = e.clientX - dragDom.offsetLeft || 0;
    offsetY = e.clientY - dragDom.offsetTop || 0;
    dragDom.addEventListener('mousemove', mouseMove);
  }
  dragDom.addEventListener('mousedown', mouseDown);
  dragDom.addEventListener('mouseout', function () {
    dragDom.removeEventListener('mousemove', mouseMove);
    moveX = x;
    moveY = y;
  });
  dragDom.addEventListener('mouseup', function () {
    dragDom.removeEventListener('mousemove', mouseMove);
    moveX = x;
    moveY = y;
  });
}
