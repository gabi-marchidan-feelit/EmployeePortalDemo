package hello.controllers;

import hello.models.api.SecretGetResponseModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.filter.OncePerRequestFilter;

@CrossOrigin
@RestController

public class SecretController {
    @RequestMapping("/secret")
    public SecretGetResponseModel secret() {
        return new SecretGetResponseModel("mB6PEWqaHPUCLPE9pOAIHIWT");
    }
}
