const sentenceComponents = {
    person: ['You', 'Someone', 'Everyone'],
    action: ['give', 'desire', 'have', 'reject', 'mourn for', 'long for'],
    thing: ['love', 'everything', 'somthing special']
}

const randomNumber = maxValue => Math.floor(Math.random()*(maxValue+1))

const randomSentence = () => {
    const person = sentenceComponents.person[randomNumber(sentenceComponents.person.length-1)]
    const action = sentenceComponents.action[randomNumber(sentenceComponents.action.length-1)]
    const thing = sentenceComponents.thing[randomNumber(sentenceComponents.thing.length-1)]

    console.log(`${person} will ${action} ${thing}.`)
}

randomSentence()