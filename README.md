# Zrozumienie konecepcji

## Definicja słowa kluczowego `this` 

- Słówko kluczowe `this`  w JS umożliwia odwołanie się do kontekstu w miejscu jego zadeklarowania (Przykłady):
  
    - Metody obiektowe:

        ```
        const user = {
            name: 'John',
            surname: 'Doe',
            address: {
            country: 'USA',
            city: 'NY',
            street: 'N/A',
            houseNumber: 4,
        },
        showFullName() {
            console.log(`User full name: ${this.name} ${user.surname}`);
        },
        showUserAddress() {
            console.log(`User ${this.name} address: ${this.address.country}, ${this.address.city}, ${this.address.street} , ${this.address.houseNumber}`);
        },
        };

        user.showFullName();
        user.showUserAddress();
        ```

        Pozwala 'pokazać' JavaScript'owi, gdzie dokładnie ma szukać informacji. Zamiast przeszukiwać cały kod, za pomocą `this` powołujemy się na konkretne miejsce w kodzie (ten obiekt)

        Pozwala również odwoływać się do właściwości nie podając jej nazwy: </br>
    Zamiast `user.name` </br>
    morzemy użyć `this.name`

    - Klasy obiektów:

        s


         
      
      