package hello.models.api;

public class InfoGetResponseModel {
    private final String message;

    public InfoGetResponseModel (String message)
    {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
