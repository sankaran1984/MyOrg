/* LWCHelper Apex class */
public with sharing class LWCHelper {

    @AuraEnabled
    public static List<SObject> getRecords(String searchQuery){
        try {
            return Database.query(searchQuery);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

