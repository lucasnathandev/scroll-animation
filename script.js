const boxes = document.querySelectorAll(".box")
const boxContainer = document.querySelector(".box-container")

function getScrollAreaHeight(element) {
  return element.clientHeight
}

const boxHeight = getScrollAreaHeight(boxes[0])

function checkBoxes() {
  const triggerBottom = window.innerHeight - window.innerHeight * 0.2
  const triggerTop = window.innerHeight
  boxes.forEach((box) => {
    const { top: boxTop } = box.getBoundingClientRect()
    const { bottom: boxBottom } = box.getBoundingClientRect()

    if (boxTop < triggerBottom) return box.classList.add("show")
    if (boxBottom >= triggerTop) return box.classList.remove("show")
  })
}

window.addEventListener("scroll", checkBoxes)
