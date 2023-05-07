/**
 * @description 自定义拖拽
 * @param {HTMLElement} dragDom 被拖拽的区域
 * @param {HTMLElement} moveDom 移动的元素
 */
export function customDraggable(dragDom: HTMLElement, moveDom: HTMLElement) {
  let startLeft = 0;
  let startTop = 0;
  let startX = 0;
  let startY = 0;

  if (!dragDom || !moveDom) return;

  // 鼠标按下事件 且不能抬起 才能开始移动 鼠标抬起 停止拖拽
  const down = (event: MouseEvent) => {
    // 获取开始盒子的位置
    const { left, top } = dragDom.getBoundingClientRect();
    startLeft = left;
    startTop = top;
    startX = event.clientX;
    startY = event.clientY;

    // 鼠标按下 绑定鼠标移动事件
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  }
  window.addEventListener("mousedown", down);

  // 鼠标移动 拖拽盒子事件
  const move = (event: MouseEvent) => {
    // 获取盒子当前的 left top
    let curLeft = event.clientX - startX + startLeft;
    let curTop = event.clientY - startY + startTop;
    moveDom.style.left = curLeft + "px"
    moveDom.style.top = curTop + "px"
  }
  const up = (event: MouseEvent) => {
    // 鼠标抬起 取消鼠标移动事件绑定
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", up);
  }

}
