package hello.controllers;

import hello.models.data.Person;
//import hello.repositories.IPersonRepository;
import hello.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@RestController
public class PersonController {

    @Autowired
//    private IPersonRepository repo;
    @PersistenceContext
    protected EntityManager entityManager;
    @RequestMapping("/person")
    public int GetPerson()
    {
//        Person p = repo.getById(new Long(1266683));
//        int count = repo.getPersonList().size();
        Query query = entityManager.createQuery("SELECT p from Person p");
        Object count = query.getSingleResult();

        return 1;
    }
}
