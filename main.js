console.log("backlog_pr_diff_remover: started");
let removed = false;
const timer = setInterval(()=>{
  const htmlCollection = document.getElementsByClassName("code-view");
  const htmlCollectionArray = Array.from(htmlCollection);
  htmlCollectionArray.forEach((e) => {
    const dataPath = e.getAttribute("data-path");
    if(
      dataPath.includes("openapi")
      || dataPath.endsWith("freezed.dart")
      || dataPath.endsWith("g.dart")
    ){
      console.log(`backlog_pr_diff_remover: removed ${dataPath}`);
      e.remove();
      removed = true;
    }
  });
  if(removed){
    console.log("backlog_pr_diff_remover: finished");
    clearInterval(timer);
  }
},
  2000);
