trigger updateTrigger on Merchandise__c (before update) {
	System.Debug('updateTrigger - static record-'+mystatic.m);
    System.Debug('Invoice__r-'+Trigger.new[0].Invoice__r);
}