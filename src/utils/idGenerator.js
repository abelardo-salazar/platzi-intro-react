let idGenerator =  () => '_' + Math.random().toString(36).substring(2, 10)

export { idGenerator }