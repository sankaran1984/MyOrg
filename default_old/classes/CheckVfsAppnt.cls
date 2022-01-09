/*
System.schedule('CheckVfsAppnt 00',  '0 00 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 05',  '0 05 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 10',  '0 10 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 15',  '0 15 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 20',  '0 20 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 25',  '0 25 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 30',  '0 30 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 35',  '0 35 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 40',  '0 40 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 45', '0 45 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 50', '0 50 * * * ?', new CheckVfsAppnt());
System.schedule('CheckVfsAppnt 55', '0 55 * * * ?', new CheckVfsAppnt());
*/
public with sharing class CheckVfsAppnt implements schedulable, Database.batchable<SObject>, Database.AllowsCallouts {

    List<String> lsAvailableDates = new List<String>();

    public void execute(System.schedulableContext sc) {
        Database.executeBatch(new CheckVfsAppnt());
    }

    public List<Sobject> start(Database.batchableContext bc) {return [Select Id From User LIMIT 1];}

    public void execute(Database.batchableContext bc, List<Sobject> lsObjs) {
        HttpRequest req = new HttpRequest();

        req.setMethod('GET');
        req.setEndPoint('https://www.hcilondon.gov.in/appointment.php?month=10&year=2021&apttype=Submission&locationid=3&serviceid=10#dw');
        
        HttpResponse res = new Http().send(req);
        String resp = res.getBody();
        
        Matcher m = Pattern.compile('(<a href="appointment)(.*?)(/a>)').matcher(resp);
        
        if (m.find()) {
            while(m.find()) {
                String anchorTag = m.group(2);
                if (anchorTag.contains('28B913') && !anchorTag.contains('a_disable') && 
                        !anchorTag.contains('a_full')) {
                    System.debug(anchorTag);
                    lsAvailableDates.add(anchorTag);
                }
            }
        }
        
        if (!lsAvailableDates.isEmpty()) {
            sendNotification();
        }
    }

    public void finish(Database.batchableContext bc) {}

    private void sendNotification() {
        CustomNotificationType ct = [SELECT Id, DeveloperName FROM CustomNotificationType
            Where DeveloperName = 'VFS_Alert' LIMIT 1];
        Messaging.CustomNotification mc = new Messaging.CustomNotification();
        mc.setNotificationTypeId(ct.Id);
        mc.setTargetId('000000000000000AAA');
        mc.setTitle('Good news : VFS appointment available');
        mc.setBody('Hi Sankaran \n\n' + String.join(lsAvailableDates, '\n\n\n'));
        mc.send(new Set<String>{UserInfo.getUserId()});
    }
}