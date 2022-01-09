public class TimeViewCtrlr {
    
    public List<DateTime> values {get; set;}
    public String requestLabel;
    
    public TimeViewCtrlr() {
        values = new List<DateTime>();
    }
    
    public Continuation getCurrentTime() {
        // Make a long running callout
        Http h = new Http();
        HttpRequest hreq = new HttpRequest();
        hreq.setMethod('GET');
        hreq.setEndpoint('http://slowwly.robertomurray.co.uk/delay/15000/url/http://worldclockapi.com/api/json/utc/now');
        hreq.setHeader('Content-Type', 'application/json');
        
        Continuation c = new Continuation(40);
        c.ContinuationMethod = 'processContinuationResponse';
        requestLabel = c.addHttpRequest(hreq);
        
        return c;
    }
    
    public Object processContinuationResponse() {
        HttpResponse hres = Continuation.getResponse(requestLabel);
        System.debug('hres - ' + hres);
        values.add(System.now());
        return null;
    }

}