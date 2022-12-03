export function scroll() {
  const documentRect = document.documentElement.getBoundingClientRect();
    
  if (container.offsetWidth > 650 && documentRect.bottom < container.clientHeight + 20) {
    addCart();
  } else if (documentRect.right < container.offsetWidth + 20) {
    addCart();
  }
}