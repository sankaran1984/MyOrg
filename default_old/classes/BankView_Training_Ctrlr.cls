public class BankView_Training_Ctrlr {

    public String inputText {get;set;}
    public Map<String, String> output {get; set;}
    
    public void fetchBankDetail() {
        if (String.isBlank(inputText))
            ApexPages.addMessage(new ApexPages.message(ApexPages.Severity.ERROR, 'Input Box is Empty'));
        
        output = new Map<String, String>();
        thomasBayerComBlz1.detailsType obj = new thomasBayerComBlz1.BLZServiceSOAP11port_http().getBank('37050198');
		output.put('bezeichnung', obj.bezeichnung);
        output.put('bic', obj.bic);
        output.put('ort', obj.ort);
        output.put('plz', obj.plz);
    }
    
}