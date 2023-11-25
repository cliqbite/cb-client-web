class Time {
  currentTime: Date

  constructor(date: Date) {
    this.currentTime = date ?? new Date()
  }

  get getTime() {
    const hours = this.currentTime.getHours()
    const minutes = this.currentTime.getMinutes()
    const seconds = this.currentTime.getSeconds()
    return `${hours}:${minutes}:${seconds}`
  }
}

export default Time
