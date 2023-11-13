Feature: Testando API StarWars

Scenario:  Testando retorndo people/1/
        Given url "https://swapi.dev/api/people/1/"
        When method get
        Then return 200 

Scenario:  Testando retorndo people/1/ com infos invalidas
        Given url "https://swapi.dev/api/people/1234/"
        When method get
        Then return 404 