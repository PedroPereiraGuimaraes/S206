package aula_karate.pokemon;

import com.intuit.karate.junit5.Karate;

class PokeRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
