package hello.repositories;

import hello.models.data.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
//
//public interface IPersonRepository extends CrudRepository<Person, Long> {
//
//    @Query(value="SELECT t.PERSON_ID, t.NATIONAL_IDENTIFIER FROM RGIS_HR_PERSON t where t.PERSON_ID=:id", nativeQuery = true)
//    public Person getById(@Param("id")Long id) ;
//
//    @Query(value="SELECT t.PERSON_ID, t.NATIONAL_IDENTIFIER FROM RGIS_HR_PERSON t", nativeQuery = true)
//    public List<Person> getPersonList();
//
//
//}
