function checker(){
    let store1 = "";
    let store2 = "";
    let docMaxLength = 0;
    let doc1Count = 0;
    let countStore;
    let resultStore = "";
    let inc = 50; 
let doc1 = document.getElementById("id2").value;
let doc2 = document.getElementById("id3").value;
if(doc1.length > doc1.length){
    docMaxLength = doc1.length
}else{
    docMaxLength = doc2.length
}
if(doc1.length < 50 || doc2.length < 50){
    return alert("Word Limit is 50 or more than 50")
}
while(true){
    for(let i = doc1Count; i <= inc ; i++){
       if(i == docMaxLength){
        countStore = i;
      break;
       }
        store1 += doc1[i];
        store2 += doc2[i];
        countStore = i;
    }
   
    inc += 150;
     if(store1 == store2){
        resultStore += store1 + '\n';
        store1 = "";
        store2 = "";
    }
    else{
        store1 ="";
        store2 = "";
    }
    doc1Count = countStore;
    if(doc1Count == docMaxLength){
        if(resultStore == ""){
            document.getElementById("id4").innerText = "All content is unique"
        }else{
        document.getElementById("id4").innerText = resultStore;
        }
       break;
    }
}

}