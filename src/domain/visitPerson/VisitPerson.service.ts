import { http } from '@/main';
import VisitPerson from '@/domain/visitPerson/VisitPerson.entity';

export default class VisitPersonService {
    
    static save(person: string, visit: any) {
        if (person) {
            return http.post('visitPerson/post', new VisitPerson(person, visit));
        }
    }

    static getAll() {
        return http.get('visitPerson/getAll');
    }

    static delete(visitPerson: any) {
        return http.delete('visitPerson/' + visitPerson.id);
    }
    
}