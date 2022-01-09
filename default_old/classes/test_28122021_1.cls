public with sharing class test_28122021_1 {
    public List<WrapperObj> lsWrapperObjs {get; set;}
    public String selectedRecords {get; set;}
    public String selRecordId {get; set;}

    ApexPages.StandardSetController stdSetCtrlr;

    public Integer totalRecs;
    public Integer currentIndex = 0;
    public Integer rowsPerPage = 5;

    public test_28122021_1(ApexPages.StandardSetController stdSetCtrlr) {
        this.stdSetCtrlr = stdSetCtrlr;
        this.totalRecs = [Select count() From Opportunity where Id IN :stdSetCtrlr.getRecords()];

        init();
    }

    private void init() {
        List<Opportunity> lsOpps = [SELECT Id, Name From Opportunity 
            WHERE Id IN :stdSetCtrlr.getRecords() 
            LIMIT :rowsPerPage
            OFFSET :currentIndex];

        lsWrapperObjs = new List<WrapperObj>();
        for (SObject oppObj : lsOpps) {
            lsWrapperObjs.add(new WrapperObj(oppObj));
        }
        System.debug(lsWrapperObjs);
    }

    public void onTableChanged() {
        List<String> lsSelectedOppNames = new List<String>();
        for (WrapperObj obj : lsWrapperObjs) {
            if (obj.isChecked) {
                lsSelectedOppNames.add(obj.oppObj.Name);
            }

            /*if (obj.oppObj.Id == selRecordId) {
                lsSelectedOppNames.add(obj.oppObj.Name);
                continue;
            }*/

            //obj.isChecked = false;
        }
        selectedRecords = String.join(lsSelectedOppNames, '<br/>'); 
    }

    public void previousAction() {
        System.debug('SANK - ' + currentIndex);
        if (currentIndex <= 0) return;

        currentIndex -= rowsPerPage;

        init();
    }

    public void nextAction() {
        if (currentIndex >= totalRecs) return;

        currentIndex += rowsPerPage;

        init();
    }

    @RemoteAction
    public static Contact getContact() {
        return [Select Id,Name From Contact LIMIT 1];
    }

    Class WrapperObj {
        public Boolean isChecked {get; set;}
        public Opportunity oppObj {get; set;}

        public WrapperObj(SObject oppObj) {
            this.oppObj = (Opportunity) oppObj;
        }
    }
}