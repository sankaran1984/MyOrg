trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {

    List<BatchLeadConvertErrors__c> lsToInsert = new List<BatchLeadConvertErrors__c>();
    for (BatchApexErrorEvent b : Trigger.new) {
        lsToInsert.add(new BatchLeadConvertErrors__c(
            AsyncApexJobId__c = b.AsyncApexJobId,
            Records__c = b.JobScope,
            StackTrace__c = b.StackTrace
        ));
    }
    
    insert lsToInsert;
}