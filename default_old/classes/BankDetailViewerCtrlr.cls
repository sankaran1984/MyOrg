public class BankDetailViewerCtrlr {

    public String inputText {get; set;}
    public Map<String, String> output {get; set;}
    
    public void fetchBankDetail() {
        if (String.isBlank(inputText))
            Apexpages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Input box is empty.'));
        
        output = new Map<String, String>();
        thomasBayerComBlz.detailsType d = new thomasBayerComBlz.BLZServiceSOAP11port_http().getBank(inputText);
        output.put('bezeichnung', d.bezeichnung);
        output.put('bic', d.bic);
        output.put('ort', d.ort);
        output.put('plz', d.plz);
            
    }
}