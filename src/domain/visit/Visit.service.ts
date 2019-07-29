import { http } from '@/main';
import Visit from '@/domain/visit/Visit.entity';

export default class VisitService {
    
    static save(visit: Visit) {
        if(!visit.getGuest) {
            alert('Every visit needs a Guest.');
            throw new Error('Every visit needs a guest.');
        }
        if(!visit.getWelcomeText) {
            alert('Every visit needs to have a W3lcome Text.');
            throw new Error('Every visit needs to have a w3lcome text.');
        }
        if(!visit.getDate) {
            alert('Every visit needs a Date to come over.');
            throw new Error('Every visit needs a Date ot come over.');
        }
        if(!visit.getId) {
            return http.post('visit/post', visit);
        }
        return http.put('visit/' + visit.getId, visit);
    }

    static getAll() {
        return http.get('visit/getAll');
    }

    static find(id: any) {
        return http.get('visit/getOne/' + id);
    }

    static delete(visit: Visit) {
        return http.delete('visit/' + visit.getId);
    }
    
}