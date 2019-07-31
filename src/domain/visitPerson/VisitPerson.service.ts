import { http } from '@/main'
import VisitPerson from '@/domain/visitPerson/VisitPerson.entity'

export default class VisitPersonService {
  static save (visit: any, person: string) {
    if (person) {
      return http.post('visitPerson/post', new VisitPerson(null, visit, person))
    }
  }

  static getAll () {
    return http.get('visitPerson/getAll')
  }

  static delete (visitPerson: VisitPerson) {
    return http.delete('visitPerson/' + visitPerson.id)
  }
}
