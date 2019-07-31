import { http } from '@/main'
import Guest from './Guest.entity';

export default class GuestService {
  static save (guest: Guest) {
    if (!guest.name) {
        alert('Every Guest needs a name.')
        throw new Error('Every Guest needs a name.')
    }
    if (!guest.relationshipType) {
        alert('Every Guest has a Relationship Type.')
        throw new Error('Every Guest has a Relationship Type.')
    }
    return http.post('guest/post', guest)
  }

  static getAll () {
    return http.get('guest/getAll')
  }

  static delete (guest: Guest) {
    return http.delete('guest/' + guest.id)
  }
}
