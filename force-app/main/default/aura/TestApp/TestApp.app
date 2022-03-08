<aura:application extends="force:slds">
	<aura:attribute name="buttonLabel" type="String" default="Neutral"/>
    
    <aura:handler name="init" value="{!this}" action="{!c.initHandler}"/>    

    <!-- <lightning:button label="Neutral"></lightning:button>  -->   
    <c:di_injector bindingName="lc_button">
        <c:di_injectorAttribute name="label" value="{!v.buttonLabel}"/>
    </c:di_injector>
</aura:application>