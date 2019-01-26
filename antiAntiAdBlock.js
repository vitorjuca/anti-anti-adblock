function runAntiAntiAdBlock(){
    window.addEventListener('load', () => {
        const antiAdblockList = document.querySelectorAll('[class*=adblock]')

        antiAdblockList.forEach(node => {
            node.style.display = 'none'
        })

        document.body.style.overflow = 'auto'
    })
}
runAntiAntiAdBlock();