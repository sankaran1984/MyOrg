@isTest
public class testableTest {

    public static testmethod void test1(){
        System.runAs(new User(Id = UserInfo.getUserId())){
            testable t = new testable();
        }
    }
}