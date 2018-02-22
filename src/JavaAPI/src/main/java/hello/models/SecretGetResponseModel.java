package hello.models;

public class SecretGetResponseModel {
    private final String secretMessage;

    public String getSecretMessage() {
        return secretMessage;
    }

    public SecretGetResponseModel(String secretMessage)
    {
        this.secretMessage = secretMessage;
    }
}
