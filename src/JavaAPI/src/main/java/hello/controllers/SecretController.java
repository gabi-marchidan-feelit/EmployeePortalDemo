package hello.controllers;

import hello.models.SecretGetResponseModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecretController {
    @RequestMapping("/secret")
    public SecretGetResponseModel secret() {
        return new SecretGetResponseModel("mB6PEWqaHPUCLPE9pOAIHIWT");
    }
}
