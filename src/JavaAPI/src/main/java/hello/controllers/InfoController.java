package hello.controllers;

import hello.models.api.InfoGetResponseModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {
    @RequestMapping("/info")
    public InfoGetResponseModel info() {
        return new InfoGetResponseModel("Info");
    }
}
