export class User {
    firstname: string = '';
    lastname: string = '';
    age: number = 0;
    fullname: string = '';

    static BIRTH_YEAR: number = 2000;

    setFirstname(firstname: string){
        this.firstname = firstname;
    }

    setLastname(lastname: string){
        this.lastname = lastname;
    }
    
    setAge(age: number){
        this.age = age;
    }
    
    getAge(){
        return this.age;
    }
    
    getFullName(){
        this.fullname = `${this.firstname} ${this.lastname}`;
        return '';
    }
}
