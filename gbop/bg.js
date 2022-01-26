console.log('injected')
window.onload = () => {
    console.log('loaded')
    let list = document.querySelector("#main > div > div.createpage-left > div.createpage-left-gamespeed.noselect")
    //<div class="gamespeed-choice">x</div>
    let smallest = document.createElement('div')
    smallest.className = "gamespeed-choice"
    smallest.innerHTML = "0.5x"
    let biggest = document.createElement('div')
    biggest.className = "gamespeed-choice"
    biggest.innerHTML = "2.5x"
    smallest.onclick = function (_a) {
        let selected = document.querySelector(".gamespeed-choice-selected")
        if (selected != smallest)
        {
            selected.classList.remove("gamespeed-choice-selected")
            smallest.classList.add("gamespeed-choice-selected")
            window.gamespeed = 0.5
        }
    }
    biggest.onclick = function (_a) {
        let selected = document.querySelector(".gamespeed-choice-selected")
        if (selected != biggest)
        {
            selected.classList.remove("gamespeed-choice-selected")
            biggest.classList.add("gamespeed-choice-selected")
            window.gamespeed = 2.5
        }
    }
    document.querySelector("#main > div > div.createpage-left > div.createpage-left-gamespeed.noselect > div:nth-child(1)").before(smallest)
    smallest.style.marginRight = "5px"
    list.append(biggest)
}