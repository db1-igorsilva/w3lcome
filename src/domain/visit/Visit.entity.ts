export default class Visit {
  constructor (private id: any, private date: any, private presentationStartTime: any, private presentationEndTime: any, private guest: string, private welcomeText: string) {}

  get getId () {
    return this.id
  }

  get getDate () {
    return this.date
  }

  get getPresentationStartTime () {
    return this.presentationStartTime
  }

  get getPresentationEndTime () {
    return this.presentationEndTime
  }

  get getGuest () {
    return this.guest
  }

  get getWelcomeText () {
    return this.welcomeText
  }
}
