@RestResource(URLMapping='/CustomRestService/*')
global class RestApiTesting {
	
    @HttpGet
    global static Account getAccount() {
        RestRequest req = RestContext.Request;
        return [Select Id, Name From Account Where Id =: req.params.get('accId')];
    }
    
    @HttpPost
    global static Account createAccount() {
        RestRequest req = RestContext.Request;
        String accName = String.valueOf(req.requestBody.toString());
        Account newAcc = new Account(Name = accName);
        insert newAcc;
        return newAcc;
    }
    
    @HttpDelete
    global static void deleteAccount() {
        RestRequest req = RestContext.Request;
        delete new Account(Id = req.params.get('accId'));
    }
    
    @HttpPatch
    global static void updateName() {
        RestRequest req = RestContext.Request;
        update new Account(Id = req.params.get('accId'), Name = req.requestBody.toString());
        
    }
}