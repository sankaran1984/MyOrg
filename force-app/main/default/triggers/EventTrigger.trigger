trigger EventTrigger on TestEvents__e (after insert) {
    System.debug(Trigger.new);
    update new Account(Id = Trigger.new[0].Account_Id__c);
}