/**
 * @description 自定义拖拽
 * @param {HTMLElement} dragDom 被拖拽的区域
 * @param {HTMLElement} moveDom 移动的元素
 */
export function customDraggable(dragDom: HTMLElement, moveDom: HTMLElement) {
  /**
   * @description 鼠标到dom左侧距离
   */
  let offsetX = 0;
  /**
   * @description 鼠标到dom上侧距离
   */
  let offsetY = 0;
  /**
   * @description 上次dom的位置X
   */
  let moveX = 0;
  /**
   * @description 上次dom的位置Y
   */
  let moveY = 0;
  /**
   * @description 这次dom的位置X
   */
  let x = 0;
  /**
   * @description 这次dom的位置Y
   */
  let y = 0;
  function mouseMove(e: MouseEvent) {
    x = moveX + e.clientX - offsetX;
    y = moveY + e.clientY - offsetY;
    console.log(moveX, moveY)
    console.log(x, y)

    moveDom.style.left = x + "px";
    moveDom.style.top = y + "px";
  }

  function mouseDown(e: MouseEvent) {
    offsetX = e.clientX - dragDom.offsetLeft || 0;
    offsetY = e.clientY - dragDom.offsetTop || 0;
    dragDom.addEventListener('mousemove', mouseMove);
    console.log('offsetX, offsetY',offsetX, offsetY)
  }

  dragDom.addEventListener('mousedown', mouseDown);

  dragDom.addEventListener('mouseleave', function () {
    dragDom.removeEventListener('mousemove', mouseMove);
    moveX = x;
    moveY = y;
  });
  
  dragDom.addEventListener('mouseup', function (e) {
    e.preventDefault()
    dragDom.removeEventListener('mousemove', mouseMove);
    moveX = x;
    moveY = y;
  });
}
