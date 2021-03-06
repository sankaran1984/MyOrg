//Generated by wsdl2apex

public class thomasBayerComBlz1 {
    public class getBankType {
        public String blz;
        private String[] blz_type_info = new String[]{'blz','http://thomas-bayer.com/blz/',null,'1','1','false'};
        private String[] apex_schema_type_info = new String[]{'http://thomas-bayer.com/blz/','true','false'};
        private String[] field_order_type_info = new String[]{'blz'};
    }
    public class detailsType {
        public String bezeichnung;
        public String bic;
        public String ort;
        public String plz;
        private String[] bezeichnung_type_info = new String[]{'bezeichnung','http://thomas-bayer.com/blz/',null,'0','1','false'};
        private String[] bic_type_info = new String[]{'bic','http://thomas-bayer.com/blz/',null,'0','1','false'};
        private String[] ort_type_info = new String[]{'ort','http://thomas-bayer.com/blz/',null,'0','1','false'};
        private String[] plz_type_info = new String[]{'plz','http://thomas-bayer.com/blz/',null,'0','1','false'};
        private String[] apex_schema_type_info = new String[]{'http://thomas-bayer.com/blz/','true','false'};
        private String[] field_order_type_info = new String[]{'bezeichnung','bic','ort','plz'};
    }
    public class getBankResponseType {
        public thomasBayerComBlz1.detailsType details;
        private String[] details_type_info = new String[]{'details','http://thomas-bayer.com/blz/',null,'1','1','false'};
        private String[] apex_schema_type_info = new String[]{'http://thomas-bayer.com/blz/','true','false'};
        private String[] field_order_type_info = new String[]{'details'};
    }
    public class BLZServiceSOAP11port_http {
        public String endpoint_x = 'http://www.thomas-bayer.com/axis2/services/BLZService';
        public Map<String,String> inputHttpHeaders_x;
        public Map<String,String> outputHttpHeaders_x;
        public String clientCertName_x;
        public String clientCert_x;
        public String clientCertPasswd_x;
        public Integer timeout_x;
        private String[] ns_map_type_info = new String[]{'http://thomas-bayer.com/blz/', 'thomasBayerComBlz1'};
        public thomasBayerComBlz1.detailsType getBank(String blz) {
            thomasBayerComBlz1.getBankType request_x = new thomasBayerComBlz1.getBankType();
            request_x.blz = blz;
            thomasBayerComBlz1.getBankResponseType response_x;
            Map<String, thomasBayerComBlz1.getBankResponseType> response_map_x = new Map<String, thomasBayerComBlz1.getBankResponseType>();
            response_map_x.put('response_x', response_x);
            WebServiceCallout.invoke(
              this,
              request_x,
              response_map_x,
              new String[]{endpoint_x,
              '',
              'http://thomas-bayer.com/blz/',
              'getBank',
              'http://thomas-bayer.com/blz/',
              'getBankResponse',
              'thomasBayerComBlz1.getBankResponseType'}
            );
            response_x = response_map_x.get('response_x');
            return response_x.details;
        }
    }
}