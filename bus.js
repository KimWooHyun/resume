let EventBusPlugin = {}

EventBusPlugin.install = (Vue, options) => {
  const eventBus = new Vue()
  const event = {
    onCareerAdd: (cb) => { eventBus.$on('career.add', cb) },
    emitCareerAdd: (amount) => { eventBus.$emit('career.add', amount) }
  }

  Vue.bus = eventBus
  Vue.event = event
  Vue.prototype.$bus = eventBus
  Vue.prototype.$event = event
}

export default EventBusPlugin
