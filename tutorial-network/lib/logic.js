/**
 * 
 * @param {da.mtn.model.CreateAccount} ba
 * @transaction
 */
async function CreateAccount(ba){

    let factory = getFactory();
    let registry = await getAssetRegistry("da.mtn.model."+ ba.type);
    let resource = factory.newResource("da.mtn.model", ba.type, ba.accountno);      
    resource.points = 50;
     resource.airtime = 5;
    resource.owner = ba.owner;
    await registry.add(resource);
  
  }
  
  /**
  * 
  * @param {da.mtn.model.MerchantRegistry} ram
  * @transaction
  */
  function MerchantRegistry(ram){
  
      ram.customer.type = ram.type;
      /*            console.log("rame");
             
                x.type = "BusinessAccount";
              x.accountno = ram.customer.mssid;
              x.owner = ram.customer;*/
  return getParticipantRegistry('da.mtn.model.Customer').then(registry=>{
    return registry.update(ram.customer);
      }).then(()=>{
          return getAssetRegistry("da.mtn.model.BusinessAccount");
      }).then(accreg=>{
      if(ram.type == "Merchant"){
        console.log(ram.type);
       
     var factory = getFactory();
    let acc = factory.newResource("da.mtn.model", 'BusinessAccount', ram.accountno);  
       
    acc.points = 50;
    acc.airtime = 5;
    acc.owner = ram.customer; 
    accreg.add(acc);
      }
  });
  }
  
  
  /**
  * 
  * @param {da.mtn.model.SwitchStatus} ram
  * @transaction
  */
  function SwitchStatus(st){
  
      st.customer.status = st.status;
      
  return getParticipantRegistry('da.mtn.model.Customer').then(registry=>{
    return registry.update(st.customer);
  });
  }
  
  /**
  *
  * @param {da.mtn.model.TransferPoints} tp
  * @transaction
  */
  function TransferPoints(tp) {
    
      if(tp.from.points<tp.amount){
        throw "Error: Insufficient funds..!";
    }
  tp.from.points -= tp.amount;
    tp.to.points += tp.amount;
    
   return getAssetRegistry('da.mtn.model.CustomerAccount')
    .then(registry=>{
        return registry.update(tp.from);
    }).then(()=>{
       return getAssetRegistry('da.mtn.model.CustomerAccount');
    }).then(registry=>{
       return registry.update(tp.to);
    });
  }
  

  /**
  *
  * @param {da.mtn.model.BuyFromMerchant} bfm
  * @transaction
  */
  function BuyFromMerchant(bfm) {
    
      if(bfm.from.points<bfm.amount){
        throw "Error: Insufficient funds..!";
    }
  bfm.from.points -= bfm.amount;
    bfm.to.points += bfm.amount;
    
   return getAssetRegistry('da.mtn.model.CustomerAccount')
    .then(registry=>{
        return registry.update(bfm.from);
    }).then(()=>{
       return getAssetRegistry('da.mtn.model.BusinessAccount');
    }).then(registry=>{
       return registry.update(bfm.to);
    });
  }


  /**
  *
  * @param {da.mtn.model.AddToMerchantServices} bfm
  * @transaction
  */
  function AddToMerchantServices(ams) {
       // Get the factory.
    var factory = getFactory();
  
   var account = factory.newResource('da.mtn.model','MerchantService',ams.serviceid);
    
    account.service = ams.service;
    account.owner = ams.customer;
    account.name = ams.service.name;
    if(ams.service.recommendedPriceInPoints){
    	account.recommendedPrice = ams.service.recommendedPriceInPoints;
    }
     console.log(account.name +" "+ams.service.name);
    return getAssetRegistry('da.mtn.model.MerchantService')
    .then(registry=>{
        return registry.add(account);
    });
  }
  /**
  *
  * @param {da.mtn.model.RemoveFromMerchantServices} bfm
  * @transaction
  */
  function RemoveFromMerchantServices(rfms) {
       // Get the factory.
  
    return getAssetRegistry('da.mtn.model.MerchantService')
    .then(registry=>{
        return registry.remove(rfms.service);
    });
  }
  