package aula_karate.starwars;

import com.intuit.karate.junit5.Karate;

class UsersRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("starwars").relativeTo(getClass());
    }    

}
