//Generated by wsdl2apex

public class AsyncThomasBayerComBlz1 {
    public class getBankResponseTypeFuture extends System.WebServiceCalloutFuture {
        public thomasBayerComBlz1.detailsType getValue() {
            thomasBayerComBlz1.getBankResponseType response = (thomasBayerComBlz1.getBankResponseType)System.WebServiceCallout.endInvoke(this);
            return response.details;
        }
    }
    public class AsyncBLZServiceSOAP11port_http {
        public String endpoint_x = 'http://www.thomas-bayer.com/axis2/services/BLZService';
        public Map<String,String> inputHttpHeaders_x;
        public String clientCertName_x;
        public Integer timeout_x;
        private String[] ns_map_type_info = new String[]{'http://thomas-bayer.com/blz/', 'thomasBayerComBlz1'};
        public AsyncThomasBayerComBlz1.getBankResponseTypeFuture beginGetBank(System.Continuation continuation,String blz) {
            thomasBayerComBlz1.getBankType request_x = new thomasBayerComBlz1.getBankType();
            request_x.blz = blz;
            return (AsyncThomasBayerComBlz1.getBankResponseTypeFuture) System.WebServiceCallout.beginInvoke(
              this,
              request_x,
              AsyncThomasBayerComBlz1.getBankResponseTypeFuture.class,
              continuation,
              new String[]{endpoint_x,
              '',
              'http://thomas-bayer.com/blz/',
              'getBank',
              'http://thomas-bayer.com/blz/',
              'getBankResponse',
              'thomasBayerComBlz1.getBankResponseType'}
            );
        }
    }
}