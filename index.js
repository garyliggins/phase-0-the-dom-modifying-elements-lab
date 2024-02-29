// Write your code here!
main = document.getElementById("main")
main.remove();

const newHeader = document.createElement("h1")
document.body.append(newHeader)
newHeader.id = "victory"
// newHeader.setAttribute("id", 'victory')
newHeader.textContent = "Gary is the champion"