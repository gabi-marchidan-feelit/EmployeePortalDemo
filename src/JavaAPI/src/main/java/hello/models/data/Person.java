package hello.models.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RGIS_HR_PERSON", schema = "SCHED")
public class Person {
    @Id
    @Column(name = "PERSON_ID")
    private Long id;

    @Column(name = "NATIONAL_IDENTIFIER")
    private Long nationalId;
}
