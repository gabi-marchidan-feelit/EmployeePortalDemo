package hello.services;

import hello.models.data.Person;

import java.util.List;

public interface PersonService {

    List<Person> listAll();

    Person getById(Long id);

    Person saveOrUpdate(Person product);

    void delete(Long id);
}
