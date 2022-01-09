public class TemplateController {
    public String currentUserImgURI {public get; public set;}
    public String profileImageUrl   {public get; public set;}
        public static Blob imageData   {public get; public set;}
     List<user> lstuser;

    public TemplateController() {
        ConnectApi.Photo ph =  ConnectApi.UserProfiles.getPhoto(null, UserInfo.getUserId());
        System.debug('@@ph.standardEmailPhotoUrl'+ph.standardEmailPhotoUrl);
        currentUserImgURI = getDataUriFromUri(ph.standardEmailPhotoUrl);
        System.debug('@@'+currentUserImgURI);
        
         lstuser = [select FullPhotoUrl from User where Id =: UserInfo.getUserId()];
         profileImageUrl=lstuser[0].FullPhotoUrl;
    }

    public static String getDataUriFromUri(String url) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');

        Http binding = new Http();
        HttpResponse res = Test.isRunningTest() ? new HttpResponse(): binding.send(req);
        System.debug('Debug111'+res);
        System.debug('Debug222' +res.getBody());

        imageData = Test.isRunningTest() ? Blob.valueOf('') : res.getBodyAsBlob();
        return 'data:'+res.getHeader('Content-Type')+';base64,'+EncodingUtil.base64Encode(imageData);
    }
    
         
    
}