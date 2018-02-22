package hello.models;

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
