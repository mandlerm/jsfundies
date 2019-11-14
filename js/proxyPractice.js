const peeps = ['Melissa', 'Joe', 'Marilyn', 'Abigail', 'Austin'];

const peepsProxy = new Proxy(peeps, {
  get(target, name) {
    console.log('yoyo ', target, name)
  }
})



const person = {name: 'Melissa'}
const personProxy = new Proxy(person, {
  get(target, name) {
    console.log('hello ', target, name)
  }
})

personProxy.name = "Mel"
