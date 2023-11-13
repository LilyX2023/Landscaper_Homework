//You are starting a landscaping business, but all you have are your teeth.
//Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.

const tools = [
    {name: 'teeth', generates: 1, price: 0 }
    {name: 'scissors', generates: 5, price: 5}
    {name: 'old lawnmower', generates: 50, price: 25}
    {name: 'new lawnmower', generates: 100, price: 250}
    {name: 'students', generates: 250, price: 500}
]

const player = {
    money: 0,
    tool: 0
}

function mowLawn (){
    const tool = tools[player.tool]
    alert(`You cut a lawn with ${tool.name} and make ${tool.generates} dollars`)
    player.money += tool.generates
}

function upgrade() {
    if (player.tool + 1 < tools.length){
        const nextTool = tools[player.tool + 1]
    } else {
        alert(`You've hired the team and there are no more upgrade.`)
    }
}
