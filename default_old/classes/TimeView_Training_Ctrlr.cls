public class TimeView_Training_Ctrlr {
    
    public List<DateTime> values {get;set;}
    public String requestLabel;
    
    public TimeView_Training_Ctrlr() {
        values = new List<DateTime>();
    }
    
    public Continuation getCurrentTime(){
        Http h = new Http();
        HttpRequest hreq = new HttpRequest();
        hreq.setMethod('GET');
        hreq.setEndpoint('http://slowwly.robertomurray.co.uk/delay/10000/url/http://worldclockapi.com/api/json/utc/now');
        hreq.setHeader('Content-Type', 'application/json');
        
        Continuation c = new Continuation(40);
        c.ContinuationMethod = 'processResponse';
        requestLabel = c.addHttpRequest(hreq);
        
        return c;
        
        /*HttpResponse r = h.send(hreq);
        values.add(System.now());*/
    }
    
    public Object processResponse() {
        HttpResponse hres = Continuation.getResponse(requestLabel);
        values.add(System.now());
        return Null;
    }

}